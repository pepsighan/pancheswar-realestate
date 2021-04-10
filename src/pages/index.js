import Layout from 'components/Layout';
import Meta from 'components/Meta';
import Image from 'next/image';

export default function Index() {
  return (
    <Layout>
      <Meta title="Pancheswar Multipurpose &amp; Realestate" description="Realestate Agents" />

      <div className="min-h-screen overflow-hidden relative">
        <Image
          src="/assets/guillaume-meurice-2739078.jpg"
          alt="Photo by Guillaume Meurice"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Layout>
  );
}
