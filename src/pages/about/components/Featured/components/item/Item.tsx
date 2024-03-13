import img1 from "../../../../../../assets/imgs/features/f1.png"
import img2 from "../../../../../../assets/imgs/features/f2.png"
import img3 from "../../../../../../assets/imgs/features/f3.png"
import img4 from "../../../../../../assets/imgs/features/f4.png"
import img5 from "../../../../../../assets/imgs/features/f5.png"
import img6 from "../../../../../../assets/imgs/features/f6.png"

import "./Item.css"


export function Item() {

  const items = [
    {
      id: 0,
      img: img1,
      text: "Free Shipping"
    },
    {
      id: 1,
      img: img2,
      text: "Online Order"
    },
    {
      id: 2,
      img: img3,
      text: "Save Money"
    },
    {
      id: 3,
      img: img4,
      text: "Promotions"
    },
    {
      id: 4,
      img: img5,
      text: "Happy Sell"
    },
    {
      id: 5,
      img: img6,
      text: "F24/7 Support"
    },

  ];

  return (
    <>
      <div className="featured pt-5 pb-5">
        <div className="container">
          <div className="row text-center justify-content-center">
            {
              items.map((item) => (
                <div key={item.id} className="col-xl-2 col-lg-4 col-md-6">
                  <img className="img-fluid" src={item.img} />
                  <p>{item.text}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}