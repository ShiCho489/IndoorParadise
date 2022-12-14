import React from 'react'
import'./index.css'
// import './bootstrap.mins.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'


import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
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
    
   <Router>
    <Header />
      <main className="py-3">
      <Container>
        
       <Route path='/' component={HomeScreen} exact></Route>
       <Route path='/product/:id' component={ProductScreen}></Route>
      </Container>
      </main>
      <Footer />
   </Router>

  
);
  
};
export default App