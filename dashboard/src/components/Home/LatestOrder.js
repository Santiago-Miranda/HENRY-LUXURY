import moment from "moment";
import React from "react";
import { Link } from "react-router-dom";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const LatestOrder = (props) => {
  const { loading, error, orders } = props;
  return (
    <div className="card-body">
      <h4 className="card-title">New orders</h4>
      {loading ? (
        <Loading />
      ) : error ? (
        <Message variant="alert-danger">{error}</Message>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <tbody>
                <tr key={orders._id}>
                    <td>
                      <b>{orders.name}</b>
                    </td>
                    <td>{orders.email}</td>
                    <td>${orders.totalPrice}</td>
                    <td>
                      {orders.isPaid ? (
                        <span className="badge rounded-pill alert-success">
                          Paid At {moment(orders.paidAt).format("MMM Do YY")}
                        </span>
                      ) : (
                        <span className="badge rounded-pill alert-danger">
                          Not Paid
                        </span>
                      )}
                    </td>
                    <td>{moment(orders.createdAt).calendar()}</td>
                    <td className="d-flex justify-content-end align-item-center">
                      <Link to={`/order/${orders._id}`} className="text-success">
                        <i className="fas fa-eye"></i>
                      </Link>
                    </td>
                  </tr>
        
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LatestOrder;
