import React from "react";

import SpanError from "components/core/SpanError";

import { Container, Label, SelectStyle } from "./FormSelectStyle";

const FormInput = ({
  defaultValue,
  type,
  id,
  name,
  rows,
  label,
  onChange,
  onBlur,
  isError,
  error,
  children,
  value
}) => {
  return (
    <Container>
      <Label htmlFor={name} isError={isError}>
        {label}
      </Label>
      <SelectStyle
        type={type}
        value={value}
        id={id}
        name={name}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        isError={isError}
        defaultValue={defaultValue}
      >
        {children}
      </SelectStyle>
      {isError && <SpanError>{error}</SpanError>}
    </Container>
  );
};

export default FormInput;
