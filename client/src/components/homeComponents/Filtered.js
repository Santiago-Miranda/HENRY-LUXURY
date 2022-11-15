import React from "react";
import "./Filtered.scss"

const Filtered = ({onReset,categorias, setOrder, order, price, setPrice, setCategory, category, stock, setStock }) => {

    const onClick=()=>{
        if (stock === 1) {
            setStock(0)
        }else{
            setStock(1)
        }
    }
    return (
        <div className="selectdiv">
            <label class="select">
                <select value={order} onChange={(e) => setOrder(e.target.value)} >
                    <option value="toprated" disabled="disabled" selected="selected">Sort by price</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                </select>
                <svg>
                    <use ></use>
                </svg>
            </label>
            <label class="select" for="slct">
                <select value={category} onChange={(e) => setCategory(e.target.value)} required="required">
                    <option value="" disabled="disabled" selected="selected">Category</option>
                    {
                        categorias.map(e=><option value={e.name}>{e.name}</option>)
                    }
                </select>
                <svg>
                    <use ></use>
                </svg>
            </label>
            <label class="select" for="slct">
                <select value={price} onChange={e => setPrice(e.target.value)} required="required">
                    <option value={"default"} disabled="disabled" selected="selected">Price</option>
                    <option value={"Bajo"}>To $500</option>
                    <option value={"Medio"}>$500 To $1000</option>
                    <option value={"Alto"}>More than $1000</option>
                    <option value={"Crear"}>Custom price</option>

                </select>
                <svg>
                    <use ></use>
                </svg>
            </label>
            <button class="btn-track" onClick={onReset}><div class="--text">Reset</div></button>

            <button  onClick={onClick} class="btn-track">
                {
                    stock === 0 ? <div class="--text">Available</div>:<div class="--text">Not available</div>
                }
                
            </button>

        </div>

    );
};

export default Filtered;