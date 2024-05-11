import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import AdminFooter from './AdminFooter.js';


const AdminDashboard = () => {
  const shades = ['#e7e7e7', '#f4f1ef', '#fff9e6', '#edf7ee'];
  const [dashboardBlocks, setDashboardBlocks] = useState([]);
  const customerCount = useState(0);

  //for changing the format of total sales
  const formatNumber = (num) => {
    if (num >= 1000) {
      return `${Math.floor(num / 1000)}K+`;
    } else {
      return `${Math.floor(num)}`;
    }
  };

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Fetch counts from the server
        const response = await axios.get('http://localhost:5000/api/dashboard-counts');
        const data = response.data;

        // Update the dashboardBlocks with the fetched counts
        const newDashboardBlocks = [
          {
            title: 'User Accounts',
            content: 'Total Users',
            stat: `${data.userCount || customerCount}`,
          },
          {
            title: 'Product Listings',
            content: 'Total Products',
            stat: `${data.productCount || 0}`,
          },
          {
            title: 'Fulfillment',
            content: 'Orders to Fulfill',
            stat: `${data.pendingOrderCount || 0}`,
          },
          {
            title: 'Sales Reports',
            content: 'Total Sales',
            stat: `${formatNumber(data.totalSales || 0)}`
          },
        ];

        setDashboardBlocks(newDashboardBlocks);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchDashboardData();
  }, [customerCount]);

  return (
    <div className="admin-dashboard">
      <img
        src="https://drive.google.com/uc?export=view&id=1lO1bdm3a9sk11Xx_uD5RbqnfJugElaBM"
        alt="Dashboard Image1"
        className="img-fluid"
        style={{ width: '100%', height: '30vh', objectFit: 'cover' }}
      />
  
      <Container className="mt-4">
      <Row
        style={{
          marginTop: '-10%',
          '@media (max-width: 767px)': {
            marginTop: '-30%',
          },
        }}
        className="g-4"
      >
        <Col>
            <h4 style={{ marginTop: '-10%', color: 'white', fontFamily: 'Montserrat', marginBottom: '20px', letterSpacing: '1px' }}>Admin Dashboard</h4>
        </Col>
        </Row>
        <Row className="g-4">
          {dashboardBlocks.map((block, index) => (
            <Col key={index} xs={12} sm={6} md={6} lg={3}>
              <Card className="h-100" style={{ backgroundColor: shades[index % shades.length], padding: '10px', color: '#4caf50', fontFamily: 'Montserrat', borderRadius: '20px', border: '3px solid white' }}>
                <Card.Body>
                  <h3><b>{block.title}</b></h3>
                  <Row>
                    <Col className="col-4 d-flex justify-content-center">
                      <Card.Text><h1>{block.stat}</h1></Card.Text>
                    </Col>
                    <Col className="col-8 d-flex justify-content-start align-items-center">
                      <Card.Text><h5>{block.content}</h5></Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mb-3 justify-content-center">
        <img
          src="https://drive.google.com/uc?export=view&id=12aWGyofzmKoCTfLDczFLhz9O-DnDH3iJ"
          alt="Analytics"
          style={{ width: 'auto', height: 'auto', maxHeight: '75vh' }}
        />
        </Row>
        <Row className="mt-5 mb-5">
        <Col className="col-12 col-md-7">
            <h3 className="mb-4" style={{ color: '#757575', fontFamily: 'Montserrat' }}>Notifications</h3>
            <div>
              <Alert
                variant="info"
                className="d-flex justify-content-between align-items-center"
                style={{ backgroundColor: '#edf7ee', color: '#0f2310', border: 'none' }}
              >
                <div>
                  <strong>New order received!</strong> Maria Dolores has placed an order. Fulfill the orders now!
                </div>
                <div className="text-muted">
                  {new Date().toLocaleString()}
                </div>
              </Alert>
            </div>

            <div>
              <Alert
                variant="info"
                className="d-flex justify-content-between align-items-center"
                style={{ backgroundColor: '#fff9e6', color: '#0f2310', border: 'none'  }}
              >
                <div>
                  <strong>Product inventory update:  </strong> There is no available stocks for Banana(Lakatan). Refill them now!
                </div>
                <div className="text-muted">
                  {new Date().toLocaleString()}
                </div>
              </Alert>
            </div>

            <div>
              <Alert
                variant="info"
                className="d-flex justify-content-between align-items-center"
                style={{ backgroundColor: '#edf7ee', color: '#0f2310', border: 'none'  }}
              >
                <div>
                  <strong>New product listing:</strong> Added Radish to the inventory
                </div>
                <div className="text-muted">
                  {new Date().toLocaleString()}
                </div>
              </Alert>
            </div>

            <div>
              <Alert
                variant="info"
                className="d-flex justify-content-between align-items-center"
                style={{ backgroundColor: '#e6c8c8', color: '#0f2310', border: 'none'  }}
              >
                <div>
                  <strong>Cancelled: </strong> Order ID: 0084d644-e151 has been canceled by Maria Leonora Teressa
                </div>
                <div className="text-muted">
                  {new Date().toLocaleString()}
                </div>
              </Alert>
            </div>
          </Col>

          <Col className='col-12 col-md-5'>
            <h3 className="mb-4" style={{ color: '#757575', fontFamily: 'Montserrat' }}>Calendar / Schedule</h3>
            <Row className="notifications">
              {/* Event 1 */}
              <Col md={12}>
                <div style={{ backgroundColor: '#f5f4f4', border: 'none', padding: '20px', marginBottom: '10px' }}>
                  <h5 style={{fontWeight: 'bold'}}>Product Photoshoot</h5>
                  <p>Capture high-quality images of new farm products for the online store.</p>
                  <small>Date and Time: October 15, 2023, 9:00 AM - 12:00 PM</small>
                </div>
              </Col>
  
              {/* Event 2 */}
              <Col md={12}>
                <div style={{ backgroundColor: '#f5f4f4', border: 'none', padding: '20px', marginBottom: '10px' }}>
                  <h5 style={{fontWeight: 'bold'}}>Inventory Check</h5>
                  <p>Perform a thorough inventory check to ensure accurate stock levels.</p>
                  <small>Date and Time: December 20, 2023, 2:00 PM - 4:00 PM</small>
                </div>
              </Col>
  
              {/* Event 3 */}
              <Col md={12}>
                <div style={{ backgroundColor: '#f5f4f4', border: 'none', padding: '20px', marginBottom: '10px' }}>
                  <h5 style={{fontWeight: 'bold'}}>Meeting with Farmers/Suppliers</h5>
                  <p>Discuss upcoming deliveries and potential collaborations with farm suppliers.</p>
                  <small>Date and Time: January 25, 2024, 10:00 AM - 11:30 AM</small>
                </div>
              </Col>
  
            </Row>
          </Col>
        </Row>
      </Container>
      <AdminFooter />
    </div>
  );
  
};

export default AdminDashboard;
