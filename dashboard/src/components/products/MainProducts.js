import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, filterByTypesCategory, listProducts, orderCountinStock, OrderName, orderPrice, orderRating } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import $ from "jquery";
import { logout } from "../../Redux/Actions/userActions";
import logo from "../logo.png"
import "./PrductTable.scss"

const MainProducts = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { error: errorDelete, success: successDelete } = productDelete;

  const [order, setOrder] = useState("");
  const [item, setItem] = useState("ASCENDENTE");
  const [price, setPrice] = useState("min");
  const [stoke, setStoke] = useState("min");
  const [rating, setRating] = useState("min");
  const [category, setCategory] = useState("ASCENDENTE")

  const [disableItem, setDisableItem] = useState(false)
  const [disableCategory, setDisableCategory] = useState(false)
  const [disableStatus, setDisableStatus] = useState(false)
  const [disableStock, setDisableStock] = useState(false)
  const [disablePrice, setDisablePrice] = useState(false)
  const [disableAction, setDisableAction] = useState(false)


  //*Filtrado

  const OrderByNames = e => {
    if (item === "ASCENDENTE") {
      e.preventDefault();
      dispatch(OrderName("DESCENDENTE"));
      setOrder(item);
      setItem("DESCENDENTE");
    } else {
      e.preventDefault();
      dispatch(OrderName("ASCENDENTE"));
      setOrder(item);
      setItem("ASCENDENTE");
    }
  };

  const orderByPrice = e => {
    if (price === "min") {
      e.preventDefault();
      dispatch(orderPrice("max"));
      setOrder(price);
      setPrice("max");
    } else {
      setPrice("min");
      e.preventDefault();
      dispatch(orderPrice("min"));
      setOrder(price);
    }
  };
  const orderByRating = e => {
    if (rating === "min") {
      e.preventDefault();
      dispatch(orderRating("max"));
      setOrder(rating);
      setRating("max");
    } else {
      setRating("min");
      e.preventDefault();
      dispatch(orderRating("min"));
      setOrder(rating);
    }
  };

  const orderByCountinStock = e => {
    if (stoke === "min") {
      e.preventDefault();
      dispatch(orderCountinStock("max"));
      setOrder(stoke);
      setStoke("max");
    } else {
      setStoke("min");
      e.preventDefault();
      dispatch(orderCountinStock("min"));
      setOrder(stoke);
    }
  };

  //const allCategory = useSelector(state => state.productCategory);

  const filterCategory = (e) => {
    if (category === "ASCENDENTE") {
      e.preventDefault();
      dispatch(filterByTypesCategory("DESCENDENTE"));
      setOrder(category);
      setCategory("DESCENDENTE");
    } else {
      e.preventDefault();
      dispatch(filterByTypesCategory("ASCENDENTE"));
      setOrder(category);
      setCategory("ASCENDENTE");
    }
  };

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  useEffect(() => {
    $("[data-trigger]").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      var offcanvas_id = $(this).attr("data-trigger");
      $(offcanvas_id).toggleClass("show");
    });

    $(".btn-aside-minimize").on("click", function () {
      if (window.innerWidth < 768) {
        $("body").removeClass("aside-mini");
        $(".navbar-aside").removeClass("show");
      } else {
        // minimize sidebar on desktop
        $("body").toggleClass("aside-mini");
      }
    });
  }, []);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const deletehandler = (id) => {
    if (window.confirm("Are you sure??")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Products</h2>

        <div>
          <Link to="/addproduct" className="btn btn-primary">
            Create new
          </Link>
        </div>
        <ul className="nav">

          <li className="dropdown nav-item">
            <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
              <img
                className="img-xs rounded-circle"
                src={logo}
                alt="User"
              />
            </Link>
            <div className="dropdown-menu dropdown-menu-end">
              <Link className="dropdown-item" to="/">
                My profile
              </Link>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
              <Link
                onClick={logoutHandler}
                className="dropdown-item text-danger"
                to="#"
              >
                Exit
              </Link>
            </div>
          </li>
        </ul>
      </div>

      <div className="card mb-4 shadow-sm">
        <header className="card-header">
          <div className="row gx-3 py-3">
            <div className="col-lg-2 col-6 col-md-3">
              <ul className="nav">

                <li className="dropdown nav-item">
                  <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-list"
                    >
                      <line x1="8" y1="6" x2="21" y2="6" />
                      <line x1="8" y1="12" x2="21" y2="12" />
                      <line x1="8" y1="18" x2="21" y2="18" />
                      <line x1="3" y1="6" x2="3.01" y2="6" />
                      <line x1="3" y1="12" x2="3.01" y2="12" />
                      <line x1="3" y1="18" x2="3.01" y2="18" />
                    </svg>
                  </Link>
                  <div className="dropdown-menu dropdown-menu-end">
                    <button onClick={()=>{
                      if (disableItem === false) {
                        setDisableItem(true)
                      }else{
                        setDisableItem(false)

                      }
                      }} className="dropdown-item" to="/">
                      Item
                    </button>
                    <button onClick={()=>{
                      if (disableCategory === false) {
                        setDisableCategory(true)
                      }else{
                        setDisableCategory(false)

                      }
                      }} className="dropdown-item" to="/">
                      Category
                    </button>
                    <button onClick={()=>{
                      if (disableStatus === false) {
                        setDisableStatus(true)
                      }else{
                        setDisableStatus(false)

                      }
                      }} className="dropdown-item" to="/">
                      Rating
                    </button>
                    <button onClick={()=>{
                      if (disableStock === false) {
                        setDisableStock(true)
                      }else{
                        setDisableStock(false)

                      }
                      }} className="dropdown-item" to="/">
                      Stock
                    </button>
                    <button onClick={()=>{
                      if (disablePrice === false) {
                        setDisablePrice(true)
                      }else{
                        setDisablePrice(false)

                      }
                      }} className="dropdown-item" to="/">
                      Price
                    </button>
                    <button onClick={()=>{
                      if (disableAction === false) {
                        setDisableAction(true)
                      }else{
                        setDisableAction(false)

                      }
                      }} className="dropdown-item" to="/">
                      Action
                    </button>
                    <button onClick={()=>{
                      if (disableStatus === false) {
                        setDisableStatus(true)
                      }else{
                        setDisableStatus(false)

                      }
                      }} className="dropdown-item" to="/">
                      Rating
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="card-body">
          {errorDelete && (
            <Message variant="alert-danger">{errorDelete}</Message>
          )}
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div class="products-area-wrapper tableView">
              <div class="products-header">
                {
                  disableItem === false ? <div class="product-cell image">
                    Items
                    <button onClick={OrderByNames} class="sort-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                        />
                      </svg>
                    </button>
                  </div> : null
                }
                {
                  disableCategory === false ? <div class="product-cell category">
                    Category
                    <button onClick={filterCategory} class="sort-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                        />
                      </svg>
                    </button>
                  </div> : null
                }
                {
                  disableStatus === false ? <div class="product-cell status-cell">
                    Rating
                    <button onClick={orderByRating} class="sort-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                        />
                      </svg>
                    </button>
                  </div> : null
                }
                {
                  disableStock === false ? <div class="product-cell stock">
                    Stock
                    <button onClick={orderByCountinStock} class="sort-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                        />
                      </svg>
                    </button>
                  </div> : null
                }
                {
                  disablePrice === false ? <div class="product-cell price">
                    Price
                    <button onClick={orderByPrice} class="sort-button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M496.1 138.3L375.7 17.9c-7.9-7.9-20.6-7.9-28.5 0L226.9 138.3c-7.9 7.9-7.9 20.6 0 28.5 7.9 7.9 20.6 7.9 28.5 0l85.7-85.7v352.8c0 11.3 9.1 20.4 20.4 20.4 11.3 0 20.4-9.1 20.4-20.4V81.1l85.7 85.7c7.9 7.9 20.6 7.9 28.5 0 7.9-7.8 7.9-20.6 0-28.5zM287.1 347.2c-7.9-7.9-20.6-7.9-28.5 0l-85.7 85.7V80.1c0-11.3-9.1-20.4-20.4-20.4-11.3 0-20.4 9.1-20.4 20.4v352.8l-85.7-85.7c-7.9-7.9-20.6-7.9-28.5 0-7.9 7.9-7.9 20.6 0 28.5l120.4 120.4c7.9 7.9 20.6 7.9 28.5 0l120.4-120.4c7.8-7.9 7.8-20.7-.1-28.5z"
                        />
                      </svg>
                    </button>
                  </div> : null
                }
                {
                  disableAction === false ? <div class="product-cell sales">Action</div> : null
                }

              </div>
              {products &&
                products?.map(e => (
                  <div key={e._id} class="products-row">
                    {
                      disableItem === false ? <div class="product-cell image">
                        <img className="imagen_prduct" src={e.image} alt="product" />
                        <span>{e.name}</span>
                      </div> : null
                    }
                    {
                      disableCategory === false ? <div class="product-cell category">
                        <span class="cell-label">Category:</span>
                        {e.categories}
                      </div> : null
                    }
                    {
                      disableStatus === false ? <div class="product-cell status-cell">
                        <span class="cell-label">Rating:</span>
                        {e.rating}
                      </div> : null
                    }
                    {
                      disableStock === false ? <div class="product-cell stock">
                        <span class="cell-label">Stock:</span>
                        {e.countInStock}
                      </div> : null
                    }
                    {
                      disablePrice === false ? <div class="product-cell price">
                        <span class="cell-label">Price:</span>${e.price}
                      </div> : null
                    }
                    {
                      disableAction === false ? <td class="product-cell py-4 whitespace-no-wrap text-sm leading-5">
                        <div className="row">
                          <Link
                            to={`/product/${e._id}/edit`}
                            className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
                          >
                            <i className="fas fa-pen"></i>
                          </Link>
                          <Link
                            to="#"
                            onClick={() => deletehandler(e._id)}
                            className="btn btn-sm btn-outline-danger p-2 pb-3 col-md-6"
                          >
                            <i className="fas fa-trash-alt"></i>
                          </Link>
                        </div>
                      </td> : null
                    }

                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MainProducts;
