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
import { getCategories } from "../Redux/Actions/CategoriesActions";
import Bot from "../components/Bot/Bot";


Modal.setAppElement("#root");

// import FIlterProduct from "./FilterProduct";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  const [order, setOrder] = useState("toprated")
  const [category, setCategory] = useState("");
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(20000)
  const [price, setPrice] = useState("default");
  const [creaPrice, setCreaPrice] = useState(false)
  const [stock, setStock] = useState(1);

  const [chatbBot, setChatBot] = useState(false)
  console.log(keyword)



  const dispatch = useDispatch();

  const categorys = useSelector(state => state.allCategories)
  const { categories } = categorys
  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(getCategories());
    if (keyword) {
      dispatch(listProduct(category,  pagenumber ,min, max,stock,order,keyword, ));
    }else{
      dispatch(listProduct(category,  pagenumber ,min, max,stock,order, ));
    }
  }, [dispatch,category, pagenumber, min, max,stock,order, keyword,]);

  useEffect(() => {
    if (price === "default") {
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
  }, [price]);

  const onReset = ()=>{
    setCategory("");
    setPrice("default")
    setStock("");
    setStock(1)
    setOrder("toprated")
  }


  return (
    <div>
      <Header />
      <div className="productosFilter">
      <Filtered onReset={onReset} categorias={categories} setCategory={setCategory} setOrder={setOrder} stock={stock} setStock={setStock} price={price} setPrice={setPrice} setMin={setMin} setMax={setMax}  products={products} />
      
      <ShopSection keyword={keyword} loading={loading} error={error} products={products} page={page} pages={pages} pagenumber={pagenumber} />

      </div>
      {
        chatbBot === true ? <Bot setChatBot={setChatBot}/>: <button onClick={()=>setChatBot(true)} className="boooot">Virtual Assistant</button>
      }
      
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
