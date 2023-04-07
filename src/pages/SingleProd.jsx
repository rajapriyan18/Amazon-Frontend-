import React, { useState } from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import Color from '../components/Color';
import ReactImageZoom from 'react-image-zoom';
import { Link } from 'react-router-dom';
import {BiGitCompare} from 'react-icons/bi';
import {AiOutlineHeart} from 'react-icons/ai'
import Container from '../components/Container';


const SingleProd = () => {
  
  const props = {width: 600, height: 600, zoomWidth: 600, img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"};
    const [orderedProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
      console.log('text', text)
      var textField = document.createElement('textarea')
      textField.innerText = text
      document.body.appendChild(textField)
      textField.select()
      document.execCommand('copy')
      textField.remove()
    }
  return (
    <>
          <Meta title={ "Product Name dy"} />
     <BreadCrumb title= "Product Name dy" />
     <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-6">
                  <div className="main-product-image">
                      <div>
                      <ReactImageZoom {...props} />
                      </div>
                  </div>
                  <div className="other-product-images d-flex flex-wrap-15 gap-15">
                  <div>
                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg " className='img-fluid' alt="" />
                  </div>
                  <div>
                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg " className='img-fluid' alt="" />
                  </div>
                  <div>
                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg " className='img-fluid' alt="" />
                  </div>
                  <div>
                    <img src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg " className='img-fluid' alt="" />
                  </div>
                
                  </div>
                </div>
                <div className="col-6">
                  <div className="main-product-details">
                      <div className="border-bottom">
                        <h3 className='title'>Fossil Chronograph Black Men Watch FS4832.</h3>
                      </div>
                      <div className="border-bottom py-3">
                        <p className="price">
                        ₹1200
                        </p>
                        <div className="d-flex align-items-center gap-10">
                        <ReactStars className='mb-1'
                             count={5} size={24} value={4} edit={false}
                            activeColor="#ffd700"/>
                            <p className='mox'>Based on 2 Reviews</p>        
                        </div>
                        <div className="d-flex justify-content-end ">
                      <a className='ted text-decoration-underline' href="#review">Write a Review</a>
                      </div>
                      </div>
                      <div className="border-bottom py-4">
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className='product-head'>Type:</h3> <p className='mox'>Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className='product-head'>Brand:</h3> <p className='mox'>Fossil</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className='product-head'>Category:</h3> <p className='mox'>Watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center my-2">
                          <h3 className='product-head'>Tags:</h3> <p className='mox'>watch</p>
                        </div>
                        <div className="d-flex gap-10 align-items-center mt-3 mb-2">
                          <h3 className='product-head'>Availablity:</h3> <p className='mox'>In Stock</p>
                        </div>
                      </div>
                      <div className="d-flex gap-10 align-items-center mt-3 mb-2">
                          <h3 className='product-head'>Size:</h3>
                          <div className="d-flex flex-wrap gap-1">
                            <span className="badge">S</span>
                            <span className="badge">M</span>
                            <span className="badge">L</span>
                            <span className="badge">XL</span>
                          </div>
                          </div>
                      <div className="d-flex gap-10 align-items-center mt-3 mb-2">
                          <h3 className='product-head'>Color:</h3>
                          <h6 className="clix">
                            <Color/>
                          </h6>
                        </div>
                        <div className="d-flex flex-row gap-10 align-items-center mt-3 mb-2">
                          <h3 className='product-head'>Quantity:</h3>
                          <div>
                            <input type="number" className='quan' min={1} max={10} id='' />
                            </div>
                            <div className="d-flex mot ms-5 mt-2 justify-content-center gap-15 align-items-center">
                                <button className='button'>Buy Now</button>
                                <Link to='/signup'
                                className='button signup'>Add to Cart</Link>
                            </div>
                          </div>
                          <div className="d-flex gap-10 align-items-center">
                            <div className='com-wis'>
                              <a  href=""><BiGitCompare/>Add to Compare</a>
                            </div><div className='com-wis'>
                            <a  href=""> < AiOutlineHeart/> Add to WishList</a>
                          </div></div>
                          <div className="d-flex flex-column gap-10 my-3">

<h3 className="product-head">Shipping & Returns :</h3>
<p className="product-data">
Free shipping and returns available on all orders! <br />We ship all US domestic orders within <b>5-10 business days!</b>
</p>

</div>

<div className="d-flex gap-10 align-items-center my-3">

<h3 className="product-head">Product Link:</h3>

<a className='nam' href="#;" onClick={()=>{
  copyToClipboard("https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg")
}}>Copy Product Link</a>

</div>
                  </div>
                  
                  
                </div>
            </div>
            </div>
     </Container>
     <Container class1="desc-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                <h4 className="titq">Description</h4>
                <div className="bg-white p-3">
               
                <p className="bg-white p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur ducimus, ad corrupti repellendus modi eligendi illo reprehenderit deleniti veniam exercitationem vitae iste dolorum quisquam, commodi quis in! Ex, magni?</p>
                </div>
                </div>
            </div>
       
     </Container>
     <Container  className="reviews-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="col-12">
                  <h4 className="titq">Reviews</h4>
                    <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                        <div>
                            <h4 className='mb-2'>Customer Reviews</h4>
                            <div className="d-flex gap-10">
                            <ReactStars
                             count={5} size={24} value={4} edit={false}
                            activeColor="#ffd700"/>
                                    <p className='mox'>Based on 2 Reviews</p>        
                            </div>
                        </div>
                       <div id='review'> {
                            orderedProduct&&(<div>
                            <a className='text-dark text-decoration-underline' href="#review"> Write a Review</a>
                        </div>
                        )}</div>
                    </div>
                    <div className="review-form py-3">
                        <h3 className="title mb-5">Write A Review</h3>
                    <form action="" className='d-flex flex-column gap-15'>
                          <div className='rev'>
                            <p className="form-tit">Name</p>
                            <input type="text" className="form-control" placeholder='Enter Your Name' />
                          </div>
                          <div className='rev'><p className="form-tit">E-Mail</p>
                            <input type="email" className="form-control" placeholder='rock@example.com' />
                          </div>            
                          <div className="stars"><p className="form-tit">Ratings</p>
                          <ReactStars
                             count={5} size={24} value={0} edit={true}
                            activeColor="#ffd700"/>
                            </div>        
                            <div className='rev'><p className="form-tit">Review Title</p>
                            <input type="text" className="form-control" placeholder='Give your review a title' />
                          </div>
                          <div className='rev'><p className="form-tit">Body of Reviews (1500) </p>
                            <textarea name="" id="" className='w-100 form-control' placeholder='Write Your Comments here' cols="4" rows="10"></textarea>
                          </div>
                          <div className="align-items-end butq">
                          <button className="button  mt-2 w-25 justify-content-end  border-0">Submit Review</button>
                          </div>
                        </form>
                    </div>
                    <div className="reviews mt-3">
                      <div className="review">
                      <ReactStars className='mb-1'
                             count={5} size={24} value={4} edit={false}
                            activeColor="#ffd700"/>
                            <h3>Good</h3>
                            <p className="nam">by <b>Kumar </b>on <b>27 Mar 2023</b> </p>
                <p className="mt-1 nam">
                This product is very satisfied
                </p>

                      </div>
                      <div className="review">
                      <ReactStars className='mb-1'
                             count={5} size={24} value={4} edit={false}
                            activeColor="#ffd700"/>
                            <h3>Good</h3>
                            <p className="nam">by <b>Kumar </b>on <b>27 Mar 2023</b> </p>
                <p className="mt-1 nam">
                This product is very satisfied
                </p>

                      </div>
                    </div>
                    </div>
                </div>
            </div>
        
     </Container>
            <Container class1="popular-wrapper py-5 mx-20 align-items-center home-wrapper-2 ">
        <div className="row">
          <div className="col-12">
          <h3 className="section-heading ">Our Popular Products</h3></div></div>
         <div className="row">
          
          <ProductCard />
          
          
         </div>

        
   
     </Container>

        
    </>
  )
}

export default SingleProd