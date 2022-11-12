import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import { getCategories } from "../../Redux/Actions/CategoriesActions";

const CategoriesTable = () => {

  const {categories} = useSelector(state => state.allCategories);
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
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        {/* Table Data */}
        <tbody>
          {
            categories && categories.map(e => (
              <tr key={e.id}>
                <td>{e._id}</td>
                <td>
                  <b>{e.name}</b>
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
