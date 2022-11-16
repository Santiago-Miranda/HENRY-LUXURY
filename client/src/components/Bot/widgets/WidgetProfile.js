import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import estilo from '../Bot.module.css'

const WidgetProfile = () => {
    const navigate=useHistory();

    const handleClick = () =>{
      navigate.push('/profile')

    }

  return (
    <div className={estilo.buttonContainer}>
      <button className={estilo.button} onClick={handleClick}>go to my profile</button>
    </div>
  );
};

export default WidgetProfile;