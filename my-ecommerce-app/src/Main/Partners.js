import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Partner = () => {
  const [smallestAspectRatio, setSmallestAspectRatio] = useState(1);
  const partnerLogos = [
    'https://drive.google.com/uc?export=view&id=1A2igLrOoU1arYDZWd6-kh8MU2c6p7PAH',
    'https://drive.google.com/uc?export=view&id=1-LPIWW2X1Hvw5XpnVdN-IBTUJ7HmQrCT',
    'https://drive.google.com/uc?export=view&id=1czic87PgB82WVOdRInroTK2YzE2CfE3V',
    'https://drive.google.com/uc?export=view&id=1zZqLD78Ivbg6SpzgCOp5C6sqsF62rTuQ',
    'https://drive.google.com/uc?export=view&id=1KlkxkEV2Fx9P-A3bshnLtu1gfX64oXh_',
    'https://drive.google.com/uc?export=view&id=1GhZGR8xxCSTmuLUQ5DoO1lfHMCEopM2K',
  ];

  useEffect(() => {
    const calculateAspectRatio = async () => {
      const aspectRatios = await Promise.all(
        partnerLogos.map(async (logo) => {
          const img = new Image();
          img.src = logo;
          await img.decode(); 
          return img.width / img.height;
        })
      );
      setSmallestAspectRatio(Math.min(...aspectRatios));
    };

    calculateAspectRatio();
  }, [partnerLogos]);

  return (
    <Container className="mt-5 mb-5 text-center p-5">
      <h2 className="mb-5">Our Business Partners</h2>
      <Row className="justify-content-center">
        <Col xs={8} className="col-6">
          <Row className="justify-content-center">
            {partnerLogos.map((logo, index) => (
              <Col
                key={index}
                xs={6}
                sm={3}
                md={2}
                lg={2}
                className="d-flex align-items-center"
                style={{ height: `calc(${smallestAspectRatio} * 100px)` }}
              >
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="img-fluid"
                  style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Partner;
