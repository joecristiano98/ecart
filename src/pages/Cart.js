import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import { clearCart, removeCart } from '../redux/cartSlice';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';


function Cart() {

  const [show, setShow] = useState(false);

  const handleClose = () =>{
     setShow(false);
    }
  const handleShow = () => setShow(true);
const handlePay=()=>{
  dispatch(clearCart())
  setShow(false)
}
  
  const dispatch = useDispatch()

  const cartArray = useSelector(state => state.cart)
  console.log(cartArray);

  if (cartArray.length != 0) {
    var total = cartArray.map(i => i.price).reduce((a, b) => a + b)
  }

  else {
    var total = 0
  }
  return (
    <div>
      <h1 className='text-center p-5'>Cart Products</h1>
      {
        cartArray.length > 0 ? (
          <>
            <Table className='container p-5' striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>product title</th>
                  <th>price</th>
                  <th>image</th>
                </tr>
              </thead>
              <tbody>
                {cartArray.map((i, index) => (
                  <tr>
                    <td> {index + 1} </td>
                    <td> {i.title} </td>
                    <td>{i.price}  </td>
                    <td>
                      <img style={{ height: '100px' }}
                        src={i.image} alt="" />
                    </td>

                    <td className='text-center'>
                      <Button onClick={() => dispatch(removeCart(i.id))}>
                        <i class="fa-solid fa-trash mt-2 fa-2x text-danger"></i>

                      </Button>
                    </td>
                  </tr>
                ))

                }
              </tbody>
            </Table>
            <div className='text-end'>
              <h4>Cart Total : Rs {total} </h4>
            </div>
            <div>
              <Button className='btn btn-success ms-3' onClick={handleShow}>Checkout</Button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={handlePay}>
                    pay
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>

          </>
        )

          : <div className='text-center'><h1>No items in the cart</h1></div>

      }

    </div>
  )
}

export default Cart