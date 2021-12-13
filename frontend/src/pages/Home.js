import React, { useEffect } from "react";
import Header from "../components/Header";
import SobreMi from "../components/SobreMi";
import Welcome from "../components/Welcome";
import styled from "styled-components";
import { device, devicePx } from "../utils/style/BreakPoints";
import Trabajos from "../components/Trabajos";
import Contacto from "../components/Contacto";
import { Divider } from "@mui/material";
import { color } from "../utils/style/Colors";
import bosqueURL from "../static/bosque1.jpg";
const sections = [
  {
    title: "Welcome",
    component: Welcome,
    id: "welcome",
  },
  {
    title: "Sobre Mi",
    component: SobreMi,
    id: "sobremi",
  },
  {
    title: "Trabajos",
    component: Trabajos,
    id: "trabajos",
  },
  {
    title: "Contacto",
    component: Contacto,
    id: "contacto",
  },
];

const Home = () => {
  return (
    <>
      <Header></Header>
      <Main>
        {sections.map(({ component: Component, title, id }, i) => {
          return (
            <Section
              key={i}
              id={id}
              className={[
                title === "Welcome" ? "primero" : "default",
                "sectionHome",
                id === "contacto" ? "contacto" : "",
              ]}
            >
              <Component title={`0${i}. ${title}`} />
            </Section>
          );
        })}
      </Main>
    </>
  );
};

export default Home;

const Main = styled.main`
  margin: auto;
  width: 100%;
  max-width: ${devicePx.laptopL};
`;
const Section = styled.section`
  width: 100%;
  max-width: ${devicePx.laptop};
  min-height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
  padding-top: clamp(20px, 8vw, 100px);
  /* padding-bottom: clamp(20px, 8vw, 100px); */
  margin-bottom: clamp(50px, 8vw, 100px);
  &.primero {
    padding-top: 0px;
  }
  &.default {
    overflow: hidden;
    border-radius: clamp(10px, 3vw, 50px);
    /* box-shadow: 0 4px 14px 0 rgb(0 0 0 / 39%), rgb(0 0 0/ 72%) 0px 30px 22px -10px; */
  }
  &.contacto {
    border-radius: 0;
    position: relative;
    background-image: url(${bosqueURL});
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 0;
    ::before {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      content: "";
      background: rgba(0, 0, 0, 0.7);
    }
    ::after {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      content: "";
      background: linear-gradient(to bottom, black, transparent);
    }
  }
`;
