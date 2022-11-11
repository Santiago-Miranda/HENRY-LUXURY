import React from "react";
import "./Filtered.scss"

const Filtered = ({ setOrder, price, setPrice, setCategory, stock, setStock }) => {


    console.log(price)

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
                <select onChange={(e) => setOrder(e.target.value)} >
                    <option value="" disabled="disabled" selected="selected">Sort by price</option>
                    <option value="lowest">lowest</option>
                    <option value="highest">highest</option>
                    <option value="toprated">toprated</option>
                </select>
                <svg>
                    <use ></use>
                </svg>
            </label>
            <label class="select" for="slct">
                <select onChange={(e) => setCategory(e.target.value)} required="required">
                    <option value="" disabled="disabled" selected="selected">Category</option>
                    <option value="Phone">Phone</option>
                    <option value="Antique">Antique</option>
                    <option value="Collectable">Collectable</option>
                    <option value="Motorbike">Motorbike</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Jewerly">Jewerly</option>
                    <option value="Brand clothing">Brand clothing</option>
                    <option value="Watches">Watches</option>
                </select>
                <svg>
                    <use ></use>
                </svg>
            </label>
            <label class="select" for="slct">
                <select onChange={e => setPrice(e.target.value)} required="required">
                    <option value="" disabled="disabled" selected="selected">Price</option>
                    <option value={"Bajo"}>To $500</option>
                    <option value={"Medio"}>$500 To $1000</option>
                    <option value={"Alto"}>More of $1000</option>
                    <option value={"Crear"}>Custom price</option>

                </select>
                <svg>
                    <use ></use>
                </svg>
            </label>

            <button onClick={onClick} class="btn-track">
                {
                    stock === 0 ? <div class="--text">Available</div>:<div class="--text">Not available</div>
                }
                
            </button>

        </div>

    );
};

export default Filtered;