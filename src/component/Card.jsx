import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography
} from '@mui/material';

function TwoRowCardGrid() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/destination/destination');
        setDestinations(res.data); 
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  return (
    <Box sx={{ px: { xs: 2, md: 8 }, py: 6 }}>
      <Typography variant="h4" fontWeight="bold" color='primary' textAlign="center" gutterBottom>
        Explore Most Popular Destinations
      </Typography>
      <Typography variant="body1" color="text.secondary" textAlign="center" mb={4}>
        Plan your perfect trip with our most loved and best-selling tour packages.
      </Typography>
<Grid container spacing={4}>
  {loading ? (
    <Typography>Loading...</Typography>
  ) : (
    destinations.map((item, index) => (
      <Grid item xs={4} key={index}>
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: 2,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.03)' },
          }}
        >
          <CardMedia
            component="img"
            height="180"
            image={item.image}
            alt={item.city}
          />
          <CardContent>
            <Typography variant="h6" fontWeight="bold" color="primary">
              {item.city}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Starting from {item.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    ))
  )}
</Grid>
    </Box>
  );
}

export default TwoRowCardGrid;
