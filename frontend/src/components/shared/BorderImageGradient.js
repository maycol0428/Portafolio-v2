import { Avatar } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { color } from "../../utils/style/Colors";

const BorderImageGradient = ({ img, width = 90, height = 90 }) => {
  return (
    <Styled>
      <Avatar src={img} sx={{ width: 150, height: 150 }}></Avatar>
    </Styled>
  );
};

export default BorderImageGradient;
const Styled = styled.div`
  position: relative;
  :after {
    display: block;
    border-radius: 50%;
    content: "";
    width: 108%;
    height: 108%;
    position: absolute;

    left: -4%;
    top: -4%;
    background-image: conic-gradient(
      ${color.PuertoRico},
      black,
      ${color.PuertoRico},
      black,
      ${color.PuertoRico},
      black,
      ${color.PuertoRico}
    );
    animation: spin 30s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
  img {
    cursor: pointer;
    border-radius: 50%;
    z-index: 1;
    object-fit: cover;
    object-position: top;
    background: black;
    border: 3px solid ${color.Bunker};
  }
`;
