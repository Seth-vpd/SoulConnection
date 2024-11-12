import React from 'react';
import { Typography, Container, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'; // Icône du coeur
import BrokenImageIcon from '@mui/icons-material/BrokenImage'; // Icône de coeur brisé
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Redirige vers la page d'accueil ou une autre route
  };

  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        // backgroundColor: '#f5f5f5',
      }}
    >
      {/* <BrokenImageIcon
        style={{ fontSize: 100, color: '#d32f2f', marginBottom: '20px' }}
      /> */}
      <Typography variant="h3" style={{ marginBottom: '20px', fontSize: '200px'}}>
        403
      </Typography>
      <Typography variant="body1" style={{ marginBottom: '40px'}}>
        Oops! It looks like you don't have permission to access this page.
      </Typography>
      <Button
        variant="contained"
        // color="primary"
        onClick={handleGoBack}
        style={{ textTransform: 'none' }}
      >
        Go Back to Home
      </Button>
    </Container>
  );
};

export default Unauthorized;
