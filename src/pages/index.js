import Image from 'next/image';
import Meta from 'components/Meta';

export default function Index() {
  return (
    <>
      <Meta title="Pancheswar Multipurpose &amp; Realestate" description="Realestate Agents" />

      <Image
        src="/assets/guillaume-meurice-2739078.jpg"
        alt="Photo by Guillaume Meurice"
        layout="fill"
      />
    </>
  );
}
