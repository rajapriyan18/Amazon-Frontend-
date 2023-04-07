import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import watch from '../images/watch2.jpg';
import {AiOutlineDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
        <Meta title={ "Cart"} />
    <BreadCrumb title="Cart" />
    <Container class1="cart-wrapper py-5 home-wrapper-2">
       
            <div className="row">
                <div className="col-12">
                    <div className="cart-header py-3 d-flex justify-content-between align-items-center ">
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className="cart-data py-3 d-flex justify-content-between align-items-center ">
                        <div className='cart-col-1 gap-15 d-flex align-items-center'>
                            <div className='w-25'>
                                <img src={watch} className='img-fluid' alt="prod img" />
                            </div>
                            <div className='w-75'>
                            <h5>ttf</h5>
                            <p>Size: knc </p>
                            <p>Color:bbb</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5 className="price">₹1999</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type="number" className='form-control' min={1} max={10} />
                            </div>
                            <div>
                                < AiOutlineDelete className=' text-white rounded-circle del ' />
                            </div>
                        </div>
                        <div className='cart-col-4'>
                        <h5 className="price">₹1999</h5>
                        </div>
                    </div>
                    <div className="col-12 py-2 mt-4 ">
                        <div className="d-flex align-items-baseline justify-content-between">
                        <Link to='/product' className="button">Continue to Shopping</Link>
                        <div className='d-flex align-items-end flex-column'>
                            <h4>
                                Subtotal:  $1200
                            </h4>
                            <p>Taxes and Shipping Calculated at Checkout</p>
                            <Link to='/checkout' className="button">Checkout</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
     </Container>
    </>
  )
}

export default Cart