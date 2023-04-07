import React,{useState} from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';
import Color from '../components/Color';
import Container from '../components/Container';



const OurStore = () => {
  const [grid,setGrid] = useState(4);


  return (
<>
           <Meta title={"Our Store"} />
    <BreadCrumb title="Our Store" />
    <Container class1="store-wrapper home-wrapper-2 py-5">   
      <div className="row">
        <div className="col-3">
          <div className='filter-card mb-3'>
            <h3 className="filter-title">Shop by Categories</h3>
            <ul className='ps-0'>
              <li>Watches</li>
              <li>TV</li>
              <li>Cameras</li>
              <li>Laptops</li>
            </ul>
          </div>
          <div className='filter-card mb-3'>
            <h3 className="filter-title">Filtered By</h3>
            <div>
              <h5 className="sub-title">Availablity</h5>
            <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="" />
                <label className="form-check-label" htmlFor="">
                  In Stock (5)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id=""/>
                <label className="form-check-label" htmlFor="">
                  Out Of Stock (0)
                </label>
              </div>
            </div>

            </div>
            <h5 className="sub-title">Price</h5>
            <div className='d-flex align-items-center gap-10'>
            <div className="form-floating ">
  <input type="email" className="form-control py-1" id="floatingInput" placeholder="from" />
  <label htmlFor="floatingInput">From</label>
</div>
<div className="form-floating ">
  <input type="email" className="form-control py-1" id="floatingInput" placeholder="to" />
  <label htmlFor="floatingInput">To</label>
</div>
            </div>
            <h5 className="sub-title">Colors</h5>
            <div className="d-flex flex-wrap ">
              
              <Color />
            </div>
            <h5 className="sub-title">Size</h5>
            <div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="color-1" />
                <label className="form-check-label" htmlFor="color-1">
                  S (16)
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="color-2" />
                <label className="form-check-label" htmlFor="color-2">
                  M (10)
                </label>
              </div>
            </div>
          </div>
          <div className='filter-card mb-3'>
            <h3 className="filter-title">Product Tags</h3>
            <div className="product-tags d-flex flex-wrap align-items-center gap-10">
              <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Headphones</span>
              <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Laptop</span>
              <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Mobile</span>
              <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Oneplus</span>

            </div>
          </div>
          <div className='filter-card mb-3'>
            <h3 className="filter-title">Random Products</h3>
            <div>
              <div className="random-product d-flex">
                <div className="w-50">
                  <img src="images/headphone.jpg" className='img-fluid' alt="watch" />
                </div>
                <div className="w-50">
                  <h5>Headphone with multi colored with affordable price</h5>
                  <ReactStars
    count={5} size={24} value={4} edit={false}
    activeColor="#ffd700"
  />
  <p className=''> ₹1999/-</p>
                </div>
              </div>
              <div className="random-product d-flex">
                <div className="w-50">
                  <img src="images/headphone.jpg" className='img-fluid' alt="watch" />
                </div>
                <div className="w-50">
                  <h5>Headphone with multi colored with affordable price</h5>
                  <ReactStars
    count={5} size={24} value={4} edit={false}
    activeColor="#ffd700"
  />
  <p className=''> ₹1999/-</p>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div className="col-9">
              <div className="filter-sort-grid mb-4">
               <div className="d-flex justify-content-between align-items-center">
               <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{width:'100px'}}>Sort By:</p>
                 
                 <select name="sort_by" id="facet-filters_sort select_select">
                  <option value="manual">Featured</option>
                  <option value="best-selling" selected='selected'>Best Selling</option>
                  <option value="title-ascending">alphabetically A-Z</option>
                  <option value="title-descending">alphabetically A-Z</option>
                  <option value="price-ascending">Price, low to high</option>
                  <option value="price-descending">Price,high to low</option>
                  <option value="created-ascending">Date, old to new</option>
                  <option value="created-
                  descending">Date, new to old</option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                  
                    <img onClick={()=>{setGrid(3);}} src="images/gr4.svg" className='d-block img-fluid' alt="grid" />
                    <img onClick={()=>{setGrid(4);}} src="images/gr3.svg" className='d-block img-fluid' alt="grid" />
                    <img onClick={()=>{setGrid(6);}} src="images/gr2.svg" className='d-block img-fluid' alt="grid" />
                    <img onClick={()=>{setGrid(12);}} src="images/gr.svg" className='d-block img-fluid' alt="grid" />
                    </div>  
                </div>
               </div>
              </div>
              <div className="product-list pb-5">
                  <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid}/>
                  </div>
              </div>
          </div>
        </div>
     
    </Container>
</>
  )
}

export default OurStore