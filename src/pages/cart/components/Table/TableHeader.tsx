import { useEffect, useState } from "react";
import Product from "../../../../components/Product/Product";
import { useShoppingCart } from "../../../../context/ShoppingContext";
import { Table } from "./Table";
import './TableHeader.css'
import { Header } from "../Header/Header";
import { FormatCurrancy } from "../../../../utilities/FormatCurrancy";

type products = {
  id: number
  brand: string
  description: string
  details: string
  rate: number
  price: number
  img: string
}

export const TableHeader = () => {


  const { getCartITems } = useShoppingCart();
  const cartItems = getCartITems();
  const [products, setProudcts] = useState<products[]>([]);

  function fetchData(url: string) {
    fetch(url, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => {
        setProudcts(data);
      })
  }

  function getTotalPrice(): number {
    return cartItems.reduce((total, item) => {
      const product = products.find((product) => product.id === item.id);
      return total + ((product?.price || 0) * item.quantity);
    }, 0
    )
  }

  useEffect(() => {
    fetchData("/data/products.json");
  }, []);


  return (
    <>
      <table width={"100%"}>
        <thead>
          <tr>
            <td>Remove</td>
            <td>Image</td>
            <td>Product</td>
            <td>Price</td>
            <td>Quantity</td>
            <td>Subtotal</td>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item) => {
              return (
                <Table {...item} />
              )
            })
          }
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            {cartItems.length > 0 && <td>Total Price = {FormatCurrancy(getTotalPrice())}</td>}
          </tr>
        </tbody>
      </table>
      <div className="d-flex justify-content-center ">{cartItems.length == 0 &&<h3> <span style={{color:"#088178"}}>Cart</span> is Empty</h3>}</div>
    </>
  )
}