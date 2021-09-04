/* eslint-disable react/self-closing-comp */
import React from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Capa from '../src/components/common/Capa';
import websitePageHOC from '../src/components/wrappers/WebsitePage/hoc';
import { WebsitePageContext } from '../src/components/wrappers/WebsitePage';
import { Box } from '../src/components/foundation/layout/Box';
import Text from '../src/components/foundation/Text';

function HomeScreen() {
  const websitePageContext = React.useContext(WebsitePageContext);
  return (
    <>
      <Capa />
      <Box
        minHeight="30vh"
        marginTop={{
          xs: '0',
          md: '0',
        }}
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
          marginBottom="0px"
        >
          Entre em contato
        </Text>
        <Fab
          size="medium"
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

export default websitePageHOC(HomeScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Home',
    },
  },
});
