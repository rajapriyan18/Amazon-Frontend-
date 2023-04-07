import React from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import Container from '../../components/Container';

const Refund = () => {
  return (
    <div>
                 <Meta title={ "Refund Policy"} />
            <BreadCrumb title= "Refund Policy" />
            <Container class1="inform-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="para">
               <h3 className="title">Refund for Pay on Delivery Orders:</h3>
               <p className="desx">For Pay on Delivery orders, refunds will be processed either to your bank account (via National Electronic Funds Transfer (NEFT)) or Amazon account (as Amazon Pay balance).<br/>

If you wish to receive the Pay on Delivery order’s refund to your bank account, you can update the details of the bank account in Your Account section or from the Returns Centre when you are returning an item.<br/>

Note: Refunds cannot be processed to third-party accounts. The name on your Amazon account should match with the name of the bank account holder.</p>
            </div></div>
            <div className="para">
                <h3 className="title">Shipping Cost Refunds</h3>
                <p className="desx">1. For Fulfilled by Amazon and Prime Eligible items, return shipping costs of upto Rs. 100 will be refunded. The cost of gift-wrapping will also be refunded, if any. All such refunds will be issued through cheques. <br/>
Note: If you incur return shipping charges over Rs.100 for returning large and heavy items, you can contact us for an additional refund. For refund of such additional charges, proof of payment, like a courier receipt needs to be submitted. <br/>

2. If you're returning a Seller-Fulfilled item, you can request the seller to reimburse the return shipping charges you incurred. In such cases, a seller might ask you to provide the courier receipt.<br/>
Note: The seller will not refund the shipping cost incurred in case of remorse returns.</p>
            </div>
       
    </Container>

    </div>
  )
}

export default Refund