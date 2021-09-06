import React from 'react';
import styled from 'styled-components';

const LoadingWrapperBlock = styled.div`
  width: 100%;
  height: calc(100vh - 9.0625rem);
`;

const LoadingWrapper = ({ children, ...props }) => {
  return <LoadingWrapperBlock {...props}>{children}</LoadingWrapperBlock>;
};

export default LoadingWrapper;
