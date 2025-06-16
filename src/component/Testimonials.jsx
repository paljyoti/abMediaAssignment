import React, { useRef } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Name',
    designation: 'Company / Designation',
    content:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Name',
    designation: 'Company / Designation',
    content:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Name',
    designation: 'Company / Designation',
    content:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text.',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
  {
    name: 'Name',
    designation: 'Company / Designation',
    content:
      'Text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content placeholder text.',
    avatar: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ px: 2, py: 6, backgroundColor: '#fff' }}>
      <Typography variant="h5" fontWeight="bold" mb={4}>
        Testimonials
      </Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <IconButton onClick={() => scroll('left')}>
          <ArrowBackIosIcon />
        </IconButton>

        <Box
          ref={scrollRef}
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            px: 1,
            '&::-webkit-scrollbar': { display: 'none' },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 280,
                maxWidth: 320,
                flexShrink: 0,
                textAlign: 'center',
                p: 2,
                boxShadow: 3,
              }}
            >
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: 60, height: 60, mx: 'auto', mb: 2 }}
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  {testimonial.content}
                </Typography>
                <Typography fontWeight="bold">{testimonial.name}</Typography>
                <Typography variant="caption" color="text.secondary">
                  {testimonial.designation}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <IconButton onClick={() => scroll('right')}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
