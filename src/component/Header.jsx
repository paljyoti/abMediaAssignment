import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

function Header() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url('/src/assets/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        px: { xs: 2, sm: 4, md: 8 },
        position: 'relative',
        color: 'white',
      }}
    >
     
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '600px',
          textAlign: 'left',
        }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: {
              xs: '2rem',
              sm: '2.5rem',
              md: '3rem',
              lg: '3.5rem',
            },
          }}
        >
          Discover Your Next <br /> Adventure
        </Typography>

        <Typography
          variant="body1"
          mb={3}
          sx={{
            fontSize: {
              xs: '0.9rem',
              sm: '1rem',
              md: '1.1rem',
            },
          }}
        >
          Choose from our curated experiences, customized for every kind of traveler.
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: 'yellow',
            color: 'black',
            borderRadius: '30px',
            fontWeight: 'bold',
            px: 4,
            py: 1.2,
            fontSize: {
              xs: '0.8rem',
              sm: '1rem',
            },
            '&:hover': {
              backgroundColor: '#fbc02d',
            },
          }}
        >
          BOOK NOW
        </Button>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          mt={5}
          alignItems="flex-start"
        >
          {['Easy Booking', 'Curated Destinations', 'Trusted Support'].map((item, i) => (
            <Typography
              key={i}
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: '0.9rem',
                  sm: '1rem',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default Header;
