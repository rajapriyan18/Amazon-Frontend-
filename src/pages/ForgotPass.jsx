import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ForgotPass = () => {
  return (
    <>
        <Meta title={ "Forgot Password"} />
    <BreadCrumb title="Forgot Password" />
    <Container className="forget-wrapper py-5 home-wrapper-2">
       
            <div className="row">
                <div className="col-12">
                <div className="auth-card">
                    <h3>Reset Your Password</h3>
                    <p className='d-flex mt-3 holo justify-content-center gap-15 align-items-center'>We will send you an link to reset your password</p>
                    <form action="" className='d-flex flex-column gap-30'>
                         
                            <CustomInput type="email" name='email'placeholder='E-Mail'  />
                       
                        <div className="d-flex mt-2 justify-content-center gap-15 align-items-center">
                                <button className='button'>Login</button></div>
                               <div className="d-flex justify-content-center gap-15 align-items-center">
                               <Link to='/login' >
                            Cancel</Link>
                               </div>
                        </form>
                        </div>
                        </div></div></Container>
    </>
  )
}

export default ForgotPass