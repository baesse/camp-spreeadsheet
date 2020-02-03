import styled from 'styled-components';
import theme from 'theme/theme';

export const Column = styled.div`
  display: flex;
  flex-flow: column;
`;

export const LabelColumn = styled.label``;

export const BoxCelHeader = styled.div`
  height: 50px;
  width: 200px;
  background-color: ${theme.colors.gray};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => (props.first ? '25px' : '0')};
`;

export const BoxRows = styled.div`
  display: flex;
  flex-flow: column;
`;

export const CelTextInput = styled.input`
  margin: 0;
  outline: 0;
  line-height: 1.21em;
  padding: 0.67em 1em;
  width: 200px;
  font-size: 1em;
  background: ${theme.colors.defaultInput};
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  box-shadow: inset 0 0 0 0 transparent;
  transition: color 0.1s ease, border-color 0.1s ease;
  height: 46px;
  opacity: ${props => (props.disabled ? 0.5 : '')};
  font-weight: ${props => (props.column ? 'bold' : '')};
  text-align: ${props => (props.column ? 'center' : '')}
    ${props =>
      props.required &&
      `border-color: ${theme.colors.error}; background-color: ${theme.colors.lightError};`};
`;

export const BoxColumns = styled.div`
  display: flex;
`;

export const SelectOptions = {
  container: (provided, state) => ({
    width: '100%',
    font: 'arial',
    ...provided,
  }),
  control: (base, state) => ({
    ...base,
    background: state.selectProps.required
      ? theme.colors.lightError
      : theme.colors.defaultInput,
    minHeight: '46px',
    borderRadius: '0px',
    borderColor: state.selectProps.required ? 'red' : '',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
  onFocus: (provided, state) => ({
    ...provided,
  }),
};

export const ButtoNewRow = styled.button`
  cursor: pointer;
  font-weight: bold;
  color: ${theme.colors.white};
  padding: ${props =>
    props.btnType !== 'pagination' ? '10px 12px' : '7px 10px'};
  font-size: ${theme.font.fontSizeDefault};
  outline: 0;
  width: ${props => `${props.width}px`};
  border: none;
  white-space: nowrap;
  text-decoration: none;
  transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease,
    box-shadow 0.1s ease, background 0.1s ease;
  background-color: ${theme.colors.defaultColor};
  margin-left: ${props => (props.first ? '25px' : '0')};
`;

export const BoxColumnPosition = styled.div`
  display: flex;
`;

export const PositionColumn = styled.label`
  width: 25px;
  text-align: center;
  margin-top: auto;
`;
