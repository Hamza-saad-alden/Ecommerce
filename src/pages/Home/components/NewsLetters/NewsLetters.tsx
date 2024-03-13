import './NewsLetters.css'

const NewsLetters = () => {

  return (
    <>
      <div className='news-letters pt-5 pb-5 mt-5 mb-5'>
        <div className='container text-center'>
          <div className='row align-items-center'>
            <div className='col-sm-12 col-md-6'>
              <div className='text'>
                <h4 className='fw-bold text-light text-center'>Sign Up For Newsletters</h4>
                <p className='text-center mt-3'>Get E-mail updates about our latest shop and<span className='text-warning fw-bold'> special offers.</span></p>
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <form>
                <div className='form-group d-felx justify-content-center align-items-center'>
                  <input type='text' className='form-holder p-2 rounded-3' placeholder='Your email address' />
                  <input type='submit' className='text-white fw-bold p-2 rounded-3 border-0' value="Sign Up" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default NewsLetters;