import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { searchProduct } from '../redux/productsSlice';
import { Button } from 'react-bootstrap';
import { Heart, ShoppingCart } from 'react-feather';


function Header() {
    const cartArray = useSelector(state => state.cart)

    const dispatch = useDispatch()

    return (
        <div>
             <Navbar expand="lg" style={{height:'100px',backgroundColor:'black',color:'red'}}>
    <Container>
    <Link style={{textDecoration:'none'}} to={'/'}>
      <Navbar.Brand className='text-white' href="#home">
      <img
              src="https://i.postimg.cc/zfKG84xv/online-shopping-app-application-logo-design-vector-40706776.jpg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt=""
            />
            <b className='ms-1 fs-1'>Shoplife</b>
      </Navbar.Brand>
      </Link>
      <Navbar.Toggle className='bg-white' aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
<Nav.Link className='text-white'  href="#home">Home</Nav.Link> 
         <Nav.Link className='text-white'  href="#link">Link</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Link style={{textDecoration:'none'}} to={'/cart'}>
            <Nav.Link className='text-white'  href="#cart">
              <p><ShoppingCart ></ShoppingCart><b className='ms-2'>{cartArray.length}</b></p>
              </Nav.Link>
          </Link>
<Link style={{textDecoration:'none'}} to={'/wishlist'}>
            <Nav.Link className='text-white ms-2'  href="#wishlist">
              <Heart></Heart></Nav.Link>
  
     </Link>  
      </Nav>
      <Form className="d-flex">
        <Form.Control
              type="search"
              placeholder="search"
             onChange={(e)=>dispatch(searchProduct(e.target.value))}
             className='me-2'
             aria-label='search'
            />
          
            <Button type="submit">search</Button>
        
      </Form>

      </Navbar.Collapse>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header