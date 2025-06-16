import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from '@mui/material';

const TourPackages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/package/package');
        setPackages(res.data); 
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  return (
    <Box sx={{ px: 2, py: 6 }}>
      <Typography variant="h5" fontWeight="bold" align="center" color="primary">
        Top Selling Tour Packages of India
      </Typography>
      <Typography variant="body2" align="center" mb={4}>
        Stay updated with our latest news and happenings through Informe.
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {loading ? (
          <Typography>Loading...</Typography>
        ) : (
          packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  overflow: 'hidden',
                  textAlign: 'center',
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={pkg.image} // image key from backend
                  alt={pkg.title}
                />
                <CardContent>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    sx={{ mb: 2, textTransform: 'uppercase' }}
                  >
                    {pkg.title}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#4dd0e1',
                      color: '#fff',
                      borderRadius: 10,
                      px: 4,
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#26c6da',
                      },
                    }}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default TourPackages;
