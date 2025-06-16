import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const advantages = [
  {
    icon: <AccessTimeIcon fontSize="large" color="primary" />,
    title: 'Save Time',
    description: 'No more switching for packages or plans.',
  },
  {
    icon: <AccountBalanceWalletIcon fontSize="large" color="primary" />,
    title: 'Save Money',
    description: 'Compare, negotiate, and choose the best.',
  },
  {
    icon: <VerifiedUserIcon fontSize="large" color="primary" />,
    title: 'Trusted Network',
    description: 'A Trusted Network of 7000+ Travel Agents',
  },
  {
    icon: <MenuBookIcon fontSize="large" color="primary" />,
    title: 'Multiple Options',
    description: 'Itineraries & Travel Tips from Trusted Agents',
  },
];

const AdvantagesSection = () => {
  return (
    <Box sx={{ backgroundColor: '#66c6c6', color: 'white', py: 8, px: 2 }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        Our Advantages
      </Typography>
      <Typography align="center" sx={{ mb: 4 }}>
        You can rely on our experience and the quality of services we provide. <br />
        Here are other reasons to book tours at Treat Holidays.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {advantages.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box
              sx={{
                backgroundColor: 'white',
                color: 'black',
                p: 3,
                borderRadius: '50%',
                textAlign: 'center',
                width: 80,
                height: 80,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mx: 'auto',
                mb: 2,
              }}
            >
              {item.icon}
            </Box>
            <Typography variant="h6" align="center" sx={{ fontWeight: 600 }}>
              {item.title}
            </Typography>
            <Typography align="center" variant="body2" sx={{ mt: 1 }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AdvantagesSection;
