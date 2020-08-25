import styled from 'styled-components';

const StyledRightArrow = styled.div`
  background: ${props => props.theme.green};
  color: transparent;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  width: 4rem;
  font-size: 3rem;
  height: 60px;
  display: grid;
  justify-content: start;
  align-items: center;
  padding-left: 1rem;

  svg {
    stroke: ${props => props.theme.white};
    stroke-width: 30;
  }

`;
const StyledLeftArrow = styled.div`
  background: ${props => props.theme.green};
  color: transparent;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  width: 4rem;
  font-size: 10px;
  height: 60px;
  display: grid;
  justify-content: flex-end;
  font-size: 3rem;
  padding-right: 1rem;
  align-items: center;

  svg {
    stroke: ${props => props.theme.white};
    stroke-width: 30;
  }

`;

const FinalButton = styled.button`
  background: transparent;
  outline: none;

  :focus {
    outline: none;
  }

`;
export default { StyledLeftArrow, StyledRightArrow, FinalButton };
