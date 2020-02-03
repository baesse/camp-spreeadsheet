import theme from 'theme/theme';
import styled from 'styled-components';

export const customStylesSelect = {
  container: (provided, state) => ({
    width: '100%',
    font: 'arial',
    borderColor: '#17B3D2',
    ...provided,
    backgroundColor: theme.colors.defaultInput,
  }),
  control: (base, state) => ({
    ...base,
    background: theme.colors.defaultInput,
    minHeight: '46px',
    borderColor: state.isError ? 'red' : '',
    '&:hover': {
      borderColor: state.isFocused ? 'red' : 'blue',
    },
  }),
  dropdownIndicator: (provided, state) => ({
    fill: theme.colors.defaultColor,
    svg: {
      fill: theme.colors.defaultColor,
      height: '15px',
    },
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

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-bottom: 15px;

  > svg {
    position: absolute;
    right: 10px;
    font-size: 20px;
  }
`;

export const Label = styled.label`
  color: ${theme.colors.darkGray};
  font-weight: 700;
  font-size: ${theme.font.fontSizeDefault};

  ${props => props.isError && `color: ${theme.colors.error}`}
`;
