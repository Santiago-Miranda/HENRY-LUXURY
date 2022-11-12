import React, { useEffect } from "react";
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {  remove_Favorites } from "./../Redux/Actions/ProductActions";

const CartFavorite = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
 // const productId = match.params.id;
 // const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  //const cart = useSelector((state) => state.product);
  //console.log(cart)
  //const { favorites } = cart;

  //let history = useHistory();

 
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
 console.log (cart)

  const removefavorite = (e) => {
    dispatch(remove_Favorites(e.target.id));
    return alert("Eliminado de favoritos ")
  };




  //const total = cartItems.reduce((a, i) => a + i.qty * i.price, 0).toFixed(2);

 /* useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);
*/
 /* const checkOutHandler = () => {
    history.push("/login?redirect=shipping");
  };
*/

/*const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };*/
  /*const removeFromCartHandle = (id) => {
    dispatch(removefromcart(id));
  };
   onClick={() => removeFromCartHandle(item.product)}
   onClick={AddToCartHandle}
  */
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="container">
        {cartItems.length === 0 ? (
          <div className=" alert alert-info text-center mt-3">
           Favorites is empty
            <Link to="/"
              className="btn btn-success mx-5 px-5 py-3"
              style={{fontSize: "12px",}}
            >
              SHOPPING NOW
            </Link>
          </div>
        ) : (
          <>
            <div className=" alert alert-info text-center mt-3">
              Total Cart Favorite
              <Link className="text-success mx-2" to="/">
                ({cartItems.length})
              </Link>
            </div>
            {/* cartiterm */}
            {cartItems.map((item) => (
              <div className="cart-iterm row">
                <div
                 
                  className="remove-button d-flex justify-content-center align-items-center"
                  id={item.id} onClick={removefavorite}>
                  <i className="fas fa-times"></i>
                </div>
                <div className="cart-image col-md-3">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-text col-md-5 d-flex align-items-center">
                  <Link to={`/products/${item.product}`}>
                    <h4>{item.name}</h4>
                  </Link>
               
                </div>
               
              </div>
            ))}

            <hr />
            <div className="cart-buttons d-flex align-items-center row">
              <Link to="/" className="col-md-6 ">
                <button>Continue To Shopping</button>
              </Link>
                                       
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CartFavorite;
