import { Backdrop, SpeedDial, SpeedDialAction, useMediaQuery } from "@mui/material";
import { CodeAlt, MenuAltLeft, User } from "@styled-icons/boxicons-regular";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { color } from "../utils/style/Colors";
import { Facebook, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import Logo from "./Logo";
import { device, deviceMinWidth, devicePx } from "../utils/style/BreakPoints";
import HeaderMenuHamburguer from "./HeaderMenuHamburguer";

const Header = () => {
  const tabletDevice = useMediaQuery(deviceMinWidth.laptopL);
  const [scrollDown, setScrollDown] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (document.documentElement.scrollTop > 10) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    });
  }, []);
  return (
    <>
      <Logo></Logo>
      {tabletDevice ? (
        <Menu className={[!scrollDown || "scrolldown"]}>
          <a href="#sobremi">01. Sobre Mi</a>
          <a href="#trabajos">02. Trabajos</a>
          <a href="#contacto">03. Contacto</a>
        </Menu>
      ) : (
        <HeaderMenuHamburguer></HeaderMenuHamburguer>
      )}
    </>
  );
};

export default Header;

const Menu = styled.div`
  position: fixed;
  z-index: 11;
  left: 50%;
  top: 0;
  height: 50px;
  background-color: transparent;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: ${devicePx.laptop};
  transform: translateX(-50%);
  gap: 20px;
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  margin-top: 30px;
  &.scrolldown {
    margin-top: 0px;
  }

  a {
    border-radius: 2px;
    padding: 2px 10px;
    text-align: start;
    font-family: "Nunito";
    font-size: clamp(11px, 3vw, 14px);
    font-weight: 600;
    letter-spacing: 1px;
    color: black;
    background-color: ${color.PuertoRico};
    transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
    :hover {
      background-color: black;
      color: ${color.PuertoRico};
    }
  }
`;
