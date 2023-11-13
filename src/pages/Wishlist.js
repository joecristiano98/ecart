import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlist } from '../redux/wishlistSlice'
import { ShoppingCart } from 'react-feather'
import { addToCart } from '../redux/cartSlice'


function Wishlist() {
    const dispatch=useDispatch()

    // access data from store
    const wishlistArray=useSelector(state=>state.wishlist)
 
    const handleAddCart=(product)=>{

      // add to cart
      dispatch(addToCart(product))

      //remove from wishlist
      dispatch(removeWishlist(product.id))
    }

    return (
    <div className='text-center'>
        <h1>List Of Products In Your Wishlist</h1>
        {
        wishlistArray.length>0? (
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
         { wishlistArray.map((i,index)=>(
          <tr>
            <td> {index+1} </td>
            <td> {i.title} </td>
            <td>{i.price}  </td>
            <td> 
              <img style={{height:'100px'}}
              src={i.image} alt="" />
               </td>
               <td className='text-center'>
              <Button onClick={()=>dispatch(removeWishlist(i.id))}>
                <i class="fa-solid fa-trash mt-2 fa-2x text-danger" size={34}></i>
                
              </Button>
              <Button className='btn btn-light ms-4 mt-3'>
                <ShoppingCart size={34} onClick={()=>handleAddCart(i)}></ShoppingCart>
              </Button>
              </td>
            
          </tr>
          ))
            
         }
        </tbody>
      </Table>
     
       </>
    )
        
        : <div className='mt-5'><h1>Wishlist is empty! Continue Shopping</h1></div>
        
        }
    </div>
  )
}

export default Wishlist