import styled from "styled-components";

const StyledFrame = styled.div`
  padding: 20px 25px;
  border: 1px solid ${({ theme }) => theme.lightGray};
  border-radius: 10px;
  margin-bottom: 20px;

  :last-of-type {
    margin-bottom: 0;
  }
`;

export default StyledFrame;
