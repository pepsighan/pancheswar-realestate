import { Container, Typography } from '@material-ui/core';
import Layout from 'components/Layout';
import Services from 'components/Services';
import Meta from 'components/Meta';

export default function ServicesPage() {
  return (
    <Layout>
      <Meta title="Services - Pancheswar Multipurpose &amp; Realestate" />

      <Container sx={{ mt: 12 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          हाम्रा सेवाहरू
        </Typography>
        <Services />
      </Container>
    </Layout>
  );
}
