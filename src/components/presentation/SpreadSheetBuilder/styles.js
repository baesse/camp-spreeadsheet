import styled from 'styled-components';
import theme from 'theme/theme';

export const Header = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${theme.colors.defaultInput};
  display: flex;
`;

export const Option = styled.div`
  height: 50px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  border-bottom: 5px solid ${theme.colors.borderGray};
  :hover {
    cursor: pointer;
    box-shadow: 0 0 5px 0 ${theme.colors.defaultBoxShadow};
    border-bottom: 5px solid ${theme.colors.defaultColor};
  }
  label {
    :hover {
      cursor: pointer;
    }
  }
`;

export const Label = styled.label`
  color: ${theme.colors.darkGray};
  font-weight: bold;
  font-size: 15px;
  font-family: 'Lato', sans-serif;
`;
