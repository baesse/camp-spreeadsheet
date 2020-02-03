import styled, { css } from 'styled-components';
import theme from 'theme/theme';

export const Content = styled.button`
  cursor: pointer;
  font-weight: bold;
  color: ${theme.colors.white};
  padding: ${(props) => (props.btnType !== 'pagination' ? '10px 12px' : '7px 10px')};
  font-size: ${theme.font.fontSizeDefault};
  outline: 0;
  width: ${(props) => `${props.width}px`};
  border: none;
  white-space: nowrap;
  text-decoration: none;
  border-radius: ${(props) => (props.btnType !== 'pagination' ? '5px' : '2px')};
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;

  background-color: ${(props) => (props.btnType === 'primary' || props.btnType === 'pagination'
      ? theme.colors.defaultColor
      : theme.colors.gray)};

  ${(props) => props.disabled
    && css`
      cursor: not-allowed;
      background-color: #bbb;

      &:hover {
        background-color: #bbb;
      }
    `};
`;
