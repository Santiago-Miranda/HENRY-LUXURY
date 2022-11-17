import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
//import { Link } from "react-router-dom";
import { getCategories,deleteCategories } from "../../Redux/Actions/CategoriesActions";

const CategoriesTable = () => {

  const {categories} = useSelector(state => state.allCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  console.log(categories)

  const deleteCategory = (e) => {
    e.preventDefault();
    console.log(e.target.value)
    dispatch(deleteCategories(e.target.value))
    alert("Delete Category correcty")
   
  }



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
                <button
 type="button" class="btn btn-outline-secondary"

                 value={e.id}
                  onClick={deleteCategory}
          
          
                     >Delete category</button>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
