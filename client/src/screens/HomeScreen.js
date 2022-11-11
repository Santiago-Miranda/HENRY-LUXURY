import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import Filtered from "../components/homeComponents/Filtered";
import { listProduct } from "../Redux/Actions/ProductActions";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import CrearPrice from "../components/homeComponents/CrearPrice";


Modal.setAppElement("#root");

// import FIlterProduct from "./FilterProduct";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  const [order, setOrder] = useState()
  const [category, setCategory] = useState();
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(20000)
  const [price, setPrice] = useState("");
  const [creaPrice, setCreaPrice] = useState(false)
  const [stock, setStock] = useState(1);



  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProduct(order, keyword, pagenumber, category, min, max,stock));
  }, [dispatch, order, keyword, pagenumber, category, min, max,stock]);

  useEffect(() => {
    if (price === "") {
      setMin(0);
      setMax(2000000)
    }
    if (price === "Bajo") {
      setMin(0);
      setMax(500)
    }
    if (price === "Medio") {
      setMin(500);
      setMax(1000)
    }
    if (price === "Alto") {
      setMin(1000);
      setMax(1000000000)
    }
    if (price === "Crear") {
      setCreaPrice(true)
    }
  }, [price])


  console.log(min, max)


  return (
    <div>
      <Header />
      <Filtered setOrder={setOrder} stock={stock} setStock={setStock} price={price} setPrice={setPrice} setMin={setMin} setMax={setMax} setCategory={setCategory} products={products} />

      <ShopSection keyword={keyword} loading={loading} error={error} products={products} page={page} pages={pages} pagenumber={pagenumber} />
      <CalltoActionSection />
      <ContactInfo />
      <Footer />
      <Modal
        isOpen={creaPrice}
        onRequestClose={() => setCreaPrice(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-box",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <CrearPrice setMin={setMin} setMax={setMax} setCreaPrice={setCreaPrice}/>

      </Modal>
    </div>
  );
};

export default HomeScreen;
