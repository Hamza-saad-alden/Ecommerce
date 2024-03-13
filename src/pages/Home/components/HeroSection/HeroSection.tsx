import { motion, useAnimation, useInView } from "framer-motion";
import "./HeroSection.css"
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function HeroSection() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation()


  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView])


  return (
    <>
      <div className="hero d-flex justify-content-center align-items-start flex-column">
        <motion.div
          ref={ref}
          className="ps-2"
          variants={{
            hidden: { opacity: 0, x: -200 },
            visible: { opacity: 1, x: 0 }
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h3 className="pb-2 fw-normal">Trade-in-offer</h3>
          <h2 className="fw-bold fs-1">Supre value deals</h2>
          <h1 className="fw-bold">On all Products</h1>
          <p>Save more with coupons & up to 70% off!</p>
          <button className="btn"><Link className="btn fw-bold" to={"/shop"}>Shop Now</Link></button>
        </motion.div>
      </div>
    </>
  );
}