import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Star from "./components/Star";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormatCurrancy } from '../../utilities/FormatCurrancy';
import './Product.css';
import { useShoppingCart } from '../../context/ShoppingContext';
import { Link } from 'react-router-dom';

type productProp = {
  id: number
  brand: string
  description: string
  rate: number
  price: number
  img: string
}

const Product = ({ id, brand, description, rate, price, img }: productProp) => {

  const { reducerTrigger } = useShoppingCart();

  return (
    <>
      <div className="products col-xl-3 col-lg-4 col-md-6 rounded">
        <div className='product p-2 rounded'>
          <Link to={`/product/${id}`} className='link-dark link-offset-2 link-underline-opacity-0'>
            <img className='img-fluid rounded' src={img} />
            <div className="brand mt-3">
              {brand}
            </div>
            <h5 className="mt-2 text-black">{description}</h5>
          </Link>
          <Star />
          <div className="d-flex pb-2 ps-1 pe-1 justify-content-between align-items-center">
            <div className="price fw-bold fs-5">{FormatCurrancy(price)}</div>
            <FontAwesomeIcon className="icon rounded-circle p-2 fs-4" icon={faCartShopping} onClick={() => reducerTrigger({ id: id, type: "increase", quantity: 0 })} />
          </div>
        </div>
      </div >
    </>
  );
}

export default Product;