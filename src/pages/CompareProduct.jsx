import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Container from '../components/Container';

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare products"} />
    <BreadCrumb title="Compare Products" />
    <Container className="compare-wrapper home-wrapper-2 py-5">
 
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg " alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/tab.jpg" className='img-fluid w-100' alt="" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Samsung Galaxy Tab A8 10.5 inches Display, Wi-Fi</h5>
                            <h6 className="price mb-3">₹15,000</h6>
                            <div>
                                <div className="product-details">
                                    <h5>Brand:</h5>
                                    <p>Samsung</p>
                                </div>
                                <div className="product-details">
                                    <h5>Type:</h5>
                                    <p>Tablet</p>
                                </div>
                                <div className="product-details">
                                    <h5>Availablity:</h5>
                                    <p>In stock</p>
                                </div>
                                <div className="product-details">
                                    <h5>Color:</h5>
                                    <p><Color/></p>
                                </div>
                                <div className="product-details">
                                    <h5>Size</h5>
                                    <div className="d-flex gap-10">
                                    <p>3GB</p>
                                    <p>4GB</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg " alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/tab.jpg" className='w-100' alt="" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Samsung Galaxy Tab A8 10.5 inches Display, Wi-Fi</h5>
                            <h6 className="price mb-3">₹15,000</h6>
                            <div>
                                <div className="product-details">
                                    <h5>Brand:</h5>
                                    <p>Samsung</p>
                                </div>
                                <div className="product-details">
                                    <h5>Type:</h5>
                                    <p>Tablet</p>
                                </div>
                                <div className="product-details">
                                    <h5>Availablity:</h5>
                                    <p>In stock</p>
                                </div>
                                <div className="product-details">
                                    <h5>Color:</h5>
                                    <p><Color/></p>
                                </div>
                                <div className="product-details">
                                    <h5>Size</h5>
                                    <div className="d-flex gap-10">
                                    <p>3GB</p>
                                    <p>4GB</p>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </div>
            </div>
        
 
</Container>
    </>
  )
}

export default CompareProduct