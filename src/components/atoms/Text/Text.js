import styled from "styled-components";
import PropTypes from "prop-types";
import { allSizes, defaultSize } from "@utils/fontSizes";

const StyledText = styled.span`
  font-size: 48px;
`;

StyledText.propTypes = {
  fontSize: PropTypes.oneOf(allSizes),
};

StyledText.defaultProps = {
  fontSize: defaultSize,
};

export default StyledText;
