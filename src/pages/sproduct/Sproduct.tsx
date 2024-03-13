import { ChangeEvent, useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { FormatCurrancy } from "../../utilities/FormatCurrancy"
import "./Sproduct.css"
import { useShoppingCart } from "../../context/ShoppingContext"

type products = {
  id: number
  brand: string
  description: string
  details: string
  rate: number
  price: number
  img: string
}


export function Sproduct() {

  const [products, setProducts] = useState<products[]>([]);
  const { id } = useParams();
  const [mainProduct, setMainProduct] = useState<products>({} as products);
  const [quantity, setQuantity] = useState(0);

  const navigate = useNavigate();

  const { reducerTrigger } = useShoppingCart();


  function getData(url: string) {
    fetch(url, {
      headers: {
        'content-type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((response) => response.json())
      .then((data) => {
        setProducts(data);
        return data;
      }).then(products => {
        if (id) {
          let p = products.filter((product: { id: number }) => product.id === Number(id))
          setMainProduct(p[0]);
        }
      })
  }

  function changeId(ind: number) {
    let p = products.filter((product: { id: number }) => product.id === ind);
    setMainProduct(p[0]);
    navigate(`/product/${p[0].id}`);
  }

  function changeQuantity(e: ChangeEvent<HTMLInputElement>) {
    setQuantity(Number(e.target.value));
  }

  function prevProduct() {
    if (mainProduct.id !== undefined) {
      if (mainProduct.id === 0) {
        return;
      } else if (mainProduct.id > 0) {
        return changeId(mainProduct.id - 1);
      }
    }
  }

  function nextProduct() {
    console.log(mainProduct.id);
    if (mainProduct.id !== undefined) {
      if (mainProduct.id < products.length - 1) {
        return changeId(mainProduct.id + 1);
      }
    }
  }

  useEffect(() => {
    getData('/data/products.json');
  }, [])

  return (
    <>
      <div className="container mt-3">
        <div className="row" style={{ height: "calc(100vh-80px)" }}>
          <div className="col-4">
            <div className="main-product">
              <div className="">
                {
                  <img className="img-fluid" src={mainProduct.img} alt={mainProduct.description} />
                }
              </div>
            </div>
            <div className="products mt-2">
              <button className="d-flex jusitify-content-center align-items-center btn btn-success"
                style={{ position: "absolute", bottom: "19%", left: "4.7%" }}
                onClick={() => prevProduct()}
              >{"<"}</button>
              <div className="d-flex justify-content-around align-items-center">
                {products.map((product: products, ind: number) => {
                  if (ind > mainProduct.id && ind < mainProduct.id + 5)
                    return (
                      <>
                        <Link key={ind} to={`/product/${ind}`} onClick={() => changeId(ind)}>
                          <img className="img-fluid" src={product.img} alt={product.description} />
                        </Link>
                      </>
                    )
                })}
              </div>
            </div>
            <button className="d-flex jusitify-content-center align-items-center btn btn-success"
              style={{ position: "absolute", bottom: "19%", right: "62%" }}
              onClick={() => nextProduct()}
            >{">"}</button>
          </div>
          <div className="col-5 ms-5">
            <div className="mt-4">
              <h2 className="mb-4">{mainProduct.description}</h2>
              <h4 className="mb-4 fw-bold">{FormatCurrancy(mainProduct.price)}</h4>
              <div className="mb-4">
                <input className="me-4 " type="number" min={0} style={{ width: "10%" }} onChange={changeQuantity} />
                <button className="quantity-btn" onClick={() => reducerTrigger({ id: mainProduct.id, type: "incWithQuantity", quantity: quantity })}>Add To Cart</button>
              </div> 
              <h2 className="mt-5">Product Details </h2>
              <p className="mt-4">{mainProduct.details}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}