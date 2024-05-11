import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { UserProvider } from './Main/UserContext.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css';

//component import
import Home from './Main/Home.js';
import Header from './Main/Header.js';
import Store from './Shop/Store.js';
import Logout from './Main/Logout.js';
import AccountProfile from './Shop/AccountProfile.js';
import About from './Main/About.js';
import SignIn from './Main/SignIn.js';
import SignUp from './Main/SignUp.js';
import AdminDashboard from './Admin/AdminDashboard.js';
import AdminHeader from './Admin/AdminHeader.js';
import UserAccounts from './Admin/UserAccounts.js';
import ProductListings from './Admin/ProductListings.js';
import OrderFulfillments from './Admin/OrderFulfillment.js';
import SalesReports from './Admin/SalesReport.js';
import PrivacyPolicy from './Main/PrivacyPolicy.js';
import TermsOfUse from './Main/TermsOfUse.js';

const router = createBrowserRouter([
  {path: '/', element:<Header />, children: [
    {path: '/', element:<Home />},
    {path: '/about', element: <About />},
    {path: '/signin', element: <SignIn />},
    {path: '/signup', element: <SignUp />},
    {path: '/privacy-policy', element: <PrivacyPolicy />},
    {path: '/terms', element: <TermsOfUse />}

  ]},
  {path: '/admin-dashboard', element:<AdminHeader />, children: [
    {path: '/admin-dashboard', element: <AdminDashboard /> },
    {path: '/admin-dashboard/user-accounts', element: <UserAccounts /> },
    {path: '/admin-dashboard/products', element: <ProductListings /> },
    {path: '/admin-dashboard/orders', element: <OrderFulfillments /> },
    {path: '/admin-dashboard/sales-reports', element: <SalesReports /> },
  ]}, 
  {path: '/store', children: [
    {path: '/store', element:<Store/>},
    {path: '/store/profile', element: <AccountProfile /> },
  ]},
  {path:'/logout',element:<Logout/>}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);