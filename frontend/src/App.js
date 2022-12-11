import React from 'react'
import'./index.css'
// import './bootstrap.mins.css';
// //import { BrowserRouter, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'


import HomeScreen from './screens/HomeScreen'
// import ProductScreen from './screens/ProductScreen'
// import CartScreen from './screens/CartScreen'
// import LoginScreen from './screens/LoginScreen'
// import RegisterScreen from './screens/RegisterScreen'
// import ProfileScreen from './screens/ProfileScreen'
// import ShippingScreen from './screens/ShippingScreen'
// import PaymentScreen from './screens/PaymentScreen'
// import PlaceOrderScreen from './screens/PlaceOrderScreen'
// import OrderScreen from './screens/OrderScreen'
// import UserListScreen from './screens/UserListScreen'
// import UserEditScreen from './screens/UserEditScreen'
// import ProductListScreen from './screens/ProductListScreen'
// import ProductEditScreen from './screens/ProductEditScreen'
// import OrderListScreen from './screens/OrderListScreen'

const App = () => {
  return (
    
    <div className= "App">
      <Header />
      <main className="py-3">
      <Container>
        
       <HomeScreen />

      </Container>
      </main>
      <Footer />
    </div>
  
);
  
};
export default App