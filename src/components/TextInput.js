import React from 'react';
import styled from 'styled-components';

const Input = styled.input.attrs({ 
  type: 'text',
  placeholder: 'Search for comics',
  className: 'form-control input-lg input-block',
  id: "search-box"
})`
  padding-left: 40px;
  padding-top: 12px;
  padding-bottom: 12px;
`;

const Label = styled.label`
  width: 100%;
`;

const TextInput = ({ label, value, onChange, ...props }) => (
  <Label {...props}>
    {label}
    <Input value={value} onChange={(e) => onChange(e.target.value)} />
  </Label>
);

export default TextInput;
