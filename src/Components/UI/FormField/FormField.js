import React from 'react';
import {FormGroup, Input} from "reactstrap";

const FormField = (
  {name, type, placeholder, onChange, value, required, className, formClassName}
) => {
  return (
    <FormGroup row className={formClassName}>
        <Input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required={required}
          className={'m-0 p-0' + className}
        />
    </FormGroup>
  );
};

export default FormField;