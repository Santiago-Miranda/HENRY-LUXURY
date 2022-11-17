import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postCategories } from "../../Redux/Actions/CategoriesActions";

const CreateCategory = () => {

  const [ name, setName ] = useState("");
  const dispatch = useDispatch();

  const onChange = (e)=>{
    setName(e)
    
  }
  console.log(name)

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postCategories(name))
    setName("")
  }


  





  return (
    <div className="col-md-12 col-lg-4">
      <form onSubmit={(e)=> onSubmit(e)}>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e)=> onChange(e.target.value)}
            placeholder="Type here"
            className="form-control py-3"
            id="product_name"
          />
        </div>

        <div className="d-grid">
          <button className="btn btn-primary py-3">Create category</button>
        </div>
        </form>
        <br/>
       
    </div>
  );
};

export default CreateCategory;
