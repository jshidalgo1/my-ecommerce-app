// SalesReports.js
import React, { useState, useEffect } from 'react';
import AdminFooter from "./AdminFooter.js";

const SalesReports = () => {
    const [weeklySales, setWeeklySales] = useState([]);
    const [monthlySales, setMonthlySales] = useState([]);
    const [annualSales, setAnnualSales] = useState([]);
    const [productSales, setProductSales] = useState([]);
    const [activeTab, setActiveTab] = useState('weekly');

  
  useEffect(() => {
    fetchSalesData('weekly');
    fetchSalesData('monthly');
    fetchSalesData('annual');
    fetchProductSales();
  }, []);

  const fetchSalesData = async (duration) => {
    try {
      const response = await fetch(`http://localhost:5000/api/sales/${duration}`);
      const data = await response.json();

      switch (duration) {
        case 'weekly':
          setWeeklySales(data);
          break;
        case 'monthly':
          setMonthlySales(data);
          break;
        case 'annual':
          setAnnualSales(data);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  const fetchProductSales = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/transactions');
      const transactions = await response.json();

      // Extract product information from completed transactions
      const productSalesData = transactions
        .filter(transaction => transaction.status === 1) // Filter completed transactions
        .reduce((acc, transaction) => {
          transaction.products.forEach((product) => {
            const existingProduct = acc.find((p) => p.productId === product.ProductId);

            if (existingProduct) {
              existingProduct.quantity += product.quantity;
            } else {
              acc.push({
                productId: product.ProductId,
                quantity: product.quantity,
              });
            }
          });

          return acc;
        }, []);

       // Query the database to get additional product details (name and price)
        const productDetailsPromises = productSalesData.map(async (product) => {
        const productResponse = await fetch(`http://localhost:5000/api/products/${product.productId}`);
        const productData = await productResponse.json();
        return {
          ...product,
          productName: productData.name,
          productImg: productData.imageUrl,
          price: productData.price,
        };
      });

      // Wait for all product details to be fetched
      const productDetails = await Promise.all(productDetailsPromises);
      setProductSales(productDetails);
    } catch (error) {
      console.error('Error fetching product sales data:', error);
    }
  };

  const handleDurationChange = (duration) => {
    setActiveTab(duration);
    fetchSalesData(duration);
  };

  const calculateTotalSales = () => {
    // Calculate total sales by summing up total profits for each product
    const totalSales = productSales.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  
    // Round the total sales to two decimal places
    return parseFloat(totalSales.toFixed(2));
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <h2 className="mb-5">Sales Report and Analytics</h2>

        {/* Bootstrap Tab Buttons */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <button style={{ color: '#757575' }} className={`nav-link ${activeTab === 'weekly' ? 'active' : ''}`} onClick={() => handleDurationChange('weekly')}>
              Weekly Sales
            </button>
          </li>
          <li className="nav-item">
            <button style={{ color: '#757575' }} className={`nav-link ${activeTab === 'monthly' ? 'active' : ''}`} onClick={() => handleDurationChange('monthly')}>
              Monthly Sales
            </button>
          </li>
          <li className="nav-item">
            <button style={{ color: '#757575' }} className={`nav-link ${activeTab === 'annual' ? 'active' : ''}`} onClick={() => handleDurationChange('annual')}>
              Annual Sales
            </button>
          </li>
          <li className="nav-item">
            <button style={{ color: '#757575' }} className={`nav-link ${activeTab === 'product' ? 'active' : ''}`} onClick={() => handleDurationChange('product')}>
              Product Sales
            </button>
          </li>
        </ul>

        {/* Display Sales Data */}
        <div>
        <h4 className="m-3" style={{ fontSize: '1.5rem' }}>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Sales</h4>

          {activeTab === 'product' && (
            <h4 className="m-3" style={{color: '#4CAF50', fontWeight: 'bold'}}>Total: ₱{calculateTotalSales()}</h4>
          )}

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {activeTab === 'weekly' && weeklySales.map((sale, index) => (
              <div key={index} className="col mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="text-muted card-title">Transaction ID: {sale.transactionId}</h5>
                    <p className="card-text">Date: {sale.date}</p>
                    <p className="card-text">Price: ₱{sale.totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'monthly' && monthlySales.map((sale, index) => (
              <div key={index} className="col mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="text-muted card-title">Transaction ID: {sale.transactionId}</h5>
                    <p className="card-text">Date: {sale.date}</p>
                    <p className="card-text">Price: ₱{sale.totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'annual' && annualSales.map((sale, index) => (
              <div key={index} className="col mb-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="text-muted card-title">Transaction ID: {sale.transactionId}</h5>
                    <p className="card-text">Date: {sale.date}</p>
                    <p className="card-text">Price: ₱{sale.totalPrice.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}

            {activeTab === 'product' && productSales.map((product, index) => (
              <div key={index} className="col mb-4">
                <div className="card h-100">
                  <img src={product.productImg} className="card-img-top" alt={product.productName} style={{ objectFit: 'cover', height: '150px' }} />
                  <div className="card-body">
                    <h5 className="text-muted card-title"><b>{product.productName}</b></h5>
                    <p className="card-text text-muted">Product ID: {product.productId}</p>
                    <p className="card-text">Sold: {product.quantity} | Price: ₱{product.price.toFixed(2)} | Total Profit: P{product.price.toFixed(2) * product.quantity.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AdminFooter />
    </>
  );
};

export default SalesReports;