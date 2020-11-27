import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div``;

const StyledStar = styled(Star)`
  width: 20%;
  height: auto;
`;

// eslint-disable-next-line no-unused-vars
const Score = ({ score, ...props }) => {
  const scoreForStar = mapScore(score);

  return (
    <StyledWrapper {...props}>
      <StyledStar score={scoreForStar[0]} id={1} />
      <StyledStar score={scoreForStar[1]} id={2} />
      <StyledStar score={scoreForStar[2]} id={3} />
      <StyledStar score={scoreForStar[3]} id={4} />
      <StyledStar score={scoreForStar[4]} id={5} />
    </StyledWrapper>
  );
};

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

// eslint-disable-next-line react/prop-types
function Star({ score, className, id }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      className={className}
    >
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F7B000" />
          <stop
            offset={`${score * 100}%`}
            stopColor="#F7B000"
            stopOpacity="1"
          />
          <stop offset="0%" stopColor="#8C8C8C" />
          <stop offset="100%" stopColor="#8C8C8C" />
        </linearGradient>
      </defs>
      <path
        d="M34 16.78a2.22 2.22 0 00-1.29-4l-9-.34a.23.23 0 01-.2-.15l-3.11-8.4a2.22 2.22 0 00-4.17 0l-3.1 8.43a.23.23 0 01-.2.15l-9 .34a2.22 2.22 0 00-1.29 4l7.06 5.55a.23.23 0 01.08.24l-2.43 8.61a2.22 2.22 0 003.38 2.45l7.46-5a.22.22 0 01.25 0l7.46 5a2.2 2.2 0 002.55 0 2.2 2.2 0 00.83-2.4l-2.45-8.64a.22.22 0 01.08-.24z"
        className="clr-i-solid clr-i-solid-path-1"
        fill={`url(#${id})`}
      />
    </svg>
  );
}

function mapScore(score) {
  let scoreBuff = score;
  const scoreForStar = [];

  for (let i = 0; i <= 4; i += 1) {
    if (scoreBuff >= 1) {
      scoreForStar.push(1);
      scoreBuff -= 1;
    } else if (scoreBuff > 0) {
      scoreForStar.push(scoreBuff);
      scoreBuff = 0;
    } else {
      scoreForStar.push(0);
    }
  }

  return scoreForStar;
}

export default Score;
