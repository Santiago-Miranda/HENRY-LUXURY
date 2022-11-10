import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterByTypesCategory,
  orderCountinStock,
  OrderName,
  orderPrice,
  orderRating,
} from "../Redux/Actions/ProductActions";


import './FilterProduct.css'

const FilterProduct = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  //*Filtrado

  const OrderByNames = (e) => {
    e.preventDefault();
    dispatch(OrderName(e.target.value));
    setOrder(`Ordenado ${e.target.value}`);
  };

  const OrderByRating = (e) => {
    e.preventDefault();
    dispatch(orderRating(e.target.value));
    setOrder("Ordenado por" + e.target.value);
  };

  const orderByPrice = (e) => {
    e.preventDefault();
    dispatch(orderPrice(e.target.value));
    setOrder("Ordenado por" + e.target.value);
  };

  const orderByCountinStock = (e) => {
    e.preventDefault();
    dispatch(orderCountinStock(e.target.value));
    setOrder("Ordenado por" + e.target.value);
  };

  //const allCategory = useSelector(state => state.productCategory);

  const filterCategory = (e) => {
    e.preventDefault();
    dispatch(filterByTypesCategory(e.target.value));
    setOrder("Ordenado por" + e.target.value);
  };

 

return (
    <>

<div>
<nav>
<input type="checkbox" id="menu"/>
  <label for="menu"> ☰ </label>
    <ul>
      <li><a href="#">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={OrderByNames}
        >
          <option disabled selected defaultValue>
            Alphabetical order
          </option>
          <option value="Filtro"> All</option>
          <option value="ASCENDENTE">A-Z</option>
          <option value="DESCENDENTE">Z-A</option>

        </select>
        </a></li>

        <li><a href="#">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={OrderByRating}
        >
          <option disabled selected defaultValue>
            Filter by rating
          </option>
          <option value="max">Max rating</option>
          <option value="min">Min rating</option>
        </select>
        </a></li>


        <li><a href="#">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={orderByPrice}
        >
          <option disabled selected defaultValue>
            Filter by Price
          </option>
          <option value="max">Max Price</option>
          <option value="min">Min Price</option>
        </select>
        </a></li>


        <li><a href="#">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          onChange={orderByCountinStock}
        >
          <option disabled selected defaultValue>
            Filter by CountInStock
          </option>
          <option value="max">Max CountInStock</option>
          <option value="min">Min CountInStock</option>
        </select>
        </a></li>

        <li><a href="#">
        <select onChange={filterCategory}  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          <option disabled selected defaultValue>
            Category
          </option>
          <option value="tipos">all</option>
          <option value="Jewerly">Jewerly</option>
          <option value="Shoes">Shoes</option>
          <option value="Brand clothing">Brand clothing</option>
          <option value="Watches">Watches</option>
          <option value="Clothes">Clothes</option>
          <option value="Antique">Antique</option>
          <option value="Motorbike">Motorbike</option>
          <option value="Vehicle">Vehicle</option>
        
        </select>
        </a></li>

      
      </ul>
      </nav>
      </div>
    </>
  );
};

export default FilterProduct;
