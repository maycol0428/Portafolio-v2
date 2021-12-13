import { Avatar, Paper } from "@mui/material";
import { Code, CodeAlt } from "@styled-icons/boxicons-regular";
import React from "react";
import styled from "styled-components";
import { color } from "../utils/style/Colors";
import { size } from "../utils/style/FontSize";
import { TitleSection } from "../utils/style/GlobalStyled";
import Subtitle from "./shared/Subtitle";
import Underline from "./shared/Underline";
import yoIMG from "../static/yo.jpg";
import yo2IMG from "../static/yo.jpeg";
import { Fire, Leaf } from "@styled-icons/icomoon";
import BorderImageGradient from "./shared/BorderImageGradient";
const SobreMi = ({ title }) => {
  return (
    <>
      <Subtitle title={title}></Subtitle>
      <Styled>
        <div>
          <StyledBody>
            <StyledLeft>
              <p>
                ¡Hola! Mi nombre es <Underline>Maycol</Underline> y disfruto creando aplicaciones webs y mobiles. Mi
                interés en la programacion es inspiracion al ver grandes personajes como{" "}
                <Underline>Steve Jobs</Underline>. !Escribir y editar codigos para resolver problemas me resulto genial
                y apartir de ahi aprendi todo lo que se. Ciertamente tengo un particular gusto por{" "}
                <Underline>Javascript</Underline> y sus inmensas posibilidades &#128170; &#x1F601;!
              </p>

              <p>Aquí hay algunas tecnologías con las que he trabajado:</p>
              <ul>
                <li>
                  <font>React.js</font>
                </li>
                <li>
                  <font>Javascript</font>
                </li>
                <li>
                  <font>Html</font>
                </li>
                <li>
                  <font>Css</font>
                </li>
                <li>
                  <font>Node.js</font>
                </li>
                <li>
                  <font>
                    Firebase <span>|probando</span>
                  </font>
                </li>
                <li>
                  <font>Mongoose</font>
                </li>
                <li>
                  <font>Socketio</font>
                </li>
                <li>
                  <font>React Native Expo</font>
                </li>
                <li>
                  <font>Express</font>
                </li>
                <li>
                  <font>
                    Nextjs <span>|probando</span>
                  </font>
                </li>
                <li>
                  <font>Styled Components</font>
                </li>
                <li>
                  <font>Mui</font>
                </li>
                <li>
                  <font>Redux Toolkit</font>
                </li>
                <li>
                  <font>
                    Recoil <span>|probando</span>
                  </font>
                </li>
                <li>
                  <font>
                    Sequelize <span>|probando</span>
                  </font>
                </li>
              </ul>
            </StyledLeft>
            <StyledRight>
              <div className="wrapper">
                <BorderImageGradient img={yoIMG} />
                {/* <BorderImageGradient img={yo2IMG} /> */}
              </div>
            </StyledRight>
          </StyledBody>
        </div>
      </Styled>
    </>
  );
};

export default SobreMi;

const Styled = styled.div`
  background-color: ${color.Bunker};
  background-color: black;
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  overflow: hidden;
  margin-top: calc(20px + 1vw);
  > div {
    width: 100%;
    height: 100%;
    margin: auto;
    padding-left: calc(20px + 2vw);
    padding-right: calc(20px + 2vw);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const StyledBody = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: calc(10px + 1vw);
  /* -webkit-box-reflect: below 0px linear-gradient(transparent, #0008); */
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const StyledLeft = styled.div`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.12);
  width: 100%;
  height: 100%;
  color: ${color.BaliHai};
  /* box-shadow: 0 4px 14px 0 rgb(0 0 0 / 39%), rgb(0 0 0/ 72%) 0px 30px 22px -10px; */

  p {
    font-family: "Montserrat";
    font-size: clamp(11px, 4vw, 17px);
    font-weight: 400;
    margin-bottom: 10px;
    /* opacity: 0.9; */
  }
  > ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    margin: 20px 0px 0px;
    overflow: hidden;
    list-style: none;
    padding-left: 0;
    margin-bottom: 10px;
    width: 100%;

    > li {
      width: 100%;
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      color: ${color.BaliHai};
      > font {
        font-family: "Chilanka";
        font-size: clamp(11px, 4vw, 17px);
        font-weight: 400;
        white-space: nowrap;
        > span {
          color: ${color.PuertoRico};
          font-size: clamp(7px, 3vw, 13px);
        }
      }
      &:before {
        content: "▹";
        left: 0;
        top: 0;
        display: flex;
        position: absolute;
        color: ${color.PuertoRico};
      }
    }
  }
`;
const StyledRight = styled.div`
  flex: 1;
  position: relative;

  ::after,
  ::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: ${color.PuertoRico};
    clip-path: polygon(55% 95%, 90% 87%, 100% 50%, 100% 100%, 49% 100%, 0% 50%);
    bottom: 0;
  }
  ::after {
    clip-path: polygon(7% 0, 100% 0, 100% 24%, 84% 5%, 18% 5%, 0 23%);
  }
  > .wrapper {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    gap: 20px;
  }
`;
