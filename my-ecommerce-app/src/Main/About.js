import React from "react";
import Footer from "./Footer.js";
import { Container, Row, Col, Image } from "react-bootstrap";

export default function About() {
  return (
    <>
    <div className="banner-container">
        <Image
          src="https://drive.google.com/uc?export=view&id=1ItxClMa5mSR8Zt1Y3nm24taZbRZ1NHAj"
          alt="Banner Image"
          fluid
          className="banner-image"
        />
        <h2 className="banner-text">Empowering Agriculture, Connecting Communities</h2>
      </div>
      <Container className="mt-5 col-md-6">

        <p className="text-justify larger-font">
          HarvestHub Philippines, developed by Computer Science students of the University of the Philippines Los Baños, is on a mission to support the Department of Agriculture's farm-to-table initiative. Our goal is to make locally sourced produce easily accessible to every corner of the Philippines.
        </p>

        <h4 className="mt-4 mb-2"><b>Our Purpose</b></h4>
        <p className=" larger-font">At HarvestHub Philippines, our purpose is to bridge the gap between local farmers and consumers, fostering a sustainable and resilient food ecosystem. We are dedicated to supporting the Department of Agriculture's farm-to-table initiative, striving to make high-quality, locally sourced produce easily accessible to every corner of the Philippines. Our commitment lies in empowering local communities, promoting agricultural sustainability, and ensuring that everyone can enjoy fresh and nutritious food.</p>

        <h4 className="mt-4 mb-2"><b>Our Beliefs</b></h4>
        <ul className="block-list larger-font" style={{fontWeight: 'bold'}}>
            <li>We believe in the potential of technology to create positive change in the agricultural landscape.</li>
            <li>We believe in the importance of collaboration to build a robust and sustainable food supply chain.</li>
            <li>We believe in the value of local produce, recognizing the unique flavors and benefits it brings.</li>
        </ul>

        <h4 className="mt-4 mb-2"><b>Our Vision</b></h4>
        <p className="larger-font">We envision a future where every Filipino has easy access to fresh, locally grown produce, contributing to a global movement towards responsible and localized food production.</p>

        <h4 className="mt-4 mb-2"><b>Our Core Values</b></h4>
        <ul className="block-list horizontal-list larger-font">
            <li><strong style={{fontSize:'20px'}}>Empowerment</strong> Empowering local farmers and connecting them with a broader consumer base.</li>
            <li><strong style={{fontSize:'20px'}}>Sustainability</strong> Promoting environmentally friendly and sustainable agricultural practices.</li>
            <li><strong style={{fontSize:'20px'}}>Accessibility</strong> Striving to make local produce accessible to every Filipino, promoting inclusivity.</li>
            <li><strong style={{fontSize:'20px'}}>Innovation</strong> Embracing technology innovation to optimize the agricultural supply chain.</li>
            <li><strong style={{fontSize:'20px'}}>Community</strong> Fostering strong connections between farmers, consumers, and our team.</li>
        </ul>

        <h4 className="mt-4 mb-4"><b>Meet Our Team</b></h4>
            <Row className="mb-4">
            <Col xs={6} md={2}>
                <div className="rounded-circle-container">
                <Image
                    src="https://drive.google.com/uc?export=view&id=16_kPx5V0QL6qXg27nLds_Pff1qdYwRyI"
                    alt="James Lourence Vallente"
                    className="rounded-circle"
                />
                </div>
                <p className="mt-2 mb-0 larger-font">James Lourence Vallente</p>
                <p>Front End/Design</p>
            </Col>
            <Col xs={6} md={2}>
                <div className="rounded-circle-container">
                <Image
                    src="https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/293393003_5611313288880717_1128582566374639998_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=hNXmJyU38McAX9l0QHc&_nc_ht=scontent.fmnl3-2.fna&oh=00_AfBFjERU6xHUPCwT_LKZA-UEpca5xF1S9Md9bXSTwD4Ydw&oe=6583D5A2"
                    alt="Jan Ryan Hidalgo"
                    className="rounded-circle"
                />
                </div>
                <p className="mt-2 mb-0  larger-font">Jan Ryan Hidalgo</p>
                <p>Database/Server</p>
            </Col>
            <Col xs={6} md={2}>
                <div className="rounded-circle-container">
                <Image
                    src="https://scontent.fmnl3-4.fna.fbcdn.net/v/t1.18169-9/14681816_877926105641527_4452426751715524084_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7a1959&_nc_ohc=a4jt3ZpOFXUAX-irbrO&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfDpTFp0lLW-pg0AQAYkkFQRes7a31jk563ByiY0VhlNeA&oe=65A685A1"
                    alt="Magenta Alarcon"
                    className="rounded-circle"
                />
                </div>
                <p className="mt-2 mb-0  larger-font">Magenta Alarcon</p>
                <p>Backend/Server</p>
            </Col>
            <Col xs={6} md={2}>
                <div className="rounded-circle-container">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1O40xN-_KrPCCOhdrDTwMjJJOJrhQjcaM"
                    alt="Biarritz Alain Evanglista"
                    className="rounded-circle"
                />
                </div>
                <p className="mt-2 mb-0  larger-font">Biarritz Alain Evanglista</p>
                <p className="text-muted">Database/Backend</p>
            </Col>
            </Row>
      </Container>
      <Footer />
    </>
  );
}
