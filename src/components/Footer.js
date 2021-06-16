import React from 'react';
import { CgCopyright } from 'react-icons/cg';
import honey from '../asset/honey.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <CgCopyright />
        <span>2021</span>
        <span>HoneyLyrics</span>
      </div>
      <div className="footer-logo">
        <img src={honey} alt="honeylyrics-logo" />
      </div>
      <div className="developers">
        <span>노현우</span>
        <span>김수현</span>
        <span>신채원</span>
      </div>
    </div>
  );
};

export default Footer;
