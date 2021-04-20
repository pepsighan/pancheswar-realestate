import { Box } from '@material-ui/core';
import Layout from 'components/Layout';
import Meta from 'components/Meta';

export default function Index() {
  return (
    <Layout>
      <Meta title="Pancheswar Multipurpose &amp; Realestate" />

      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="/assets/guillaume-meurice-2739078.jpg"
          alt="Photo by Guillaume Meurice"
          sx={{
            width: '100%',
            height: '100%',
          }}
        />
      </Box>
    </Layout>
  );
}
