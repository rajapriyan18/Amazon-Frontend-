import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';
import {FaBackward} from 'react-icons/fa';
import blog from '../images/blog-1.jpg'
import Container from '../components/Container';

const SingleBlog = () => {
  return (
    <>
         <Meta title={ "Dynamic blog"} />
    <BreadCrumb title= "Dynamic blog" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
      
            <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                    <Link to='/blogs'className='d-flex align-items-center gap-10'>
                        <FaBackward className='fs-4' /> Go Back to Blogs</Link>
                        <h3 className="title"> Virtual Reality is now Taking off!
                        </h3>
                        <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                        <p>Virtual Reality is all about realistic and immersive simulation of a three-dimensional environment. As the digitalization extended Virtual Reality gained significant ground in every sphere. VR can maximize business profits and drastically improve the customer experience. Likewise, VR is trending in the gaming industries that have got benefited from this immersive technology. There are the most successful implementer of cutting-edge VR gaming in the market. Many large-scale game development companies have jumped on the VR movement to transfomation</p>
                    </div>
                    
                </div>
            </div>
        
    </Container>
    </>
  )
}

export default SingleBlog