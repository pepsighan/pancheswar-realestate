import { Container, Paper, Typography } from '@material-ui/core';
import Layout from 'components/Layout';
import Meta from 'components/Meta';

export default function About() {
  return (
    <Layout>
      <Meta title="About Us - Pancheswar Multipurpose &amp; Realestate" />

      <Container sx={{ mt: 12 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            हाम्रो बारेमा
          </Typography>
          <Typography>
            समय सापेक्ष रुपमा परिवर्तन गरी जग्गा प्रशासन सम्बन्धी सेवाहरुलाई सूचना प्रविधिमा आधारित
            गराउन अत्यावश्यक महशुस गरेरै नेपाल सरकारले मालपोत कार्यालयहरुमा भू-सूचना प्रणाली
            कार्यान्वयनमा ल्याएको छ ।
            <br />
            उपाय सर्भिसेज लि. सेवा प्रदायक कम्पनीले आफ्नैँ भू-सेवा केन्द्र मार्फत सम्पूर्ण भू-सेवाको
            कार्यहरु सहज रुपमा सम्पन्न गर्दछ । <br />
            <br />
            थपः हाम्रो वेभसाईटबाट घरमै बसि बैना कागज नमुना छिटो रुपमा तयार पार्न सक्नु हुन्छ । साथै
            डाउलोड गरी हाम्रो (Viber,Messenger) मा पठाउन सक्नु हुन्छ । <br />
            १. लिखत पारित <br />
            २. रोक्का/फुकुवा <br />
            ३. हालसाविक <br />
            ४. दाखिल खारेज <br />
            ५. अशं वण्डा <br />
            ६. प्रतिलिपी <br />
            ७. नापी नक्साको काम <br />
            <br />
            आदि उपाय भू-सेवा केन्द्र मार्फत छिटो र सरल तरिकाले कार्य सम्पन्न गरी समयको बचत गर्न थप
            मदत गर्दछ । <br />
          </Typography>
        </Paper>
      </Container>
    </Layout>
  );
}
