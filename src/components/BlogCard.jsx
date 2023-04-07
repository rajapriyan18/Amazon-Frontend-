import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <>
        <div className="blog-card">
            <div className="card-img">
                <img src="images/blog-1.jpg" className='img-fluid w-100' alt="" />
            </div>
            <div className="blog-content">
                <p className='date'>8 Dec,2023</p>
                <h5 className="title">
                    Virtual Reality is now Taking off!
                </h5>
                <p className="desc">You're Only As Good As Your Last Collection, with some Lorem ipsum dolor sit amet. </p>
                <Link to='/blog/:id'className='button'>Read More</Link>
            </div>
        </div>
       
        
    </>
  )
}

export default BlogCard