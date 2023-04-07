import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';

const WishList = () => {
  return (
  <>
     <Meta title={"Wish List"} />
    <BreadCrumb title="Wish list" />
    <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg " alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/tab.jpg" alt="tab" className='w-100 img-fluid' />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Samsung Galaxy Tab A8 10.5 inches Display, Wi-Fi</h5>
                            <h6 className="price mb-3">₹15,000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg " alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/tab.jpg" alt="tab" className='w-100 img-fluid' />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Samsung Galaxy Tab A8 10.5 inches Display, Wi-Fi</h5>
                            <h6 className="price mb-3">₹15,000</h6>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                    <img src="images/cross.svg " alt="cross" className="position-absolute cross img-fluid" />
                        <div className="wishlist-card-image">
                            <img src="images/tab.jpg" alt="tab" className='w-100 img-fluid' />
                        </div>
                        <div className="py-3 px-3">
                            <h5 className="title">Samsung Galaxy Tab A8 10.5 inches Display, Wi-Fi</h5>
                            <h6 className="price mb-3">₹15,000</h6>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                </Container>
  </>
  )
}

export default WishList