import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const ShopSection = (props) => {
  const { keyword,  loading, error, products, page, pages } = props;
  console.log(props.product)

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row mt-20">
            <div className="col-lg-12 col-md-20 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-4 col-md-6 col-sm-10"
                        key={product._id}
                      >
                        <div className="shadow p-3 bg-white rounded">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>
                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} reviews`}
                            />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
