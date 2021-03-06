import React from "react";
import styled, { keyframes } from "styled-components";
import { color } from "../../utils/style/Colors";

const Underline = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Underline;
const underline = keyframes`
  from {    
   width:0%;
  }

  to {
   width:100%;
  }
`;
const Container = styled.span`
  white-space: nowrap;
  position: relative;
  text-align: center;
  margin-bottom: 20px;
  color: ${color.PuertoRico};
  cursor: pointer;
  &:hover::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    opacity: 0.5;
    background-color: ${color.PuertoRico};
    animation: ${underline} 0.5s both;
  }
`;
