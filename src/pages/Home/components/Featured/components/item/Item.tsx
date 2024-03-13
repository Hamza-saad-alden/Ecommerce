import { useEffect, useRef } from "react"
import img1 from "../../../../../../assets/imgs/features/f1.png"
import img2 from "../../../../../../assets/imgs/features/f2.png"
import img3 from "../../../../../../assets/imgs/features/f3.png"
import img4 from "../../../../../../assets/imgs/features/f4.png"
import img5 from "../../../../../../assets/imgs/features/f5.png"
import img6 from "../../../../../../assets/imgs/features/f6.png"

import "./Item.css"
import { delay, motion, useAnimation, useInView } from "framer-motion"


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

  const ref = useRef(null);
  const isInView = useInView(ref)
  const itemControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      itemControl.start("visible")
    }
  }, [isInView])

  return (
    <>
      <div className="featured pt-5 pb-5" style={{overflow: "hidden"}}>
        <motion.div
          ref={ref}
          className="container"
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate={itemControl}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
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
        </motion.div>
      </div>
    </>
  )
}