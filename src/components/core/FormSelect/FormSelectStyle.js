import styled from 'styled-components';
import theme from 'theme/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 7.5px;
  margin-right: 7.5px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: ${theme.colors.darkGray};
  font-weight: 700;
  font-size: ${theme.font.fontSizeDefault};

  ${(props) => props.isError && `color: ${theme.colors.error}`}
`;

export const SelectStyle = styled.select`
  margin: 0;
  outline: 0;
  line-height: 1.21em;
  padding: 0.67em 1em;
  font-size: 1em;
  background: ${theme.colors.defaultInput};
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 5px;
  box-shadow: inset 0 0 0 0 transparent;
  transition: color 0.1s ease, border-color 0.1s ease;
  height: 46px;

  ${(props) => props.isError
    && `border-color: ${theme.colors.error}; background-color: ${theme.colors.lightError};`}
`;
