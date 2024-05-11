import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const ShortAbout = () => {
  const buttonStyle = {
    fontFamily: 'Montserrat',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    backgroundColor: '#4CAF50',
    border: 'white',
    color: 'white',
    padding: '18px 26px',
    fontWeight: 'bold',
    letterSpacing: '2px'
  };
  const logoStyle = {
    width: '400px',
    marginBottom: '20px',
    filter: 'drop-shadow(0 0 10px rgba(0, 0, 0, 0.6))', // White shadow
  };

  return (
    <div
      className="parallax-container"
      style={{
        backgroundImage:
          'url("https://drive.google.com/uc?export=view&id=1UcDygb1uaN6OG3MwGI70pXU_ymcGeOqL")',
        height: '600px',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        marginTop: '100px',
        padding: '30px 20px',
        width: '100%', 
        boxSizing: 'border-box', 
      }}
    >
      <img
        src="https://drive.google.com/uc?export=view&id=1zelvEZ187_5HoRp03Laa9aQr48vfUUF-"
        alt="HarvestHub Logo"
        style={logoStyle}
      />
      <h5 className="mb-4" style={{ lineHeight: '2', maxWidth: '800px' }}>
        Developed by Computer Science students of the University of the Philippines Los Baños,
        <strong> HarvestHub Philippines</strong> is an attempt to support the Department of
        Agriculture's farm-to-table initiative. We aim to make local produce easily accessible
        wherever you are in the Philippines.
      </h5>
      <Link to="/about">
        <Button variant="success" style={buttonStyle}>
          KNOW MORE ABOUT HARVESTHUB PHILIPPINES
        </Button>
      </Link>
    </div>
  );
};

export default ShortAbout;
