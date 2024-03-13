import { useShoppingCart } from "../../../../context/ShoppingContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FormatCurrancy } from "../../../../utilities/FormatCurrancy";
import './Table.css';

type cartITems = {
  id: number,
  quantity: number
}

type items = {
  id: number
  brand: string
  description: string
  rate: number
  price: number
  img: string
}


export const Table = ({ id, quantity }: cartITems) => {

  const [items, setItems] = useState<items[]>([]);

  const { reducerTrigger } = useShoppingCart();

  useEffect(() => {
    fetch('/data/products.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => setItems(data));
  }, [])

  const item = items.find((item) => item.id === id);
  if (item == null) {
    return null;
  }
  else {
    return (
      <>
        <tr>
          <td><FontAwesomeIcon className="fs-5 text-danger"
            style={{ cursor: "pointer" }}
            icon={faClose}
            onClick={() => reducerTrigger({ id: id, type: "remove", quantity:0 })}
          /></td>
          <td><img src={item.img} alt={item.description}/></td>
          <td>{item.brand}</td>
          <td>{FormatCurrancy(item.price)}</td>
          <td className="d-flex justify-content-center align-items-center" style={{ paddingTop: "33px" }} >
            <button className="d-flex justify-content-center me-2 align-items-center btn btn-danger"
              style={{ width: "30px", height: "30px" }}
              onClick={() => reducerTrigger({ id: id, type: "decrease", quantity:0 })}
            >-</button>
            {quantity}
            <button className="d-flex justify-content-center ms-2 align-items-center btn btn-success"
              style={{ width: "30px", height: "30px" }}
              onClick={() => reducerTrigger({ id: id, type: "increase", quantity:0 })}
            >+</button></td>
          <td>{FormatCurrancy(quantity * item.price)}</td>
        </tr>
      </>
    )
  }

}

