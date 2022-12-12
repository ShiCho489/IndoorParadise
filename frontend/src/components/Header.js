import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
     <header> 
      <Navbar bg="dark" variant="dark" expand="lg">
     <Container>
      <Link to='/'>
      <Navbar.Brand>IndoorBeauty</Navbar.Brand>
      </Link>
       
       <Navbar.Toggle aria-controls="basic-navbar-nav" />
       <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link to='/home'>
          <Nav.Link href="/home">
            <i className="fas fa-home">
            </i>
            About</Nav.Link>
          </Link>
          <Link to= '/cart'>
          <Nav.Link href="/cart">
            <i className="fas fa-shopping-cart">
            </i>
            Cart</Nav.Link>
          </Link>
          <Link to='/login'>
          <Nav.Link href="/login"><i className="fas fa-user">
            </i>
            Sign In</Nav.Link>
          </Link>
        </Nav>
       </Navbar.Collapse>
     </Container>
   </Navbar></header>
  )
}

export default Header