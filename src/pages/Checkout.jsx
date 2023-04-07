import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import {FaBackward} from 'react-icons/fa';
import watch from '../images/watch2.jpg';
import Container from '../components/Container';

const Checkout = () => {
  return (
  <>
    <Meta title={ "Checkout"} />
<BreadCrumb title="Checkout" />
    <Container class1="checkout-wrapper py-5 home-wrapper-2">
       
            <div className="row">
                <div className="col-8">
                    <div className="checkout-left-data">
                        <h3 className="website-name">Relics</h3>
                        <nav style={{"--bs-breadcrumb-divider":">"}} aria-label="breadcrumb">
    <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link className=' total-pricetext-dark' to='/cart'>Cart</Link></li> &nbsp; /
    <li className="breadcrumb-item active total-price" aria-current="page">Information</li>&nbsp; /
    <li className="breadcrumb-item active total-price">Shipping</li> &nbsp; /
    <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
  </ol>
</nav>
<h4 className="title total">Contact Information</h4>
<p className="user-details total">Rajapriyan V S (rpriyan033@gmail.com)</p>
<h4 className='mb-3'>Shipping Address</h4>
<form action="" className='d-flex flex-wrap gap-15 justify-content-between'>
  <div className='w-100'>
    <select name="" className='form-control form-select' id="">
      <option value="" selected disabled>Select Country</option>
    </select>
  </div>
  <div className='flex-grow-1'><input type="text" placeholder='First Name' className="form-control" /></div>
  <div className='flex-grow-1'><input type="text" placeholder='Last Name(optoinal)' className="form-control" /></div>
  <div className='w-100'><input type="text" placeholder='Address' className="form-control" /></div>
  <div className='w-100'><input type="text" placeholder='Apartment, Suite,etc' className="form-control" /></div>
  <div  className='flex-grow-1' ><input type="text" placeholder='City'  className="form-control" /></div>
  <div className='flex-grow-1'>
    <select name="" className='form-control form-select' id="">
      <option value="" selected disabled>Select State</option>
    </select>
  </div>
  <div className='flex-grow-1'><div><input type="text" placeholder='Zipcode' className="form-control" /></div></div>
  <div className="w-100">
    <div className="d-flex justify-content-between align-items-center">
      <Link to='/cart' className='text-dark ret'><FaBackward className='me-2'/>Return to Cart</Link>
      <Link to='/' className='button'>Continue to Shipping</Link>
    </div>
  </div>
  <div></div>
  <div></div>

</form>
                    </div>
                </div>
                <div className="col-4">
                <div className='border-bottom py-4'>
                 <div className="d-flex gap-10 align-items-center">
                <div className='w-75 d-flex gap-10 ' >
                <div className='w-25 mb-2 position-relative'>
                  <span style={{"top":"-17px","right":"2px"}} className='bg-secondary text-white  rounded-circle p-2 position-absolute'> 1</span>
                    <img className='img-fluid' src={watch} alt="product" />
                   
                  </div>
                  <div className='mx-0 align-items-center p-2' > <h5 className="total-price">Samsung</h5><p className='total-price'>s  /pspps</p></div>
                </div>
             
                  
                  <div className='flex-grow-1'><h5>₹15,000</h5></div>
                 </div>
                </div>
                <div className='border-bottom py-4' >
                <div className="d-flex justify-content-between align-items-center">
                    <p>Shipping</p>
                    <p>₹15,000</p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className='mb-0'>Sub Total</p>
                    <p className='mb-0'>₹15,000</p>
                  </div>
                </div>
                  <div></div>
                  <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                    <h4 className='total'>Total</h4>
                    <h5 className='total-price'>₹15,000</h5>
                  </div>
                </div>
            </div>
        </Container>
  </>
    )

}

export default Checkout