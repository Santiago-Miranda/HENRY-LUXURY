import React, { useState } from 'react';


const CrearPrice = ({setMin, setMax, setCreaPrice}) => {

    const [minPrice , setMinPrice]= useState();
    const [maxPrice , setMaxPrice]= useState()
    const onClick =(e)=>{
        e.preventDefault()
        setMin(minPrice);
        setMax(maxPrice)
        setCreaPrice(false)
        setMinPrice()
        setMaxPrice()
    }
    return (
        <form className='formmmmm' onSubmit={onClick} onsubmit="event.preventDefault();" role="search">
            <input className='inputttt' value={minPrice} onChange={e => setMinPrice(e.target.value)} type="number" placeholder="$Min" autofocus required />
            <input className='inputttt' value={maxPrice} onChange={e => setMaxPrice(e.target.value)} type="number" placeholder="$Max" autofocus required />
            <button className='' type="submit">Go</button>
        </form>
    );
}

export default CrearPrice;