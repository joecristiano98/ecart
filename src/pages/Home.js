
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {Heart, ShoppingCart} from 'react-feather'
import { addToCart } from '../redux/cartSlice';
import { addToWishlist } from '../redux/wishlistSlice';
import { fetchProducts } from '../redux/productsSlice';
import  './home.css'



function Home() {
  
const dispatch=useDispatch()

  const {allProducts,loading,error}=useSelector((state)=>state.productsSlice)

  
  
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])

  
  
  
  return (
   <div className='me-5 '>
     <Row>
<Col lg={6}>
<img 
className='w-100'
style={{height:'600px',width:'100%'}}
src="https://i.postimg.cc/KYhM3gLx/istockphoto-1148925683-612x612.jpg" alt="" />
</Col>
    <Col lg={6}>
       <div className='p-5 mt-5'>
          <h1>Enjoy Shopping with Shoplife</h1>
         <p className='mt-5 pe-5 fs-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, veritatis explicabo pariatur animi corrupti mollitia, cupiditate quis eos at laudantium dignissimos tempore perferendis veniam fuga doloremque earum dolorum. Ipsa, vitae.</p>
       </div>
    </Col>
     </Row>


     <Row className='mt-4'>
     {
      loading &&
      <div className='text-center p-5 mt-5'>
        <i class="fa-solid fa-spinner fa-5x fa-spin-pulse" style={{color: "#111318;"}}></i>
      </div>
      }
         
          { allProducts.length>0 && allProducts.map(i=>(

         <Col lg={3} md={4} sm={6} className='p-5'>
            <Card className='zoom text-center p-2  ' id='d' style={{ width: '18rem'}}>
            <Card.Img 
            variant="top"
            style={{height:'300px'}} 
            src={i.image} />
            <Card.Body>
              <Card.Title><h4>{i.title.length>15?i.title.slice(0,15)+"..":i.title}</h4></Card.Title>
              <Card.Text>
               <h1>{i.price} Rs</h1>
               <h4>Rating {i.rating.rate}</h4>
              </Card.Text>
              <Button variant="dark"  onClick={()=>dispatch(addToCart(i))}> 
              <ShoppingCart size={24} ></ShoppingCart></Button>
              <Button variant="dark" onClick={()=>dispatch(addToWishlist(i))} className='ms-5'>
                <Heart size={24}></Heart>
              </Button>
            </Card.Body>
          </Card>
         </Col>
        
        ))
       
       
          }
     </Row>
    
  
  
   </div>
  )}
export default Home