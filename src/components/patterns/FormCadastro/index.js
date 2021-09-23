/* eslint-disable react/jsx-no-bind */
import React from 'react';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import styled from 'styled-components';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { Button } from '../../common/Button';
import TextField from '../../Forms/TextField';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { useForm } from '../../../infra/hooks/forms/useForm';
import contactService from '../../../services/contact/contactService';

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 0;
  button {
    height: 38px;
    width: 38px;
    font-weight: 600;
    border-radius: 50%;
    padding: 10px;
  }
`;

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required('"Nome" é obrigatório')
    .min(3, 'Preencha ao menos 3 caracteres'),
  email: yup
    .string()
    .email('Email precisa ser válido')
    .required('"Email" é obrigatório'),
  message: yup
    .string()
    .required('"Mensagem" é obrigatória')
    .min(4, 'Preencha ao menos 4 caracteres'),
});

// eslint-disable-next-line react/prop-types
function FormContent({ onSubmit, setModalState }) {
//  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const initialValues = {
    nome: '',
    email: '',
    mensagem: '',
  };

  const form = useForm({
    initialValues,
    onSubmit: (values) => {
      form.setIsFormDisabled(true);
      setSubmissionStatus(formStates.LOADING);
      contactService.contact({
        name: values.nome,
        email: values.email,
        message: values.mensagem,
      })
        .then(() => {
          setSubmissionStatus(formStates.DONE);
        })
        .catch(() => {
          setSubmissionStatus(formStates.ERROR);
        })
        .finally(() => {
          form.setIsFormDisabled(false);
        });
    },
    async validateSchema(values) {
      return contactSchema.validate(values, {
        abortEarly: false,
      });
    },
  });

  return (
    <form
      id="formCadastro"
      onSubmit={onSubmit || form.handleSubmit}
    >
      <CloseButton>
        <Button
          type="button"
          onClick={() => setModalState(false)}
        >
          X
        </Button>
      </CloseButton>
      <Text
        variant="paragraph1"
        tag="h1"
        color="primaryFont"
      >
        Deixe sua mensagem!
      </Text>
      <TextField
        placeholder="Nome"
        name="name"
        type="text"
        value={form.values.name}
        onChange={form.handleChange}
        error={form.errors.name}
        isTouched={form.touched.name}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="email@dominio.com"
        name="email"
        type="email"
        value={form.values.email}
        onChange={form.handleChange}
        error={form.errors.email}
        isTouched={form.touched.email}
        onBlur={form.handleBlur}
      />
      <TextField
        placeholder="Deixe sua mensagem!"
        name="message"
        type="text"
        value={form.values.message}
        onChange={form.handleChange}
        error={form.errors.message}
        isTouched={form.touched.message}
        onBlur={form.handleBlur}
      />
      <Button
        variant="primary"
        type="submit"
        disabled={form.isFormDisabled}
        fullWidth
      >
        Enviar mensagem
      </Button>

      { form.isFormSubmited && submissionStatus === formStates.LOADING && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
      { form.isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic ok"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
      { form.isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: errorAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
    </form>
  );
}

FormContent.defaultProps = {
  onSubmit: undefined,
};

FormContent.propTypes = {
  onSubmit: PropTypes.func,
};

// eslint-disable-next-line react/prop-types
export default function FormCadastro({ propsDoModal, setModalState }) {
  return (
    <Box
      flex="1"
      justifyContent="flex-end"
    >
      <Box
        boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        height="100vh"
        flex="1"
        padding={{
          xs: '16px',
          md: '85px',
        }}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...propsDoModal}
      >
        <FormContent setModalState={setModalState} />
      </Box>
    </Box>
  );
}
