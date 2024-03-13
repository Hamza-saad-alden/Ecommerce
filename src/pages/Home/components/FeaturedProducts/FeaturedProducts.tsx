import { useEffect, useState } from "react";
import Star from "../../../../components/Product/components/Star";
import { SeactionHeader } from "../SeactionHeader/SeactionHeader";
import Product from "../../../../components/Product/Product";
import { Link } from "react-router-dom";

type products = {
  id: number
  brand: string
  description: string
  rate: number
  price: number
  img: string
}

export const FeaturedProducts = () => {

  const [product, setProduct] = useState<products[]>([]);

  const fetchProducts = (url: string) => {
    fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => { setProduct(data); });
  }

  useEffect(() => {
    fetchProducts('/data/featured.json');
  }, []);


  return (
    <>
      <div className="featured-products container pt-5 pb-5">
        <SeactionHeader header="Featured Products" paragraph="Summer Collection New Modern Design" />
        <div className="row container gy-4">
          {product.map((item) => {
            return (
                <Product key={item.id} {...item} />
            );
          })}
        </div>
      </div>
    </>
  );

}