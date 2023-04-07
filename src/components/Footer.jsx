import React from 'react';
import { Link } from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram } from 'react-icons/bs';
import newsletter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className='py-4'>
        <div className="conatiner-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 justify-content-center align-items-center ">
                <img src={newsletter} alt='newsletter' />
                <h2 className='mb-0 text-white'>Sign Up For Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
            <div className="input-group justify-content-center ">
              <input type="text" 
              className="form-control py-1" 
              placeholder="Your E-mail Address" 
              aria-label="Your E-mail Address" 
              aria-describedby="basic-addon2" />
              <span className="input-group-text p-2" 
              id="basic-addon2">Subscribe</span>
            </div>
            </div>
          </div>
        </div>
      </footer>
 

      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className='text-white mb-4'>Get to Know Us</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>About Us</Link>
                <Link className='text-white py-2 mb-1'>Carrers</Link>
                <Link className='text-white py-2 mb-1'>Press Release</Link>
                <Link className='text-white py-2 mb-1'>Amazon Service</Link>
               </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Contact with Us</h4>
              <div >
                <adddress className='text-white fs-6'>No.3, 84th Street,<br />
                  Ashok Nagar, <br/>
                  Chennai-83.<br/>
                </adddress>
<a href="tel:+91 7358315568" className="mt-3 d-block mb-2 text-white">+91 7358315568</a>
<a href="mailto:rpriyan033@gmail.com" className="mt-2 d-block mb-2 text-white">rpriyan033@gmail.com</a>

<div className="social-icons d-flex align-items-center gap-30 mt-4">
  <a className='text-white' href="/"><BsLinkedin className='text-white fs-5' /></a>
  <a className='text-white' href="/"><BsInstagram className='text-white fs-5'  /></a>
  <a className='text-white' href="/"><BsGithub className='text-white fs-5'  /></a>
  <a className='text-white' href="/"><BsYoutube className='text-white fs-5'  /></a>
</div>
              </div>
            </div>
            <div className="col-3">
              <h4 className='text-white mb-4'>Information</h4>
              <div className='footer-links d-flex flex-column'>
                <Link to='/privacy' className='text-white py-2 mb-1'>Privacy Policy</Link>
                <Link to='/refund' className='text-white py-2 mb-1'>Refund Policy</Link>
                <Link to='/shipping' className='text-white py-2 mb-1'>Shipping Policy</Link>
                <Link to='/terms' className='text-white py-2 mb-1'>Terms of Service</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className='text-white mb-4'>Quick Links</h4>
              <div className='footer-links d-flex flex-column'>
                <Link className='text-white py-2 mb-1'>Laptop</Link>
                <Link className='text-white py-2 mb-1'>Headphone</Link>
                <Link className='text-white py-2 mb-1'>Tablets</Link>
                <Link className='text-white py-2 mb-1'>Table</Link>

                <Link className='text-white py-2 mb-1'>Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className='py-4'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className='text-center mb-0 text-white'>&copy;{new Date().getFullYear()}; Designed & Developed by Raj</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer