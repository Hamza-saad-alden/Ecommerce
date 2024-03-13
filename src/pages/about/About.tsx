import Marquee from "react-fast-marquee";
import { Banner } from "./components/Banner/Banner";
import { Featured } from "./components/Featured/Featured";
import Footer from "../../components/Footer/Footer";

export function About() {
  return (
    <>
      <Banner />
      <div className="container">
        <div className="row pt-5 pb-5 align-items-center">
          <div className="col-xl-6 col">
            <img className="img-fluid" src={require("../../assets/imgs/about/a6.jpg")} />
          </div>
          <div className="col-xl-6 col">
            <h2>Who We Are?</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit tenetur consectetur exercitationem aliquam minima iusto
              cumque laboriosam, omnis dicta et ratione perspiciatis
              ducimus molestiae nesciunt. Mollitia tenetur nisi corporis!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eligendi recusandae corrupti at deleniti nam, alias eveniet
              culpa minima enim fugiat similique libero porro tempore. Doloremque accusamus cupiditate harum soluta?
            </p>
            <abbr title=""> Create Stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes </abbr>
            <br />
            <br />
            <Marquee style={{ background: "#ccc" }} speed={100}>
              Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes.
            </Marquee>
          </div>

          <div className="app pt-5 pb-5 text-center">
            <h1>Mobile App Will Be Realeased Soon</h1>
            <div className="video">
              <video autoPlay muted loop style={{ width: "70%", height: "100%" }} className="img-fluid mt-3 rounded-4" src={require("../../assets/imgs/about/1.mp4")}></video>
            </div>
          </div>
        </div>
        <Featured />
        <Footer />
      </div>
    </>
  )
}