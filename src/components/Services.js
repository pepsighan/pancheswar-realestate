import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  alpha,
  Box,
  colors,
  Paper,
  Typography,
} from '@material-ui/core';
import { useCallback, useState } from 'react';
import { MdExpandMore } from 'react-icons/md';

export default function Services() {
  const titles = [
    'लिखत पारित',
    'दाखिल खारेज',
    'संशोधन',
    'प्रतिलिपी',
    'नक्शाकाे काम',
    'अंश हक छाेडपत्र',
    'रोक्का',
    'फुकुवा',
    'कम्प्युटर इन्ट्रि',
  ];

  const titleItems = {
    'लिखत पारित': [
      'हक़हिस्सा राजिनामा',
      'पति-पत्नीबीचको सगोलनामा',
      'राजिनामा',
      'हालैदेखिको बकसपत्र',
      'अंशबन्डा',
      'सट्टापट्टा',
      'छोडपत्र',
      'दर्ताफारी',
      'सगोलनामा',
      'शेषपछिको बकसपत्र',
      'दान-पत्र',
      'अंश बुझेको भरपाई',
      'बकसपत्र',
      'चक्लाबन्दी',
      'हक़हिस्सा हालैदेखिको बकसपत्र',
      'हक़हिस्सा शेषपछिको बकसपत्र',
    ],
    'दाखिल खारेज': [
      'हकसफी- मिलापत',
      'अदालतको फैसला/ मिलापत',
      'अन्य मिलापत',
      'बैंक/वित्तीय संस्थाबाट तेस्रो पक्षले लिलाम सकार',
      'शेषपछिको बकसपत्र बमोजिम',
      'लगतकट',
      'हकसफी निर्णयले',
      'भूमिसुधारको निर्णय',
      'अदालतबाट भएको लिलाम बमोजिम',
      'अंशबण्डा',
      'अंश र अपुताली',
    ],
    संशोधन: ['नेपाल सरकार-पुरा कित', 'घरकायम', 'घरपाताल', 'सरकारको नाममा लगतकायम'],
    प्रतिलिपी: [
      'जग्गाधनी दर्ता प्रमाण पुर्जा',
      'एकीकृत जग्गाधनी दर्ता प्रमाण पुर',
      'जग्गाधनी दर्ता स्रेस्ता',
      'रोक्का पत',
      'फुकुवा पत',
      'पुरानो फोटो खिँची नयाँ जग्गाधनी दर्ता प्रमाण पुर्जा',
    ],
    'नक्शाकाे काम': ['बैक सम्बन्धी', 'व्यक्तिगत'],
    'अंश हक छाेडपत्र': ['अंश हक छाेडपत्र'],
    रोक्का: ['व्यक्तिगत - बैक संस्थाहरू'],
    फुकुवा: ['व्यक्तिगत - बैक संस्थाहरू'],
    'कम्प्युटर इन्ट्रि': ['कम्प्युटर इन्ट्रि'],
  };

  return (
    <>
      {titles.map((it, index) => (
        <Service key={it} title={it} items={titleItems[it]} expanded={index === 0} />
      ))}
    </>
  );
}

function Service({ title, items = [], expanded }) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <Accordion
      expanded={isExpanded}
      onChange={useCallback((_, expanded) => setIsExpanded(expanded), [])}
    >
      <AccordionSummary
        expandIcon={<MdExpandMore />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: 16 }}>
          {items.map((it) => (
            <Paper key={it} sx={{ p: 2, bgcolor: alpha(colors.teal[600], 0.1) }} elevation={0}>
              <Typography variant="body2">{it}</Typography>
            </Paper>
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
