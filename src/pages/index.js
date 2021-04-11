import { Box } from '@material-ui/core';
import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Image from 'next/image';

export default function Index() {
  return (
    <Layout>
      <Meta title="Pancheswar Multipurpose &amp; Realestate" description="Realestate Agents" />

      <Box sx={{ minHeight: '100vh', overflow: 'hidden', position: 'relative' }}>
        <Image
          src="/assets/guillaume-meurice-2739078.jpg"
          alt="Photo by Guillaume Meurice"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </Layout>
  );
}
