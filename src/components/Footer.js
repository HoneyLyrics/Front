import React from 'react';
import { CgCopyright } from 'react-icons/cg';
import { AiOutlineGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <CgCopyright />
        <span>2021</span>
        <span>HoneyLyrics</span>
      </div>
      <div className="contact-us">
        <div className="title">📫contact us!</div>
        <div className="developers">
          <span className="profile">👩🏻‍🦰김수현:</span>&nbsp;
          <a
            href="https://github.com/kimSooHyun950921"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <span className="profile">🛫노현우:</span>&nbsp;
          <a
            href="https://github.com/HyeanWoo/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
          <span className="profile">✨신채원:</span>&nbsp;
          <a
            href="https://github.com/chelseashin "
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
