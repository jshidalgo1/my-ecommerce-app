import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi/index.esm.js';
import AdminFooter from './AdminFooter.js';

const UserAccount = ({onCustomerCountChange }) => {
  const [users, setUsers] = useState([]);
  const [customerCount, setCustomerCount] = useState(0); // State to store the count of Customers

  useEffect(() => {
    axios.get('http://localhost:5000/api/users') 
      .then(response => {
        const customerUsers = response.data.filter(user => user.UserType !== 'admin');
        setUsers(customerUsers);
        setCustomerCount(customerUsers.length);

        // Pass the customer count to dashboard component
        onCustomerCountChange(customerUsers.length);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, [onCustomerCountChange]);

  const [showDetails, setShowDetails] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleDetailsClose = () => setShowDetails(false);

  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowDetails(true);
  };

  const filteredUsers = users.filter(user => {
    const fullName = `${user.firstName || ''} ${user.middleInitial ? user.middleInitial + ' ' : ''}${user.lastName || ''}`;
    const userIdString = user.userId ? user.userId.toString() : '';
    const email = user.email || '';
    const UserName = user.UserName || '';
  
    return fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      userIdString.toLowerCase().includes(searchTerm.toLowerCase()) ||
      email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      UserName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  

  return (
    <> 
    <Container className="mt-5 mb-5">
        <Row className="align-items-center">
        <Col xs={12} md={8}>
          <h4 className="mb-5">Customer Accounts ({customerCount})</h4>
        </Col>
        <Col xs={12} md={4}>
          {/* Search Bar with Search Icon */}
          <Form className="mb-3">
            <Form.Group className="d-flex align-items-center">
              <BiSearch style={{marginRight: '10px'}} size={20} className="mr-2" /> {/* Search Icon */}
              <Form.Control
                type="text"
                placeholder="Search by name, ID, email, or username"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-100"
              />
            </Form.Group>
          </Form>
        </Col>
      </Row>

        {/* Display Results Text and Cards when there is a search term */}
        {searchTerm && (
        <div>
          <h5 className="mb-3">Results</h5>
          <Row xs={1} md={2} lg={3} className="g-4">
            {filteredUsers.map(user => (
              <Col key={user.userId}>
                <Card className="h-100" style={{ fontFamily: 'Lato' }}>
                  <Card.Body>
                    <Card.Title>{`${user.firstName || ''} ${user.middleInitial ? user.middleInitial + ' ' : ''}${user.lastName || ''}`}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{`ID: ${user.userId || ''}`}</Card.Subtitle>
                    <Card.Text>{`Email: ${user.email || ''}`}</Card.Text>
                    <Card.Text>{`Username: ${user.userName || ''}`}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                  <Button variant="success" onClick={() => handleViewDetails(user)} style={{ backgroundColor: '#4CAF50' }}>View Details</Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
          <hr className="my-4" style={{margin: '10px 0px 180px 0px'}}/>
        </div>
      )}

      <Row xs={1} md={2} lg={3} className="g-4">
        {users
          .filter(user => user.UserType === 'Customer') // Filter users with UserType: Customer
          .map(user => (
            <Col key={user.userId}>
              <Card className="h-100" style={{ fontFamily: 'Montserrat !important' }}>
                <Card.Body>
                  <Card.Title style={{fontFamily: 'Montserrat', fontWeight: 'bold'}}>{`${user.firstName} ${user.middleInitial ? user.middleInitial + ' ' : ''}${user.lastName}`}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{`${user.UserType} | ${user.userId}`}</Card.Subtitle>
                  <Card.Text>{`Email: ${user.email}`}</Card.Text>
                  <Card.Text>{`Username: ${user.UserName}`}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Button variant="success" onClick={() => handleViewDetails(user)} style={{ backgroundColor: '#4CAF50' }}>View Details</Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>


      {/* Details Modal */}
      <Modal show={showDetails} onHide={handleDetailsClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedUser && (
            <div>
              <p>{`Name: ${selectedUser.firstName} ${selectedUser.middleInitial ? selectedUser.middleInitial + ' ' : ''}${selectedUser.lastName}`}</p>
              <p>{`ID: ${selectedUser.userId}`}</p>
              <p>{`Email: ${selectedUser.email}`}</p>
              <p>{`Username: ${selectedUser.UserName}`}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDetailsClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    <AdminFooter />
    </>
  );
}

export default UserAccount;
