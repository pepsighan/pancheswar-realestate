import { Box, Typography } from '@material-ui/core';

export default function Footer() {
  return (
    <Box sx={{ p: 4, bgcolor: 'primary.main' }}>
      <Typography color="white">
        © {new Date().getFullYear()} कपिराइट, सर्वाधिकार सुरक्षित।
      </Typography>
    </Box>
  );
}
