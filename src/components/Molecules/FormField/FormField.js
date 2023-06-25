/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Atoms/Label/Label';
import { Input } from 'components/Atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = React.forwardRef(({ onChange, value, label, name, isTextArea, id, type = 'text', ...props }, ref) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <Input as="textarea" isTextArea name={name} id={id} value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
      ) : (
        <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} {...props} ref={ref} />
      )}
    </Wrapper>
  );
});

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default FormField;
