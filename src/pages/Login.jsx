import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const Login = () => {
  return (
    <>
        <Meta title={ "Login"} />
    <BreadCrumb title="Account" />
 
    <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
                <div className="col-12">
                <div className="auth-card">
                    <h3>Login Here</h3>
                    <form action="" className='d-flex flex-column gap-30'>
                        <CustomInput type="email" name='email' placeholder='E-Mail'/>
                        <CustomInput type="password" name='password' placeholder='Password' />

                        
                        <div>
                            <Link to='/forgot-password' >
                            Forgot Password</Link>
                            <div className="d-flex mt-2 justify-content-center gap-15 align-items-center">
                                <button className='button'>Login</button>
                                <Link to='/signup'
                                className='button signup'>SignUp</Link>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                
                </Container>

    </>
  )
}

export default Login