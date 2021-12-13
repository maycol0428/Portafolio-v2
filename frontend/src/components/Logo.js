import { Paper, useMediaQuery } from "@mui/material";
import { CodeAlt } from "@styled-icons/boxicons-regular";
import { Heart, MouseAlt } from "@styled-icons/boxicons-solid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../utils/style/BreakPoints";
import { color } from "../utils/style/Colors";
import { size } from "../utils/style/FontSize";
import { ReactLogo } from "@styled-icons/boxicons-logos/ReactLogo";
import { Javascript } from "@styled-icons/boxicons-logos/Javascript";
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs";
import navHash from "../utils/helpers/navHash";
import { SECTIONS_ID } from "../utils/constantes/sections";
const Logo = () => {
  const MovilDevice = useMediaQuery(device.mobileS);
  const laptopDevice = useMediaQuery(device.laptop);
  const laptopLDevice = useMediaQuery(device.laptopL);
  const [scrollDown, setScrollDown] = useState(false);
  const [sectionId, setSectionId] = useState("welcome");
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 10) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    });
  }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("section.sectionHome");
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionId(entry.target.id);
            return;
          }
        });
      },
      { threshold: 0.5 }
    );
    let observerLargue = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionId(entry.target.id);
            return;
          }
        });
      },
      { threshold: 0.2 }
    );
    Array.from(sections).forEach((section) => {
      if (section.id === SECTIONS_ID.TRABAJOS_ID) {
        return observerLargue.observe(section);
      }
      observer.observe(section);
    });
  }, []);

  const sectionIntersection = (sectionId) => {
    return (
      <>
        <TopbarItem
          className={[
            `${scrollDown ? "scrollDown" : ""}`,
            "right",
            `${sectionId === SECTIONS_ID.WELCOME_ID ? "rightvisible" : ""}`,
          ]}
          elevation={1}
        >
          <div>
            <p style={{ visibility: "hidden" }}>a</p>
            <Javascript></Javascript>
            <ReactLogo className="bx-spin"></ReactLogo>
            <Nodejs></Nodejs>
            <p style={{ visibility: "hidden" }}>a</p>
          </div>
        </TopbarItem>
        <TopbarItem
          className={[
            `${scrollDown ? "scrollDown" : ""}`,
            "right",
            `${sectionId === SECTIONS_ID.SOBRE_MI_ID ? "rightvisible" : ""}`,
          ]}
          elevation={1}
        >
          <div>28 de Abril~Tauro♉</div>
        </TopbarItem>
        <TopbarItem
          className={[
            `${scrollDown ? "scrollDown" : ""}`,
            "right",
            `${sectionId === SECTIONS_ID.TRABAJOS_ID ? "rightvisible" : ""}`,
          ]}
          elevation={1}
        >
          <div>+51 950341940⚡</div>
        </TopbarItem>
        <TopbarItem
          className={[
            `${scrollDown ? "scrollDown" : ""}`,
            "right",
            `${sectionId === SECTIONS_ID.CONTACTO_ID ? "rightvisible" : ""}`,
          ]}
          elevation={1}
        >
          <div>Saludos🎉😉</div>
        </TopbarItem>
      </>
    );
  };
  return (
    <Topbar className={[`${scrollDown ? "scrollDown" : ""}`]} id="topbar">
      <TopbarItem className={[`${scrollDown ? "scrollDown left" : ""}`]} elevation={1}>
        <div>
          <div className="tobaritemleft">M</div>
        </div>
      </TopbarItem>

      {sectionIntersection(sectionId)}
    </Topbar>
  );
};

export default Logo;
const Topbar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  z-index: 11;
  width: 100%;
  justify-content: space-between;
  transition: all 0.5s ease;
  &.scrollDown {
    background-color: black;
    /* box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 5px, rgba(0, 0, 0, 0.8) 0px 2px 3px; */
  }
`;
const TopbarItem = styled.a`
  position: relative;
  cursor: pointer;
  padding: 10px 30px;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
  background-color: ${color.Bunker};
  background-color: black;
  color: ${color.PuertoRico};
  transition: all 0.3s ease;
  border-radius: 0 40px 0 40px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: -moz-none;
  -o-user-select: none;
  user-select: none;
  border-left: 3px solid ${color.PuertoRico};
  filter: drop-shadow(-15px -15px 0px ${color.PuertoRico});
  transform-origin: 0 0;
  transform: rotate(5deg);

  > div {
    display: flex;
    align-items: center;
    position: relative;
    gap: 5px;
    font-size: clamp(11px, 2vw, 16px);
    letter-spacing: 1px;
    font-weight: 400;
    font-family: "Lato";
    justify-content: center;
    min-width: 50px;

    svg {
      height: clamp(11px, 2vw, 16px);
    }
    > .tobaritemleft {
      position: relative;

      ::after {
        content: "";
        position: absolute;
        width: clamp(20px, 3vw, 25px);
        height: clamp(20px, 3vw, 25px);
        border: 2px solid ${color.PuertoRico};
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -55%);
        opacity: 0.5;
      }
    }
  }
  &.default {
    background-color: ${color.Bunker};
    color: ${color.PuertoRico};
  }

  &.right {
    border-left: none;
    border-right: 3px solid ${color.PuertoRico};
    position: absolute;
    right: 0;
    border-radius: 40px 0px 40px 0px;
    filter: drop-shadow(15px -15px 0px ${color.PuertoRico});
    transform-origin: 100% 0%;
    transform: translateX(calc(100% + 30px));
  }
  &.scrollDown {
    /* transform: none; */
    filter: none;
    border: none;
    margin: 0;
    background-color: transparent;
    color: ${color.PuertoRico};
    border-radius: 0px;
    :hover {
      background-color: ${color.PuertoRico};
      color: black;
    }
    &.left {
      transform: none;
    }
  }
  &.rightvisible {
    transform-origin: 100% 0%;
    transform: rotate(-35deg) translateX(0);
    &.scrollDown {
      transform: none;
    }
  }
`;
const Item = styled.a``;
