import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import { useShoppingCart } from "../../context/ShoppingContext";

export function NavBar() {

  const links = [
    {
      id: 0,
      path: "/",
      name: "Home",
      active: true
    },
    {
      id: 1,
      path: "/shop",
      name: "Shop",
      active: false
    },
    // {
    //   id: 2,
    //   path: "/blog",
    //   name: "Blog",
    //   active: false
    // },
    {
      id: 3,
      path: "/about",
      name: "About",
      active: false
    },
    // {
    //   id: 4,
    //   path: "/contact",
    //   name: "Contact",
    //   active: false
    // }
  ];

  const {getTotalQuantity} = useShoppingCart();

  const quantity = getTotalQuantity();

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="#"><img className="img-fluid" src={require('../../assets/imgs/logo.png')} /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ms-auto" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto fw-bold mb-2 mb-lg-0">
              {links.map((link) => (
                <li key={link.id} className="nav-item">
                  <NavLink className="nav-link text-dark" to={link.path}>{link.name}</NavLink>
                </li>
              ))}
              <li className="nav-item cart">
              <NavLink className="nav-link text-dark ps-2 " to={"/cart"}><FontAwesomeIcon className="fs-5" icon={faBagShopping} /></NavLink>
              {quantity > 0 && <div className="quantity ">{quantity}</div>}
              </li>
            </ul>
          </div>
        </div >
      </nav>
    </> 
  )

}