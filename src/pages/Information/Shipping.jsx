import React from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
const Shipping = () => {
  return (
    <div>
     <Meta title={ "Shipping Policy"} />
<BreadCrumb title= "Shipping Policy" />
<div className="inform-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
               <div className="para">
                <h3 className="title">General Shipping Policies</h3>
                <p className="desc">
                If we provide a guaranteed delivery date and a delivery attempt isn't made by this date, we'll refund any shipping fees associated with that order.<br/>

The "order within" countdown timer provides the window of time in which you must place the order to receive your delivery by the date shown. The delivery day may become unavailable within that timeframe due to changes in inventory or delivery capacity before you place your order. Your confirmed delivery date is in your order confirmation email.
                </p>
               </div>
               <div className="para">
                <h3 className="title">
                Shipping Rates & Times
                </h3>
                <h6 className="doe">
                Shipping times to Contiguous U.S. vary depending on your location and selected shipping speed.
                
                </h6>
                <div className="w-60 h-70 csd">
                    <img src="images/ship.png" alt="" />
                </div>
                <p className="desx">
                <b>Note:</b> In many areas Saturday and Sunday delivery may be available. If weekend delivery is available to your destination, it will be specified on the product page and/or during checkout. Delivery estimates for FREE Prime Two-Day shipments to destinations that don’t have weekend delivery are based on two business day transit times, not including Saturday or Sunday.
                </p>
               </div>
            </div>
        </div>
    </div>
    </div>

  )
}

export default Shipping