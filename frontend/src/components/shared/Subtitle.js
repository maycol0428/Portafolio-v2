import { Paper } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { color } from "../../utils/style/Colors";
import { size } from "../../utils/style/FontSize";
const Subtitle = ({ title }) => {
  return (
    <Styled>
      <PaperStyled elevation={10}>
        <PaperTop>
          <div>
            <h1>{title}</h1>
          </div>
        </PaperTop>
      </PaperStyled>
    </Styled>
  );
};

export default Subtitle;

const Styled = styled.div`
  && {
    width: 100%;
    background-color: transparent;
  }
`;

const PaperStyled = styled(Paper)`
  && {
    box-shadow: none;
    position: relative;
    background-color: transparent;

    ::before {
      content: "";
      position: absolute;
      height: clamp(4px, 2vw, 20px);
      width: 50%;
      bottom: 0;
      background-color: ${color.PuertoRico};
      border-bottom-right-radius: 50px;
    }
  }
`;

const PaperTop = styled.div`
  display: block;
  div {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    max-width: 1500px;

    h1 {
      width: 100%;
      font-family: "Lato";
      font-weight: 900;
      font-size: clamp(17px, 4vw, ${size.heading});
      color: ${color.MoonRaker};
      padding: 20px;
    }
  }
`;
