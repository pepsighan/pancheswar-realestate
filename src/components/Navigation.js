import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core';

export default function Navigation() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5">पञ्चेश्वर मल्टिपर्पोज एण्ड रियल स्टेट</Typography>
        <Box sx={{ flex: 1 }} />
        <Button color="inherit" sx={{ fontSize: '1.1rem' }}>
          हाम्रो बारेमा
        </Button>
        <Button color="inherit" sx={{ ml: 4, fontSize: '1.1rem' }}>
          सेवाहरू
        </Button>
        <Button color="inherit" sx={{ ml: 4, fontSize: '1.1rem' }}>
          सम्पर्क
        </Button>
      </Toolbar>
    </AppBar>
  );
}
