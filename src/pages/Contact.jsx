import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

import {BiHomeAlt, BiMailSend, BiInfoCircle, BiPhoneCall} from 'react-icons/bi';


const Contact = () => {
  return (
    
   <>
   <Meta title={"Contact Us"} />
    <BreadCrumb title="Contact" />
    <div className="conatct-wrapper home-wrapper-2 py-5">
       
            <div className="row">
                <div className="col-12">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.012840038991!2d80.2099800149063!3d13.034854190814373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267c15401afc1%3A0x7acc871dc8f94f13!2sAshok%20Pillar!5e0!3m2!1sen!2sin!4v1678003488007!5m2!1sen!2sin" width="600" height="450" className='border-0 w-100' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                  <div className="col-12 mt-5">
                    <div className="contact-inner-wrapper d-flex justify-content-between">
                      <div>
                        <h3 className="contact-title">Contact </h3>
                        <form action="" className='d-flex flex-column gap-15'>
                          <div>
                            <input type="text" className="form-control" placeholder='Name*' />
                          </div>
                          <div>
                            <input type="text" className="form-control" placeholder='Place*' />
                          </div>                    
                          <div>
                            <input type="number" className="form-control" placeholder='Phone Number*'/>
                          </div>
                          <div>
                            <textarea name="" id="" className='w-100 form-control' placeholder='Comments' cols="4" rows="10"></textarea>
                          </div>
                          <button className="button w-25 border-0">Submit</button>
                        </form>
                      </div>
                      <div>
                        <h3 className="contact-title m-10">Get in touch with us</h3>
                        <div>
                          <ul className="ps-0">
                            <li className='mb-3 d-flex gap-15 align-items-center'>
                              <BiHomeAlt className='fs-5'/>
                              <p className='mb-0'>
                                No.3 84th street Ashok Nagar Chennai-83.
                              </p>
                            </li>
                            <li className='mb-3 d-flex gap-15 align-items-center'>
                              <BiPhoneCall className='fs-5' />
                            <a href="tel:+91 7358315568">+91-7358315568</a>
                            </li>
                            <li className='mb-3 d-flex gap-15 align-items-center'>
                              <BiMailSend className='fs-5'/>
                              <a href="mailto:rpriyan033@gmail.com" >rpriyan033@gmail.com</a>
                            </li>
                            <li className='mb-3 d-flex gap-15 align-items-center'>
                              <BiInfoCircle className='fs-5' />
                              <p className='mb-0 '>Monday to Friday 9am-7pm</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                     </div>
                  </div>
                  </div></div>
   </>
  )
}

export default Contact