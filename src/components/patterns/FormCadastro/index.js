import React from 'react';
import { Lottie } from '@crello/react-lottie';
import loadingAnimation from './animations/loading.json';
import successAnimation from './animations/success.json';
import errorAnimation from './animations/error.json';
import { Button } from '../../common/Button';
import TextField from '../../Forms/TextField';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

// eslint-disable-next-line react/prop-types
function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);
  const [userInfo, setUserInfo] = React.useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  function handleChange(event) {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  }

  const isFormInvalid = userInfo.nome.length === 0
  || userInfo.email.length === 0
  || userInfo.mensagem.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setIsFormSubmited(true);
        setSubmissionStatus(formStates.LOADING);

        const userDTO = {
          name: userInfo.nome,
          email: userInfo.email,
          message: userInfo.mensagem,
        };

        fetch('https://contact-form-api-jamstack.herokuapp.com/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDTO),
        })
          .then((respostaDoServidor) => {
            if (respostaDoServidor.ok) {
              return respostaDoServidor.json();
            }

            throw new Error('Não foi possível enviar a mensagem');
          })
          .then((respostaConvertidaEmObjeto) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(respostaConvertidaEmObjeto);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text
        variant="paragraph1"
        tag="h1"
      >
        Deixe sua mensagem!
      </Text>
      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange}
          type="text"
        />
      </div>

      <div>
        <TextField
          placeholder="email@dominio.com"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
          type="email"
        />
      </div>

      <div>
        <TextField
          placeholder="Deixe sua mensagem!"
          name="mensagem"
          value={userInfo.mensagem}
          onChange={handleChange}
          type="text"
        />
      </div>

      <Button
        variant="primary"
        type="submit"
        disabled={isFormInvalid}
        fullWidth
      >
        Enviar mensagem
      </Button>

      { isFormSubmited && submissionStatus === formStates.LOADING && (
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
      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          justifyContent="center"
        >
          <Lottie
            width="150px"
            height="150px"
            className="lottie-container basic"
            config={{ animationData: successAnimation, loop: false, autoplay: true }}
          />
        </Box>
      )}
      { isFormSubmited && submissionStatus === formStates.ERROR && (
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
