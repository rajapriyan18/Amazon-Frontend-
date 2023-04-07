import React from 'react'
import { Link } from 'react-router-dom';
const BreadCrumb = (props) => {
  const {title} =props;
  return (
    <div className='breadcrumb mt-3 justify-content-center align-items-center '>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 ">
            <p className='dtag'><Link to="/" className=' text-dark'>Home</Link>
            /{title}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb