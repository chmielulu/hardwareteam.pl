import React, { createRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";
import { ERROR, WARNING, DONE } from "@constants/statuses";
import { connect } from "react-redux";
import { removeStatus as removeStatusAction } from "@actions/index";
import Icon from "@iconify/react";
import closeIcon from "@iconify/icons-clarity/window-close-line";
import errorIcon from "@iconify/icons-clarity/error-line";
import warningIcon from "@iconify/icons-clarity/warning-line";
import doneIcon from "@iconify/icons-clarity/check-circle-line";
import { useFontSize } from "@hooks/styled-components";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const StyledStatusItem = styled.div`
  ${({ theme }) => useFontSize(theme, "m", "l")}
  position: fixed;
  left: 10px;
  bottom: 10px;
  z-index: 99999999999;
  width: 350px;
  background: ${({ $kind }) => getBackground($kind)};
  color: ${({ $kind }) => getColor($kind)};
  padding: 10px 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  transform-origin: center top;
  transition: 0.4s transform ease-in-out, 0.4s opacity ease-in-out;
  transform: ${({ $translate }) => `translateY(-${$translate})`};

  &.enter {
    opacity: 0.5;
    transform: ${({ $translate }) => `translateY(-${$translate}) scale(0)`};
  }

  &.enter-done {
    opacity: 1;
    transform: ${({ $translate }) => `translateY(-${$translate}) scale(1)`};
  }

  &.exit-active {
    opacity: 0;
    transform: ${({ $translate }) => `translateY(-${$translate}) scale(0.5)`};
  }

  @media (max-width: 1024px) {
    top: 95px;
    transform: translate(-50%, 0);
    transform: ${({ $translate }) => `translate(-50%, ${$translate})`};
    left: 50%;
    width: 90%;
    bottom: unset;

    &.enter {
      transform: ${({ $translate }) =>
        `translate(-50%, ${$translate}) scale(0)`};
    }

    &.enter-done {
      transform: ${({ $translate }) =>
        `translate(-50%, ${$translate}) scale(1)`};
    }

    &.exit-active {
      transform: ${({ $translate }) =>
        `translate(-50%, ${$translate}) scale(0.5)`};
    }
  }

  @media (max-width: 770px) {
    top: 65px;
  }
`;

const StyledRemoveButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  border: 0;
  background: ${({ $kind }) => rgba(getColor($kind), 0.2)};
  color: ${({ $kind }) => getColor($kind)};
  border-radius: 50%;
  width: 23px;
  height: 23px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  @media (max-width: 1024px) {
    position: static;
    width: 27px;
    height: 27px;
  }
`;

const StyledIcon = styled(Icon)`
  font-size: 2.6rem;
  margin-right: 5px;
`;

const StyledButtonIcon = styled(Icon)`
  font-size: 2.2rem;
`;

const StyledText = styled.p`
  flex: 1;
`;

const Status = ({ statuses, removeStatus }) => {
  const { length } = statuses;
  const [refs, setRefs] = useState([]);
  const [translate, setTranslate] = useState([]);

  useEffect(() => {
    setRefs((refs) =>
      Array(length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );

    return () => {
      setRefs([]);
    };
  }, [length]);

  useEffect(() => {
    const newTranslateY = [];
    refs.forEach(({ current }, index) => {
      if (index === 0) {
        newTranslateY.push(0);
        return;
      }

      newTranslateY.push(current.clientHeight + newTranslateY[index - 1] + 10);
    });

    setTranslate(newTranslateY.reverse());

    return () => {
      setTranslate([]);
    };
  }, [refs]);

  useEffect(() => {
    if (!statuses) {
      return;
    }

    const timeOuts = statuses.map(({ id }, index) => {
      const time = (index + 1) * 6000;

      return setTimeout(() => {
        removeStatus(id);
      }, time);
    });

    return () => {
      timeOuts.forEach((timeout) => clearInterval(timeout));
    };
  }, [statuses, removeStatus]);

  const handleRemoveButtonClick = (id) => {
    removeStatus(id);
  };

  return (
    <>
      <TransitionGroup>
        {statuses.map(({ kind, id, message }, index) => (
          <CSSTransition key={id} timeout={500}>
            <StyledStatusItem
              $kind={kind}
              ref={refs[index]}
              $translate={
                translate[index] !== undefined
                  ? translate[index] !== 0
                    ? `${translate[index]}px`
                    : "0px"
                  : null
              }
            >
              <StyledIcon icon={getIcon(kind)} />
              <StyledText>{message}</StyledText>
              <StyledRemoveButton
                onClick={() => handleRemoveButtonClick(id, index)}
                title="Zamknij"
                aria-label="Zamknij"
                $kind={kind}
              >
                <StyledButtonIcon icon={closeIcon} />
              </StyledRemoveButton>
            </StyledStatusItem>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

function getIcon(kind) {
  if (kind === ERROR) {
    return errorIcon;
  }

  if (kind === WARNING) {
    return warningIcon;
  }

  return doneIcon;
}

function getBackground(kind) {
  if (kind === ERROR) {
    return "#FDE5E6";
  }

  if (kind === WARNING) {
    return "#FDF6E5";
  }

  return "#E5FEE6";
}

function getColor(kind) {
  if (kind === ERROR) {
    return "#e7000e";
  }

  if (kind === WARNING) {
    return "#E79800";
  }

  return "#00a300";
}

Status.propTypes = {
  statuses: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.oneOf([ERROR, DONE, WARNING]),
      id: PropTypes.string,
      message: PropTypes.string,
    })
  ),
  removeStatus: PropTypes.func.isRequired,
};

Status.defaultProps = {
  statuses: [],
};

const mapStateToProps = (state) => {
  const { statuses } = state;
  return { statuses };
};

const mapDispatchToProps = (dispatch) => ({
  removeStatus: (id) => dispatch(removeStatusAction(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);
