import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const SignUp = () => {
  return (
    <>
           <Meta title={ "SignUp"} />
       <BreadCrumb title="SignUp" />

       <Container class1="signup-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                <div className="auth-card">
                    <h3 className='mb-3'>Create Account</h3>
                    <form action="" className='d-flex flex-column gap-30'>
                    <CustomInput type="text" name='firstname'placeholder='First Name' />
                    <CustomInput type="text" name='lastname'placeholder='Last Name' />
                    <CustomInput type="tel" name='mobile'placeholder='Mobile Number'  />
                    <CustomInput type="email" name='email'placeholder='E-Mail'   />
                    <CustomInput type="password" name='password' placeholder='Password' />
                    <CustomInput />
                    <div>
                            <input  />
                        </div>
                        <div>
                            <input />
                        </div>
                        <div>
                            <input/>
                        </div>
                        <div>
                            <input />
                        </div>
                        <div className='mt-0.7'>
                            <input  />
                        </div>
                        <div className="d-flex mt-2 flex-column justify-content-center gap-15 align-items-center">
                                <button className='button '>Create</button>
                                <Link to='/login'><p>Cancel</p></Link>
                                </div>
                        </form></div></div></div></Container>
                        
                        
    </>
  )
}

export default SignUp