import React from 'react';
import Columnas from './Columnas/Columnas'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <Columnas />
        <p className='text-light text-center fs-5'>&copy; 2022 Pelimania.com</p>
    </div>
  )
}

export default Footer