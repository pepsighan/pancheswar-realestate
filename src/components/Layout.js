import { Box } from '@material-ui/core';
import Footer from './Footer';
import Navigation from './Navigation';

export default function Layout({ children }) {
  return (
    <>
      <Box sx={{ minHeight: '100vh' }}>
        <Navigation />
        {children}
      </Box>
      <Footer />
    </>
  );
}
