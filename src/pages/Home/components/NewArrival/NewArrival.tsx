import { useEffect, useState } from "react";
import { SeactionHeader } from "../SeactionHeader/SeactionHeader";
import Product from "../../../../components/Product/Product";

type products = {
  id: number
  brand: string
  description: string
  rate: number
  price: number
  img: string
}


const NewArrival = () => {

  const [products, setProducts] = useState<products[]>([]);

  function getData(url: string) {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getData('/data/newArrival.json');
  }, [])


  return (
    <>
      <div className="new-arrival container pt-5 pb-5">
        <SeactionHeader header="New Arrivals" paragraph="Summer Collection New Modern Design" />
        <div className="row container gy-4">
          {products.map((product) => {
            return (
              <Product key={product.id} {...product} />
            );
          })}
        </div>
      </div>
    </>
  );

}

export default NewArrival;