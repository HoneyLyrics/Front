import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NoDataBlock = styled.div`
  width: 100%;
  height: calc(100vh - 9.0625rem);
  padding-top: 15rem;
  text-align: center;

  a {
    text-decoration: underline;
  }

  a:hover {
    color: #868e96;
  }
`;

const NoData = ({ str }) => {
  return (
    <NoDataBlock>
      <p>{str}</p>
      <br />
      <Link to="/">홈으로</Link>
    </NoDataBlock>
  );
};

export default NoData;
