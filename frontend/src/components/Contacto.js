import React, { useEffect } from "react";
import styled, { css } from "styled-components";
import { color } from "../utils/style/Colors";
import Subtitle from "./shared/Subtitle";
import whatsappIMG from "../static/logoRedesSociales/wsp.png";
import instagramIMG from "../static/logoRedesSociales/instagram.png";
import githubIMG from "../static/logoRedesSociales/github.png";
import facebookIMG from "../static/logoRedesSociales/fc.png";
import { Facebook, Github, Instagram, Whatsapp } from "@styled-icons/boxicons-logos";
import { Gmail } from "@styled-icons/simple-icons";
import { Cart, Message } from "@styled-icons/boxicons-regular";
import { devicePx } from "../utils/style/BreakPoints";
const Contacto = ({ title }) => {
  return (
    <>
    
      <ContactoWrapper>
        <Subtitle title={title}></Subtitle>
        <RedesSociales>
          <div className="grid">
            <div
              className="left"
              onClick={() => {
                window.open("https://api.whatsapp.com/send?phone=51950341940");
              }}
            >
              <h4>+51950341940</h4>
            </div>
            <div className="center">
              <div>
                <Whatsapp></Whatsapp>
              </div>
            </div>
            <div className="right">
              <span>whatsapp</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid reverse">
            <div
              className="left"
              onClick={() => {
                window.open("https://www.instagram.com/maycol0428/");
              }}
            >
              <h4>maycol0428</h4>
            </div>
            <div className="center">
              <div>
                <Instagram></Instagram>
              </div>
            </div>
            <div className="right">
              <span>instagram</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid">
            <div
              className="left"
              onClick={() => {
                window.open("https://github.com/maycol0428");
              }}
            >
              <h4>maycol0428</h4>
            </div>
            <div className="center">
              <div>
                <Github></Github>
              </div>
            </div>
            <div className="right">
              <span>github</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid reverse">
            <div
              className="left"
              onClick={() => {
                window.open("https://www.facebook.com/maycolchristian.em");
              }}
            >
              <h4>maycolchristian.em</h4>
            </div>
            <div className="center">
              <div>
                <Facebook></Facebook>
              </div>
            </div>
            <div className="right">
              <span>facebook</span>
            </div>
          </div>
          <div className="divider"></div>
          <div className="grid">
            <div
              className="left"
              onClick={() => {
                window.open("mailto:maycol0428@gmail.com");
              }}
            >
              <h4>maycol0428</h4>
            </div>
            <div className="center">
              <div>
                <Gmail className="gmail"></Gmail>
              </div>
            </div>
            <div className="right">
              <span>@gmail.com</span>
            </div>
          </div>
        </RedesSociales>
      </ContactoWrapper>
    </>
  );
};

export default Contacto;

const ContactoWrapper = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1024px;
`;
const RedesSociales = styled.div`
  user-select: none;
  background-color: transparent;
  min-height: 60vh;
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  .divider {
    height: 50px;
    width: 2px;
    border-radius: 10px;
    background-color: ${color.ShuttleGray};
    background-color: ${color.PuertoRico};
    margin-top: 10px;
    opacity: 0.7;
    margin-bottom: 10px;
  }
  .grid {
    min-width: 300px;
    display: grid;
    grid-template-columns: 1fr clamp(20px, 5vw, 30px) 1fr;
    grid-gap: 10px;
    svg {
      text-align: center;
      height: 100%;
    }
    > .left {
      background-color: ${color.PuertoRico};
      padding: clamp(3px, 5vw, 10px);
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
      order: 1;
      :hover {
        background-color: black;
        h4,
        span {
          color: ${color.PuertoRico};
        }
      }
      cursor: pointer;
      h4,
      span {
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
        font-family: "Lato";
        color: ${color.Bunker};
        font-size: clamp(11px, 2vw, 16px);
        display: flex;
        align-items: center;
        span {
          font-size: clamp(15px, 2vw, 26px);
        }
      }
    }
    > .center {
      order: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      background-color: transparent;
      text-align: center;
      svg.gmail {
        text-align: center;
        height: clamp(15px, 2vw, 20px);
      }
      > div {
        flex: 1;
        color: ${color.ShuttleGray};
        color: ${color.PuertoRico};
        opacity: 0.7;
      }
    }
    > .right {
      order: 3;
      display: flex;
      justify-content: flex-start;

      align-items: center;
      span {
        color: ${color.PuertoRico};
        font-size: clamp(10px, 2vw, 13px);
      }
    }
    &.reverse {
      > .right {
        order: 1;
        justify-content: flex-end;
      }
      > .left {
        order: 3;
      }
    }
  }
`;
