import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';


const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);

  const productInfo = [
    "Savor the taste of home with our Yellow Corn, sourced straight from Filipino farms. Whether grilled, boiled, or steamed, these golden kernels bring back memories of family picnics and meriendas at home.",
    "An every Pinoy's favorite, from from to your table, purchase White Corn for its goodness. A pantry essential for Filipino households, it's a versatile ingredient that adds a comforting touch to your daily meals.",
    "Experience the heartiness of our Whole Chicken, a true Filipino classic. Raised by local farmers in Laguna, it's perfect for your Sunday family lunch or any day you want to whip up a delicious and heartwarming meal."
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProducts(data);

        // Select the first three products as featured
        const firstThreeFeatured = data.slice(0, 3);
        setFeaturedProducts(firstThreeFeatured);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Featured Farm Products</h2>
      <Row>
        {featuredProducts.map((product, index) => (
          <Col key={product._id} md={4}>
            <Card className="h-100">
              <div
                className="featured-product-image"
                style={{
                  backgroundImage: `url(${product.imageUrl})`,
                  backgroundSize: 'cover',
                  height: '300px',
                  position: 'relative',
                }}
              >
                <div
                  className="featured-product-overlay"
                  style={{
                    backgroundColor: 'rgba(141, 110, 99, 0.5)',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px',
                  }}
                >
                  <Card.Title className="text-white"><h3 style={{fontWeight: 'bold'}}>{product.name}</h3></Card.Title>
                  <Card.Text className="text-white"><h6 style={{ lineHeight: '1.5' }}>{productInfo[index]}</h6></Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="text-center my-4">
        <div className="d-flex align-items-center justify-content-center">
            <h5 style={{ margin: '0', marginRight: '10px' }}>
            View more of our poultry and crop products by signing in or signing up!
            </h5>
            <Link to="/signin" className="btn btn-success mx-2 cstm-btn">
            <b>SHOP NOW</b>
            </Link>
            <Link to="/signup" className="btn btn-outline-success mx-2 cstm-btn2">
            SIGN UP
            </Link>
        </div>
        </div>
    </Container>
  );
};

export default FeaturedProducts;
