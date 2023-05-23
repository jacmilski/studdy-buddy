/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/Atoms/Label/Label';
import { Input } from 'components/Atoms/Input/Input';
import { Wrapper } from './FormField.styles';

const FormField = React.forwardRef(({ label, id, name, value, type, handleChange, ...props }, ref) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <Input ref={ref} value={value} name={name} id={id} type={type} data-testid={label} onChange={(e) => handleChange(e)} />
  </Wrapper>
));

FormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  handleChange: PropTypes.func,
};

FormField.defaultProps = {
  type: 'text',
  value: '',
};

export default FormField;
