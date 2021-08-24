import React from 'react';
import { CgCopyright } from 'react-icons/cg';
import { IoMdOpen } from 'react-icons/io';
import { GoMarkGithub } from 'react-icons/go';
import styled from 'styled-components';
import honey from '../../asset/honey.png';
import developers from '../../asset/developers';

const FooterBlock = styled.div`
  width: 100%;
  height: 5.9375rem;
  margin-top: 3.125rem;
  font-family: 'Noto Serif KR', serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  background: orange;
`;

const CopyRight = styled.div`
  position: absolute;
  left: 20vh;

  @media (max-width: 1280px) {
    left: 10vh;
  }

  @media (max-width: 768px) {
    left: 7vh;
    font-size: 0.875rem;
  }

  @media (max-width: 376px) {
    display: none;
  }
`;

const FooterLogo = styled.div`
  margin: 0 auto;

  img {
    width: 2.25rem;
    padding-top: 0.625rem;
  }
`;

const ContactUs = styled.div`
  position: absolute;
  right: 10vh;

  @media (max-width: 1280px) {
    right: 3vh;
  }

  @media (max-width: 376px) {
    display: none;
  }
`;

const ProjectRepo = styled.div`
  &:hover {
    color: #495057;
  }
`;

const Developers = styled.div`
  a {
    margin-right: 6px;
  }

  a:hover {
    color: #495057;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <CopyRight>
        <CgCopyright />
        <span>2021</span>
        <span>HoneyLyrics</span>
      </CopyRight>
      <FooterLogo>
        <img src={honey} alt="footer-logo" />
      </FooterLogo>
      <ContactUs>
        <ProjectRepo>
          <a
            href="https://github.com/HoneyLyrics"
            target="_blank"
            rel="noreferrer"
          >
            <GoMarkGithub /> &nbsp; Our Repos
          </a>
        </ProjectRepo>
        <Developers>
          {developers.map((developer, index) => (
            <a
              href={developer.repoUrl}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <span>{developer.name}</span>
              <IoMdOpen />
            </a>
          ))}
        </Developers>
      </ContactUs>
    </FooterBlock>
  );
};

export default Footer;
