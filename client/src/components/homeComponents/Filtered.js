import React from "react";
import "./Filtered.scss"

const Filtered = ({ onReset, categorias, setOrder, order, price, setPrice, setCategory, category, stock, setStock }) => {

    const onClick = () => {
        if (stock === 1) {
            setStock(0)
        } else {
            setStock(1)
        }
    }
    return (
        <div className="filtereds">

            <div className="filtered2">

                <input type="checkbox" id="ham-menu" />
                <label className="label_filtered" for="ham-menu">
                    <div class="hide-des">
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                        <span class="menu-line"></span>
                    </div>

                </label>
                <div class="full-page-green"></div>
                <div class="ham-menu">
                    <ul class="centre-text bold-text">
                        <label class="select">
                            <select value={order} onChange={(e) => setOrder(e.target.value)} >
                                <option value="toprated" disabled="disabled" selected="selected">By price</option>
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
                                    categorias.map(e => <option value={e._id}>{e.name}</option>)
                                }
                            </select>
                            <svg>
                                <use ></use>
                            </svg>
                        </label>
                        <label class="select" for="slct">
                            <select value={price} onChange={e => setPrice(e.target.value)} required="required">
                                <option value={"default"} disabled="disabled" selected="selected">Price</option>
                                <option value={"Bajo"}>- $500</option>
                                <option value={"Medio"}>- $1000</option>
                                <option value={"Alto"}>+ $1000</option>
                                <option value={"Crear"}>Customize</option>
                            </select>
                            <svg>
                                <use ></use>
                            </svg>
                        </label>

                        <button class="btn-track" onClick={onReset}><div class="--text">Reset</div></button>

                        <button onClick={onClick} class="btn-track">
                            {
                                stock === 0 ? <div class="--text">Stock</div> : <div class="--text">Not stock</div>
                            }

                        </button>

                    </ul>
                </div>

            </div>

            <div className="selectdiv">
                <label class="select">
                    <select value={order} onChange={(e) => setOrder(e.target.value)} >
                        <option value="toprated" disabled="disabled" selected="selected">By price</option>
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
                            categorias.map(e => <option value={e._id}>{e.name}</option>)
                        }
                    </select>
                    <svg>
                        <use ></use>
                    </svg>
                </label>
                <label class="select" for="slct">
                    <select value={price} onChange={e => setPrice(e.target.value)} required="required">
                        <option value={"default"} disabled="disabled" selected="selected">Price</option>
                        <option value={"Bajo"}>- $500</option>
                        <option value={"Medio"}>- $1000</option>
                        <option value={"Alto"}>+ $1000</option>
                        <option value={"Crear"}>Customize</option>
                    </select>
                    <svg>
                        <use ></use>
                    </svg>
                </label>

                <button class="btn-track" onClick={onReset}><div class="--text">Reset</div></button>
            </div>
        </div>

    );
};

export default Filtered;