import { AppBar, Box, Button, Toolbar, Typography, Link as Lnk } from '@material-ui/core';
import Link from 'next/link';

export default function Navigation() {
  return (
    <AppBar>
      <Toolbar>
        <Link href="/" passHref>
          <Lnk color="inherit">
            <Typography variant="h6">पञ्चेश्वर मल्टिपर्पोज एण्ड रियल स्टेट</Typography>
          </Lnk>
        </Link>
        <Box sx={{ flex: 1 }} />
        <Link href="/about">
          <Button color="inherit" sx={{ fontSize: '1.1rem' }}>
            हाम्रो बारेमा
          </Button>
        </Link>
        <Link href="/services">
          <Button color="inherit" sx={{ ml: 4, fontSize: '1.1rem' }}>
            सेवाहरू
          </Button>
        </Link>
        <Button color="inherit" sx={{ ml: 4, fontSize: '1.1rem' }}>
          सम्पर्क
        </Button>
      </Toolbar>
    </AppBar>
  );
}
