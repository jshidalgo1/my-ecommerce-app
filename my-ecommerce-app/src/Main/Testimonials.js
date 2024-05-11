// Testimonials.js
import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import '../Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Juan dela Cruz',
      message: 'Sobrang laking tulong ng website na ito para sa aming mga magsasaka. Hindi lang namin mas mapadadali ang pagbebenta ng aming ani, pero mas mapapasaya rin namin ang mga nagugutom na pamilya sa pamamagitan ng sariwang produkto na kanilang mabibili.',
      image: 'https://grameenfoundation.org/images/_1140xAUTO_crop_center-center_none/Farmer_Philippines_4x3__Building_Resiliance.JPG',
    },
    {
      id: 2,
      name: 'Maria Santos',
      message: 'Napakaganda ng layunin ng website na ito. Nakakatuwa na mayroong platform na nagbibigay daan para sa mga magsasakang Pilipino na maipakita ang kanilang produkto sa mas maraming mamimili. Salamat sa mas pinadali at mas pinabilis na proseso ng pagbili.',
      image: 'https://cdn.manilastandard.net/wp-content/uploads/2023/08/Bea-Alonzo-2.jpg',
    },
    {
      id: 3,
      name: 'Rodel Mangubat',
      message: 'Isa itong magandang solusyon para sa amin na nasa probinsya. Hindi na namin kailangang pumunta ng malayo para lang makabenta ng aming ani. Ngayon, sa tulong ng website na ito, mas malawak na ang aming market at mas mabilis na nakakarating sa mga gustong bumili.',
      image: 'https://sports.inquirer.net/files/2016/09/IMG_2510-1024x683.jpg',
    },
    {
      id: 4,
      name: 'Lorna Bautista',
      message: 'Napakadaling gamitin ng website na ito. Bukod sa mga masarap at sariwang prutas at gulay, nais ko rin na makatulong sa mga magsasaka sa ating bansa. Malaking tulong ito para sa kanila at para na rin sa ating lahat.',
      image: 'https://i.ytimg.com/vi/TDuQ7bggg-4/maxresdefault.jpg',
    },
    {
      id: 5,
      name: 'Renato Santos',
      message: 'Maraming salamat sa website na ito! Ang saya na hindi na namin kailangang maghintay ng mahabang oras sa palengke para lang makabili ng sariwang produkto. Isang click lang, andiyan na ang mga produkto na galing mismo sa mga masisipag nating magsasaka.',
      image: 'https://businessmirror.com.ph/wp-content/uploads/2019/12/nestle01-122419.jpg',
    },
    {
        id: 6,
        name: 'Isabel Martinez',
        message: 'Napakaganda ng konsepto ng website na ito. Mas pinadali nito ang pag-connect ng mga magsasaka at mamimili. Ngayon, mas madali na akong makabili ng mga sariwang produkto mula sa mga hardworking na magsasaka ng ating bayan.',
        image: 'https://purveyr.com/wp-content/uploads/2023/03/tere-domine-kalsada-purveyr-2023.jpg',
    }
  ];


  const testimonialsChunks = testimonials.reduce((acc, testimonial, index) => {
    const chunkIndex = Math.floor(index / 3);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(testimonial);
    return acc;
  }, []);

  return (
    <Container className="mb-5 p-5">
      <h2 className="text-center mb-5">Testimonials</h2>
      <Carousel indicators={false} interval={null} pause={false} controls={true} className="testimonial-carousel">
        {testimonialsChunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row className="justify-content-center mx-auto col-11">
              {chunk.map(testimonial => (
                <Col key={testimonial.id} xs={12} md={4} className="mb-3">
                  <Card className="testimonial-card h-100">
                    <Card.Img variant="top" src={testimonial.image} className="rounded-square" />
                    <Card.Body>
                      <Card.Title><h4>{testimonial.name}</h4></Card.Title>
                      <Card.Text style={{fontFamily:'Montserrat'}}>{testimonial.message}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonials;
