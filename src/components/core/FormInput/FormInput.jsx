import React from 'react';

import SpanError from 'components/core/SpanError';

import { Container, Label, InputStyle } from './FormInputStyle';

const FormInput = ({
  type,
  id,
  name,
  value,
  onChange,
  onBlur,
  isError,
  error,
  children,
  isSearch,
  clear,
  disabled,
}) => {
  return (
    <Container>
      {!isSearch && (
        <Label htmlFor={name} isError={isError}>
          {children}
        </Label>
      )}
      <InputStyle
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        isError={isError}
        isSearch={isSearch}
        placeholder={isSearch && children}
        disabled={disabled}
      />
      {isError && <SpanError>{error}</SpanError>}
    </Container>
  );
};

export default FormInput;
