import React  from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation} from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";

import wish from "../images/wish.svg";

import wishlist from "../images/wishlist.svg";

import watch from "../images/watch2.jpg";

import watch2 from "../images/watch3.jpg";

import addcart from "../images/add-cart.svg";

import view from "../images/view.svg";


const ProductCard = (props) => {
    const {grid} =props
    let location = useLocation();

  return (
   <>
    
    <div className={`${ location.pathname ==="/store" ? `gr-${grid}`: "col-3" }`}>
        <Link to=':id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
            </div>
        <div className="product-image">

            <img src={watch} className='img-fluid' alt="product-img" />
            <img src={watch2} className='img-fluid' alt="product-img" />

        </div>
        <div className="product-details">
            <div className="brand">Havells</div>
            <h5 className="product-title">
                Have A Great start here after with 1.69 inch super fast charging  
            </h5>
            <ReactStars
    count={5} size={24} value={4} edit={false}
    activeColor="#ffd700"
  />
  <p className={`description ${grid === 12? "d-block": "d-none"}`}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reiciendis porro exercitationem ex nesciunt voluptatum voluptate corrupti recusandae alias natus? Sint culpa placeat rem consectetur recusandae aperiam magnam animi neque.
  </p>
            <p className="price text-black">₹1200</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src={prodcompare} alt="compare" />
                    </Link>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="add" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="images/" alt="" />
                </button>
            </div>
        </div>
    </Link>
    </div>
    <div className={`${ location.pathname ==="/store" ? `gr-${grid}`: "col-3" }`}>
        <Link to=':id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
            </div>
        <div className="product-image">

            <img src={watch} className='img-fluid' alt="product-img" />
            <img src={watch2} className='img-fluid' alt="product-img" />

        </div>
        <div className="product-details">
            <div className="brand">Havells</div>
            <h5 className="product-title">
                Have A Great start here after with 1.69 inch super fast charging  
            </h5>
            <ReactStars
    count={5} size={24} value={4} edit={false}
    activeColor="#ffd700"
  />
  <p className={`description ${grid === 12? "d-block": "d-none"}`}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reiciendis porro exercitationem ex nesciunt voluptatum voluptate corrupti recusandae alias natus? Sint culpa placeat rem consectetur recusandae aperiam magnam animi neque.
  </p>
            <p className="price text-black">₹1200</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src={prodcompare} alt="compare" />
                    </Link>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="add" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="images/" alt="" />
                </button>
            </div>
        </div>
    </Link>
    </div>
    <div className={`${ location.pathname ==="/store" ? `gr-${grid}`: "col-3" }`}>
        <Link to=':id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
            </div>
        <div className="product-image">

            <img src={watch} className='img-fluid' alt="product-img" />
            <img src={watch2} className='img-fluid' alt="product-img" />

        </div>
        <div className="product-details">
            <div className="brand">Havells</div>
            <h5 className="product-title">
                Have A Great start here after with 1.69 inch super fast charging  
            </h5>
            <ReactStars
    count={5} size={24} value={4} edit={false}
    activeColor="#ffd700"
  />
  <p className={`description ${grid === 12? "d-block": "d-none"}`}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, reiciendis porro exercitationem ex nesciunt voluptatum voluptate corrupti recusandae alias natus? Sint culpa placeat rem consectetur recusandae aperiam magnam animi neque.
  </p>
            <p className="price text-black">₹1200</p>
        </div>
        <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
                <Link>
                    <img src={prodcompare} alt="compare" />
                    </Link>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="add" />
                    </button>
                    <button className='border-0 bg-transparent'>
                    <img src="images/" alt="" />
                </button>
            </div>
        </div>
    </Link>
    </div>
   </>
    
  )
}

export default ProductCard