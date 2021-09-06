import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Box } from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function Contato() {
  const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <>
      <Box
        minHeight="78vh"
        marginTop={{
          xs: '40px',
          md: '80px',
        }}
        textAlign="center"
      >
        <Text
          tag="h2"
          variant="title"
          textAlign="center"
          marginTop={{
            xs: '42px',
            md: '70px',
          }}
          marginBottom="20px"
        >
          Deseja entrar em contato?
        </Text>
        <Fab
          // size="medium"
          color="primary"
          aria-label="add"
          onClick={() => {
            websitePageContext.toggleModalCadastro();
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
    </>
  );
}
