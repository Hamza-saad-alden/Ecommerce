import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <>
      <div className='footer pb-5'>
        <div className="container">
          <div className="row gy-5">
            <div className="col-md-6 col-lg-4 lh-lg">
              <h1 className="img-fluid mb-3"><img src={require('../../assets/imgs/logo.png')} alt="" /></h1>
              <h5 className="fw-bold mb-3">Contact</h5>
              <p><strong>Address:</strong> 562 Wellington Road, Street 32, San Francisco</p>
              <p><strong>Phone:</strong> +01 2222 365 / (+91) 01 2345 6789</p>
              <p><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>
              <div className="follow-us">
                <h4>Follow us</h4>
                <ul className="list-unstyled d-flex gap-3 mt-3">
                  <FontAwesomeIcon className='facebook text-light fs-5 p-2 rounded-circle' icon={faFacebook} />
                  <FontAwesomeIcon className='instagram text-light fs-5 p-2 rounded-circle' icon={faInstagram} />
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="about">
                <h4>About</h4>
                <ul className="list-unstyled lh-lg">
                  <li><a className="text-black text-decoration-none" href="#">About us</a></li>
                  <li><a className="text-black text-decoration-none" href="#">Delivery Information</a></li>
                  <li><a className="text-black text-decoration-none" href="#">privacy Policy</a></li>
                  <li><a className="text-black text-decoration-none" href="#">Terms &amp; Conditions</a></li>
                  <li><a className="text-black text-decoration-none" href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2">
              <div className="about">
                <h4>My Account</h4>
                <ul className="list-unstyled lh-lg">
                  <li><a className="text-black text-decoration-none" href="#">Sign In</a></li>
                  <li><a className="text-black text-decoration-none" href="#">View Cart</a></li>
                  <li><a className="text-black text-decoration-none" href="#">My Wishlist</a></li>
                  <li><a className="text-black text-decoration-none" href="#">Track My Order</a></li>
                  <li><a className="text-black text-decoration-none" href="#">Help</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 lh-lg">
              <h4>Install App</h4>
              <p>From App Store Or Google Play</p>
              <div className="image img-fluid d-flex justify-content-between">
                <img className="rounded-3" src={require('../../assets/imgs/pay/app.jpg')} />
                <img className="rounded-3" src={require('../../assets/imgs/pay/play.jpg')} />
              </div>
              <p className="mt-3">Secured Payment Gateways</p>
              <div className="pay img-fluid">
                <img src={require('../../assets/imgs/pay/pay.png')} />
              </div>
            </div>
          </div>
          <div className="copy-right text-center mt-5">©2024 - Made with <span className="text-danger fs-5">❤</span> By Hamza</div>
        </div>
      </div>
    </>
  );

}

export default Footer;