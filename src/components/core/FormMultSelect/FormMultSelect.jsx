import React from 'react';
import Select from 'react-select/creatable';
import SpanError from 'components/core/SpanError';
import { customStylesSelect, Label, Container } from './FormMultSelectStyle';

export default function FormMultSelect({
  name,
  isError,
  children,
  placeholder,
  error,
  setFieldValue,
}) {
  return (
    <Container>
      <Label htmlFor={name} isError={isError}>
        {children}
      </Label>
      <Select
        placeholder={placeholder}
        styles={customStylesSelect}
        onChange={(e) => setFieldValue(name, e ? [...e.map((k) => k.value)] : [])}
        isMulti
        name={name}
        isError={isError}
      />
      {isError && <SpanError>{error}</SpanError>}
    </Container>
  );
}
