import React from 'react';
import {Link} from 'react-router-dom'
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { services } from '../utils/Data';



const Home = () => {
  return (
    <>
    <Meta title={"Welcome to Relics"} />
    <Container class1="home-wrapper-1 py-5">
    <div className="row">
          <div className="col-6">
              <div className="main-banner position-relative ">
                <img src="images/main-banner-1.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>SuperCharged for PRO5</h4>
                <h5>All-new <br/>
                  AirPods Pro
                </h5>
                <p> ₹26900.00* </p>
               <Link className='button'>Buy Now</Link>
              </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap justify-content-between align-items-center">
              <div className="small-banner position-relative p-2">
                <img src="images/catbanner-01.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>SuperCharged <br/> by
                 M2 Pro</h4>
                <h5>MacBook Pro
                </h5>
                <p> From ₹199900.00* </p>
               
              </div>
              
              </div>
              <div className="small-banner position-relative">
                 <img src="images/catbanner-02.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>Apple Watch</h4>
                <h5>Series 8
                </h5>
                <p> From ₹43000.00* </p>
               
              </div>
              
              
              </div>
              <div className="small-banner position-relative">
                 <img src="images/catbanner-03.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>Apple Ipad</h4>
                <h5>10th Gen
                </h5>
                <p> From ₹38000.00* </p>
               
              </div>              
              </div>
              <div className="small-banner position-relative">
                 <img src="images/catbanner-04.jpg" className='img-fluid rounded-3' alt="main banner" />
              <div className="small-banner-content position-absolute">
                <h4>New Arrival</h4>
                <h5>Airpodes Max
                </h5>
                <p> From ₹60000.00* </p>
               
              </div>
              
              
              </div>
              </div>
            </div>
          </div>

    </Container>
    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map((i,j)=>{
                return(
                  <div className='d-flex align-items-center gap-15' key={j}>
                  <img src={i.image} alt='services-items' />
                  <div>
                    <h6>{i.title}</h6>
                    <p className='mb-0'>{i.tagline}</p>
                  </div>
                </div>
                );
              })}
            </div>
          </div>
        </div>
    </Container >
    <Container class1='home-wrapper-2 py-5'>
    <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className='d-flex align-items-center'>

                <div>
                <h6>Camera</h6>
                <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>

                <div>
                <h6>Smart TV</h6>
                <p>10 Items</p>
              </div>
              <img src="images/tv.jpg" alt="TV" />
              </div>
              <div className='d-flex align-items-center'>

                <div>
                <h6>Smart Watches</h6>
                <p>10 Items</p>
              </div>
              <img src="images/watch.jpg" alt="Watch" />
              </div>
              <div className='d-flex align-items-center'>

                <div>
                <h6>Music and Gaming</h6>
                <p>10 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
              <div>
                <h6>Camera</h6>
              <p>10 Items</p>
              </div>
              <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className='d-flex align-items-center'>
                
              <div>
              <h6>Smart TV</h6>
              <p>10 Items</p>
              </div>
              <img src="images/tv.jpg" alt="TV" />
              </div>
              <div className='d-flex align-items-center'>
                
              <div>
              <h6>Smart Watches</h6>
              <p>10 Items</p>
              </div>
              <img src="images/watch.jpg" alt="Watch" />
              </div>
              <div className='d-flex align-items-center'>
                
              <div>
              <h6>Music and Gaming</h6>
              <p>10 Items</p>
              </div>
              <img src="images/headphone.jpg" alt="camera" />
              </div>
                          </div>
                        </div>
                      </div>
    </Container>
    <Container class1 ='featured-wrapper py-5 mx-20 align-items-center home-wrapper-2'>
    <div className="row">
          <div className="col-12">
          <h3 className="section-heading ">Featured Collection</h3></div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

        </div>
    </Container>
     <Container class1='famous wrapperpy-5 mx-20 align-items-center home-wrapper-2'>
     <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
            <img src="images/famous-1.jpg"  className='img-fluid-1' alt="laptop" />
            <div className="famous-content position-absolute text-white">
              <h5>
                Big Screen
              </h5>
              <h6>Smart watch Series 7</h6>
              <p>From ₹50000 or ₹2500/mo for 24 mo.* </p>
              </div>
             
              
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <img src="images/famous-2.jpg"  className='img-fluid-1' alt="laptop" />
            <div className="famous-content position-absolute text-black">
              <h5>
                Studio Display
              </h5>
              <h6>600 nits brightness</h6>
              <p>27-inch 5K retina display </p>
              </div>
             
              
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <img src="images/famous-3.jpg"  className='img-fluid-1' alt="laptop" />
            <div className="famous-content position-absolute text-black">
              <h5>
                Iphone 14 pro Max
              </h5>
              <h6>600 nits brightness</h6>
              <p>27-inch 5K retina display </p>
              </div>
             
              
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
            <img src="images/famous-4.jpg"  className='img-fluid-1' alt="laptop" />
            <div className="famous-content position-absolute text-black">
              <h5>
              HomePod
              </h5>
              <h6>Surprising sound </h6>
              <p>Connected smart home with Siri built in.</p>
              </div>
             
              
            </div>
          </div>
        </div>
        </Container>
            
    <Container class1='special-wrapper mx-20 align-items-center py-5 home-wrapper-2'>
    <div className="row">
        <div className="col-12">
          <h3 className="section-heading ">Special Products</h3></div>
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />

        </div>
    </Container>

     

     <Container class1="popular-wrapper py-5 mx-20 align-items-center home-wrapper-2 ">
      
        <div className="row">
          <div className="col-12">
          <h3 className="section-heading ">Our Popular Products</h3></div></div>
         <div className="row">
          
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          </div>
        

        
   
     </Container>

     <Container class1="marquee-wrapper mx-20 py-5 home-wrapper-2">
      
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper d-flex flex-wrap justify-content-between align-items-center p-3">
              <Marquee className=' mx-20 py-5 justify-content-between align-items-center '>
               <div className='mx-4  w-25'>
                <img src="images/brand-01.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-02.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-03.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-04.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-05.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-06.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-07.png" alt="brand" />
               </div>
               <div className='mx-4  w-25'>
                <img src="images/brand-08.png" alt="brand" />
               </div>
              </Marquee>
            </div>
          
        </div>
      </div>

     </Container>
     
     <Container class1="blog-wrapper py-5 home-wrapper-2">
     
        <div className="row">
          <div className="col-12">
          <h3 className="section-heading">Our Latest Blogs</h3></div>
          
         
        </div>
        <div className="d-flex">
        <div className="col-3">
          <BlogCard />
        </div>
        <div className="col-3">
          <BlogCard />
        </div>
        <div className="col-3">
          <BlogCard />
        </div>
        <div className="col-3">
          <BlogCard />
        </div>
        </div>
      </Container>
    </>
  )
}

export default Home