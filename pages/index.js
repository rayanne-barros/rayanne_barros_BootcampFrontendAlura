/* eslint-disable react/self-closing-comp */
import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Footer from '../src/components/Footer';
import Menu from '../src/components/Menu';
import Projetos from '../src/components/Projetos';
import Capa from '../src/components/Capa';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';
import Modal from '../src/components/Modal';
import FormCadastro from '../src/components/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);
  return (
    <>
      <Menu />
      <Capa />
      <Projetos />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} setModalState={setModalState} />
        )}
      </Modal>
      <Box
        minHeight="30vh"
        marginTop={{
          xs: '40px',
          md: '80px',
        }}
        // display="flex"
        // // flexDirection="column"
        // alignItems="center"
        textAlign="center"
      >
        <Text
          tag="h2"
          variant="titleXS"
          textAlign="center"
          marginTop={{
            xs: '42px',
            md: '0px',
          }}
        >
          Entre em contato
        </Text>
        <Fab
          size="medium"
          color="primary"
          aria-label="add"
          onClick={() => {
            setModalState(!isModalOpen);
          }}
        >
          <AddIcon />
        </Fab>
        {/* <Button
          ghost
          margin={{
            xs: 'auto',
            md: 'auto',
          }}
          display="block"
          style={{
            position: 'relative', top: '10px',
          }}
          onClick={() => {
            setModalState(!isModalOpen);
          }}
        >
          <Fab size="medium" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Button> */}
      </Box>
      <Footer />
    </>
  );
}
