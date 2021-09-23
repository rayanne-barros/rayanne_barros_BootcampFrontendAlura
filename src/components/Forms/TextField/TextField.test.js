import React from 'react';
import user from '@testing-library/user-event';
import { render, screen } from '../../../infra/test/testUtils';
import TextField from './index';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <TextField
        placeholder="Nome"
        value="Rayanne"
        onChange={() => { }}
        name="nome"
        type="text"
      />,
    );
    const textField = screen.getByPlaceholderText(/nome/i);
    expect(textField).toMatchSnapshot();
  });

  describe('when field is valid', () => {
    describe('and user is typing', () => {
      test('the value must be updated', () => {
        const onChangeMock = jest.fn();
        render(
          <TextField
            placeholder="Nome"
            value=""
            onChange={onChangeMock}
            name="nome"
            type="text"
            isTouched
          />,
        );
        const inputNome = screen.getByPlaceholderText(/nome/i);
        user.type(inputNome, 'Rayanne');
        expect(onChangeMock).toHaveBeenCalledTimes(7);
      });
    });
  });

  describe('when field is invalid', () => {
    test('displays the respective error message', () => {
      render(
        <TextField
          placeholder="Email"
          value="email.teste.com"
          onChange={() => { }}
          name="email"
          type="email"
          isTouched
          error="O campo email é obrigatório"
        />,
      );
      const inputEmail = screen.getByPlaceholderText(/email/i);
      expect(inputEmail).toHaveValue('email.teste.com');
      expect(screen.getByRole('alert')).toHaveTextContent('O campo email é obrigatório');
      expect(inputEmail).toMatchSnapshot();
    });
  });
});
