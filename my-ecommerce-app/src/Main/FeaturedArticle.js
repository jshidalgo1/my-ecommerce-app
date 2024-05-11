// FeaturedArticle.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { MdArrowForward } from 'react-icons/md/index.js';

const FeaturedArticle = () => {
  const title =
    "DA’s KADIWA continues to bring safe and affordable food in Metro Manila";
  const imageSrc =
    "https://www.da.gov.ph/wp-content/uploads/2022/08/rd_076.jpg";
  const intro =
    "The Department of Agriculture (DA) plans to expand “KADIWA” outlets so that more Metro Manila residents will have access to quality, safe, and affordable agri-fishery products. KADIWA is a marketing initiative of DA, implemented through the Agribusiness and Marketing Assistance (AMAS), which seeks to empower the farming community by providing a direct and effective farm-to-consumer food supply chain. The model eliminates as many marketing layers, allowing producers to earn bigger from directly selling their produce instead of using trader-intermediaries. It reduces marketing expenses, thus making the fresh and quality products more affordable for consumers.";
  const readMoreLink =
    "https://www.da.gov.ph/das-kadiwa-continues-to-bring-safe-and-affordable-food-in-metro-manila/";
  const author = "DA-AFID";
  const date = "24 August 2022";

  return (
    <div className="featured-article-wrapper">
      <div className="featured-article-background">
        <div className="shape shape1"></div>
        <div className="shape shape2"></div>
        <div className="shape shape3"></div>
        <div className="shape shape4"></div>
        <div className="shape shape5"></div>
      </div>
      <Container className="featured-article-container p-0">
        <h2 className="text-center mb-5">
          Featured Article
        </h2>
        <Row className="justify-content-center">
          <Col xs={12}>
            <Card className="p-1 featured-article-card">
              <Card.Body>
                <Row>
                  <Col xs={12} md={5}>
                    <Card.Img src={imageSrc} alt="Featured Article" className="mb-3 mb-md-0" />
                  </Col>
                  <Col xs={12} md={7}>
                    <Card.Title>
                      <h5 style={{ fontWeight: 'bold' }}>{title}</h5>
                    </Card.Title>
                    <Card.Text>
                      <h6 style={{ lineHeight: '1.5' }}>{intro}</h6>
                    </Card.Text>
                    <p className="mb-3" style={{ color: '#757575' }}>
                      Author: {author} | {date}
                    </p>
                    <a
                      href={readMoreLink}
                      className="text-primary"
                      style={{ textDecoration: 'none' }}
                    >
                      <p style={{ fontSize: '20px', color: '#4CAF50' }}>
                        Read More{' '}
                        <MdArrowForward
                          style={{
                            verticalAlign: 'middle',
                            marginLeft: '5px',
                            color: '#4CAF50',
                          }}
                        />
                      </p>
                    </a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeaturedArticle;
