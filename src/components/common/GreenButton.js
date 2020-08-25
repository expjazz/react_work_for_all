import styled from 'styled-components';
import tw from 'tailwind.macro';

const StyledGreenButton = styled.button.attrs({
  className: ' hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline',

})`
  background: ${props => props.theme.green};
`;

export default StyledGreenButton;
