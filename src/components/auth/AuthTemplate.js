import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: beige;
  /* background: url(https://cdn.pixabay.com/photo/2021/05/28/09/47/hexagon-6290360_960_720.jpg); */
  /* background: url(https://cdn.pixabay.com/photo/2021/05/28/09/48/hexagon-6290363_960_720.jpg); */
  /* background: url(https://cdn.pixabay.com/photo/2021/05/28/09/48/hexagon-6290367_960_720.jpg); */
  /* background-size: cover; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  box-shadow: 12px 12px 12px rgb(0 0 0 / 15%);
  padding: 2rem;
  width: 360px;
  background-color: white;
  border-radius: 2px;

  @media (max-width: 375px) {
    width: 300px;
  }
`;

const LogoArea = styled.div`
  display: block;
  padding-bottom: 2rem;
  text-align: center;
  font-weight: bold;
  letter-spacing: 2px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <AuthContainer>
      <WhiteBox>
        <LogoArea>
          <Link to="/">Honey Lyrics</Link>
        </LogoArea>
        {children}
      </WhiteBox>
    </AuthContainer>
  );
};

export default AuthTemplate;
