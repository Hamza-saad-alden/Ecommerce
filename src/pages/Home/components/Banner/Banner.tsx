import './Banner.css'

const Banner = () => {

  return(
    <>
      <div className="banner text-light text-center">
        <h5 className='mb-4 fw-bold'>Repaier Services</h5>
        <h1>Up to <span className='text-danger fw-bold'>70% Off</span>  -All t-Shirts & Accessories</h1>
        <button className="btn bg-light text-dark rounded-2 fw-bold mt-2">Explore More</button>
      </div>
    </>
  );

}

export default Banner;