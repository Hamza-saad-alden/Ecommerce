import Footer from "../../components/Footer/Footer";
import './Cart.css';
import { Header } from "./components/Header/Header";
import { TableHeader } from "./components/Table/TableHeader";

const Cart = () => {

  return (
    <>
        <Header />
      <div className="container pt-5 pb-5">
        <TableHeader />
      </div>
      <Footer />
    </>
  )
}

export default Cart;