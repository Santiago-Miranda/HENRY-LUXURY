import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import estilo from '../Bot.module.css'

const WidgetCart = () => {
    const navigate=useHistory();

    const handleClick = () =>{
      navigate.push('/cart')

    }

  return (
    <div className={estilo.buttonContainer}>
      <button className={estilo.button} onClick={handleClick}>go to cart</button>
    </div>
  );
};

export default WidgetCart;