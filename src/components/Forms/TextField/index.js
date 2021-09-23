/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Text from '../../foundation/Text';

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

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error};
    & + span {
      color: ${theme.colors.error};
      font-size: 11px;
    }
  `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
};

export default function TextField({
  placeholder, name, onChange, value, type, error, isTouched, ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;
  return (
    <InputWrapper>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        required
        {...props}
      />

      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error"
          textAlign="left"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
};
