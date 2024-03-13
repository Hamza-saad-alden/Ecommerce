import './BottomBanner.css'


const BottomBanner = () => {

  return (
    <>
      <div className="bottom-banner pt-5 pb-5 container">
        <div className="row gy-4">
          <div className="col-lg-12 col-xl-6 col first">
            <div className='content'>
              <h4 className='text-white fw-bold'>crazy deals</h4>
              <h2 className='text-white fw-bold'>buy 1 get 1 free</h2>
              <span className='text-white fw-bold'>The best classic dress is on sale at cara</span>
              <button className='d-block mt-3 btn fw-bold text-light'>Learn More </button>
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col second">
            <div className='content'>
              <h4 className='text-white fw-bold'>crazy deals</h4>
              <h2 className='text-white fw-bold'>buy 1 get 1 free</h2>
              <span className='text-white fw-bold'>The best classic dress is on sale at cara</span>
              <button className='d-block mt-3 btn fw-bold text-light'>Learn More </button>
            </div>
          </div>
        </div>
        <div className="row mt-4 second">
          <div className='col-md-12 col-lg-6 col-xl-4'>
            <div className='content first'>
              <h2 className='fw-bold text-light text-uppercase mb-3'>seasonal sale</h2>
              <p className='fw-bold text-danger text-uppercase'>Winter Collaction -50% OFF</p>
            </div>
          </div>
          <div className='col-md-12 col-lg-6 col-xl-4'>
            <div className='content second '>
            <h2 className='fw-bold text-light text-uppercase mb-3'>seasonal sale</h2>
              <p className='fw-bold text-danger text-uppercase'>Winter Collaction -50% OFF</p>
            </div>
          </div>
          <div className='col-md-12 col-lg-6 col-xl-4'>
            <div className='content third'>
            <h2 className='fw-bold text-light text-uppercase mb-3'>seasonal sale</h2>
              <p className='fw-bold text-danger text-uppercase'>Winter Collaction -50% OFF</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default BottomBanner;