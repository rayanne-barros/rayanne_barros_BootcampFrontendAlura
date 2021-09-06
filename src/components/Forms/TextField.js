import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../foundation/Text';

const InputWrapper = styled.div`
    margin-bottom: 17px;
`;

const Input = styled(Text)`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 0;
  outline: 0; 
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
};

export default function TextField({
  placeholder, name, onChange, value, type,
}) {
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
    </InputWrapper>
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
