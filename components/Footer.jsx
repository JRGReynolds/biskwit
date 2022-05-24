import React from 'react';
import { AiFillInstagram, AiOutlineTwitter}
from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Roz's Biscuit Barkery<br></br> All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
      </div>
  )
}

export default Footer