import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getCategories } from "../../Redux/Actions/CategoriesActions";

const CategoriesTable = () => {

  const categories = useSelector(state => state.allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  console.log(categories)

  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th className="text-end">Action</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {
            categories && categories.map(e => (
              <tr key={e.id}>
                <td>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" />
                  </div>
                </td>
                <td>{e.id}</td>
                <td>
                  <b>{e.name}</b>
                </td>
                <td className="text-end">
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn btn-light"
                    >
                      <i className="fas fa-ellipsis-h"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Edit info
                      </Link>
                      <Link className="dropdown-item text-danger" to="#">
                        Delete
                      </Link>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
