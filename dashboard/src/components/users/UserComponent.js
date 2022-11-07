import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listUser, orderMail, OrderName, orderStall } from "../../Redux/Actions/userActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";
import logo from "../logo.png";
import { logout } from "../../Redux/Actions/userActions";
import $ from "jquery";


const UserComponent = () => {
  const dispatch = useDispatch();

  const [disableItem, setDisableItem] = useState(false)
  const [disableCategory, setDisableCategory] = useState(false)
  const [disableStatus, setDisableStatus] = useState(false)
  const [disablePrice, setDisablePrice] = useState(false)
  // const [disableAction, setDisableAction] = useState(false)

  const [order, setOrder] = useState("");
  const [name, setName] = useState("ASCENDENTE");
  const [email, setEmail] = useState("ASCENDENTE");
  const [stall, setStall] = useState("ASCENDENTE");

  const userList = useSelector((state) => state.userList);
  const { loading, error, users } = userList;

  useEffect(() => {
    dispatch(listUser());
  }, [dispatch]);


  const OrderByNames = e => {
    if (name === "ASCENDENTE") {
      e.preventDefault();
      dispatch(OrderName("DESCENDENTE"));
      setOrder(name);
      setName("DESCENDENTE");
    } else {
      e.preventDefault();
      dispatch(OrderName("ASCENDENTE"));
      setOrder(name);
      setName("ASCENDENTE");
    }
  };

  const OrderByStall = e => {
    if (stall === "ASCENDENTE") {
      e.preventDefault();
      dispatch(orderStall("DESCENDENTE"));
      setOrder(stall);
      setStall("DESCENDENTE");
    } else {
      e.preventDefault();
      dispatch(orderStall("ASCENDENTE"));
      setOrder(stall);
      setStall("ASCENDENTE");
    }
  };

  const OrderByEmails = e => {
    if (email === "ASCENDENTE") {
      e.preventDefault();
      dispatch(orderMail("DESCENDENTE"));
      setOrder(email);
      setEmail("DESCENDENTE");
    } else {
      e.preventDefault();
      dispatch(orderMail("ASCENDENTE"));
      setOrder(email);
      setEmail("ASCENDENTE");
    }
  };

  

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

  console.log(users)

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Customers</h2>
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
        <header className="card-header ">
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
                    <button onClick={() => {
                      if (disableItem === false) {
                        setDisableItem(true)
                      } else {
                        setDisableItem(false)

                      }
                    }} className="dropdown-item" to="/">
                      Customers
                    </button>
                    <button onClick={() => {
                      if (disableCategory === false) {
                        setDisableCategory(true)
                      } else {
                        setDisableCategory(false)

                      }
                    }} className="dropdown-item" to="/">
                      Email
                    </button>
                    
                    {/* <button onClick={() => {
                      if (disableStatus === false) {
                        setDisableStatus(true)
                      } else {
                        setDisableStatus(false)

                      }
                    }} className="dropdown-item" to="/">
                      Status
                    </button> */}
                    <button onClick={() => {
                      if (disablePrice === false) {
                        setDisablePrice(true)
                      } else {
                        setDisablePrice(false)

                      }
                    }} className="dropdown-item" to="/">
                      Market Stall
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </header>

        <div className="card-body">

          <div class="products-area-wrapper tableView">
            <div class="products-header">
              {
                disableItem === false ? <div class="product-cell image">
                  Customers
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
                  Email
                  <button onClick={OrderByEmails} class="sort-button">
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
              {/* {
                disableStatus === false ? <div class="product-cell status-cell">
                  Status
                  <button class="sort-button">
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
              } */}
              {
                disablePrice === false ? <div class="product-cell price">
                  Market Stall
                  <button onClick={OrderByStall} class="sort-button">
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
              {/* {
              disableAction === false ? <div class="product-cell sales">Action</div>: null
            }   */}

            </div>
            {users &&
              users.map(e => (
                <div key={e._id} class="products-row">
                  {
                    disableItem === false ? <div class="product-cell image">
                      <img className="imagen_prduct" src={logo} alt="product" />
                      <span>{e.name}</span>
                    </div> : null
                  }
                  {
                    disableCategory === false ? <div class="product-cell category">
                      <span class="cell-label">email:</span>
                      {e.email}
                    </div> : null
                  }
                  {/* {
                    disableStatus === false ? <div className="product-cell status-cell">
                      <span className="cell-label">Status:</span>
                      {
                        e.isBaned === "false" ? <span className="status active">Active</span> : <span className="status disabled">Disabled</span>
                      }
                    </div> : null
                  } */}
                  {
                    disablePrice === false ? <div className="product-cell status-cell">
                      <span className="cell-label">Market Stall:</span>
                      {
                        e.isAdmin && e.isAdmin === true ? <span className="status active">Admin</span> : <span className="status disabled">User</span>
                      }
                    </div> : null
                  }
                  {/* {
                  disablePrice === false ?  <div class="product-cell price">
                  <span class="cell-label">Price:</span>${e.price}
                </div>:null
                } */}
                  {/* {
                  disableAction === false ? <td class="product-cell py-4 whitespace-no-wrap text-sm leading-5">
                 
                </td>:null
                } */}

                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserComponent;
