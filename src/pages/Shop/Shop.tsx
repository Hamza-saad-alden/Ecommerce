import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header"
import Product from "../../components/Product/Product"
import Footer from "../../components/Footer/Footer"
import './Shop.css'

type products = {
    id: number
    brand: string
    description: string
    rate: number
    price: number
    img: string
}

export function Shop() {

  const [products, setProducts] = useState<products[]>([]);
  const [search, setSearch] = useState<string>('');

function getProducts(url:string) {
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
  .then((data) => setProducts(data));
}

  useEffect(() => { 
    getProducts('/data/products.json');
  }, [])


  return (
    <>
      <Header />
      <div className="container pt-5 pb-5">
        <div className="text-center search-bar">
          <input className="p-1 ps-2 rounded-pill" 
          type="text" 
          placeholder="Search by brand"
          onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="row gy-3">
          {products.filter((product) => {
            return product.brand.toLowerCase() == '' ? product : product.brand.toLowerCase().includes(search);
          }).map((product) => {
            return (
              <Product key={product.id} {...product} />
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )

}