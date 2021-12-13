import React, { useEffect, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import { FilePdf } from "@styled-icons/boxicons-solid";
import { Button } from "../utils/style/GlobalStyled";
import { color } from "../utils/style/Colors";
import { size } from "../utils/style/FontSize";
import { device, deviceMinWidth, devicePx } from "../utils/style/BreakPoints";
import AnimationCode from "../animations/code.json";
import PDFcv from "../files/cv.pdf";
import UnderLine from "./shared/Underline";
const Welcome = () => {
  const [hoverButtonPFG, setHoverButtonPFG] = useState(false);

  return (
    <>
      <PlayerContainer>
        <Player autoplay loop src={AnimationCode} style={{ height: "300px", width: "300px" }}></Player>
      </PlayerContainer>
      <Container>
        <RowCalc>
          <h1>Maycol Christian EM.</h1>
        </RowCalc>
        <RowCalc className="segundo">
          <h2>Ingeniero de Sistemas</h2>
        </RowCalc>
        <RowCalc className="tercero">
          <p>
            Soy un ingeniero de sistemas residente en <UnderLine>lima(Peru)</UnderLine> que se especializa en crear y
            algunas veces diseñar aplicaciones <UnderLine>webs</UnderLine> y <UnderLine>mobiles</UnderLine>.
          </p>
        </RowCalc>
      </Container>

      <RowCalc className="cuarto">
        <ButtonOverride
          href={PDFcv}
          target="_blank"
          rel="nofollow noopener noreferrer"
          onMouseEnter={() => setHoverButtonPFG(true)}
          onMouseLeave={() => setHoverButtonPFG(false)}
        >
          <FilePdf className={!hoverButtonPFG || "bx-tada"}></FilePdf>
        </ButtonOverride>
      </RowCalc>
    </>
  );
};

export default Welcome;

const ButtonOverride = styled(Button)`
  width: 100%;
  display: block;
  border-radius: 0 0 50px 0;
  font-size: ${size.xxl};
  padding: clamp(10px, 4vw, 30px) clamp(20px, 8vw, 50px);
  padding: clamp(10px, 4vw, 30px) 0;
  transition: all 0.2s ease;
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
  background-color: black;
  svg {
    height: clamp(60px, 8vw, 70px);
  }
  :hover {
    background-color: ${color.PuertoRico};
    color: ${color.Bunker};
  }
`;

const PlayerContainer = styled.div`
  position: relative;
  z-index: 9;
  margin-top: -40px;
`;
const Container = styled.div`
  margin-top: -40px;
`;
const RowCalc = styled.div`
  z-index: 1;
  background-color: ${color.Bunker};
  background: linear-gradient(to bottom, black, black);
  box-shadow: 0px 3px 7px 1px rgba(0, 0, 0, 0.67);
  border: 1px solid black;
  border-radius: 0 0 50px 0;
  position: relative;
  width: 100vw;
  left: 50%;
  transform: translateX(-50%);
  margin-right: 20px;
  margin-bottom: clamp(5px, 3vw, 30px);
  &.segundo {
    width: 85vw;
    transform: translateX(calc(-50% + (-15vw / 2)));
  }
  &.tercero {
    width: 70vw;
    transform: translateX(calc(-50% + (-30vw / 2)));
  }
  &.cuarto {
    width: 55vw;
    transform: translateX(calc(-50% + (-45vw / 2)));
    -webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.4));
  }

  h1 {
    padding: 20px;
    padding-top: 30px;
    color: ${color.MoonRaker};
    font-weight: 900;
    font-family: "Lato";
    font-size: clamp(18px, 6.5vw, ${size.heading64});
  }
  h2 {
    padding: 20px;
    color: ${color.RockBlue};
    font-family: "Lato";
    font-weight: 900;
    font-size: clamp(15px, 6vw, ${size.heading64});
    font-size: clamp(18px, 6.5vw, ${size.heading64});
  }
  p {
    padding: 20px;
    color: ${color.BaliHai};
    max-width: 500px;
    font-family: "Montserrat";
    font-size: clamp(11px, 4vw, 17px);
    font-weight: 400;
  }
  ${ButtonOverride} {
    padding: 20px;
  }
  @media ${deviceMinWidth.laptop} {
    h1,
    h2,
    p {
      margin-left: calc((100vw - ${devicePx.laptop}) / 2);
    }
    ${ButtonOverride} {
      padding-left: calc((100vw - ${devicePx.laptop}) / 2);
    }
  }
`;
