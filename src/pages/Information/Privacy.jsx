import React from 'react';
import Meta from '../../components/Meta';
import BreadCrumb from '../../components/BreadCrumb';
import Container from '../../components/Container';

const Privacy = () => {
  return (
    <div>         
         <Meta title={ "Privacy Policy"} />
    <BreadCrumb title= "Privacy Policy" />
    <Container class1="inform-wrapper py-5 home-wrapper-2">
            <div className="row">
                <div className="para">
                    <h3 className="title">
                    What Personal Information About Customers Does Amazon Collect?
                    </h3>
                    <p className="desx mb-1">
                    We collect your personal information in order to provide and continually improve our products and services.<br />

Here are the types of personal information we collect:<br/>

<b>Information You Give Us:</b> We receive and store any information you provide in relation to Amazon Services. Click here to see examples of what we collect. You can choose not to provide certain information, but then you might not be able to take advantage of many of our Amazon Services.<br />

<b>Automatic Information:</b> We automatically collect and store certain types of information about your use of Amazon Services, including information about your interaction with content and services available through Amazon Services. Like many websites, we use cookies and other unique identifiers, and we obtain certain types of information when your web browser or device accesses Amazon Services and other content served by or on behalf of Amazon on other websites. Click here to see examples of what we collect.<br/>

<b>Information from Other Sources:</b> We might receive information about you from other sources, such as updated delivery and address information from our carriers, which we use to correct our records and deliver your next purchase more easily. Click here to see additional examples of the information we receive.<br/>
                    </p>
                </div>
                <div className="para">
                    <h3 className="title">For What Purposes Does Amazon Use Your Personal Information?</h3>
                    <p className="desx">We use your personal information to operate, provide, develop, and improve the products and services that we offer our customers.<br/>
                   <b> Recommendations and personalization:</b> We use your personal information to recommend features, products, and services that might be of interest to you, identify your preferences, and personalize your experience with Amazon Services.<br/>
                   <b>Communicate with you:</b> We use your personal information to display interest-based ads for features, products, and services that might be of interest to you. We do not use information that personally identifies you to display interest-based ads. To learn more, please read our Interest-Based Ads notice.<br/>
                 <b>Advertising:</b>  We use personal information to prevent and detect fraud and abuse in order to protect the security of our customers, Amazon, and others. We may also use scoring methods to assess and manage credit risks.</p>
                </div>
                <div className="para">
                    <h3 className="title">Does Amazon Share Your Personal Information?</h3>
                    <p className="desx">Information about our customers is an important part of our business and we are not in the business of selling our customers’ personal information to others. We share customers’ personal information only as described below and with Amazon.com, Inc. and subsidiaries that Amazon.com, Inc. controls that either are subject to this Privacy Notice or follow practices at least as protective as those described in this Privacy Notice.</p>
                </div>
            </div>
     
    </Container>
    </div>
  )
}

export default Privacy