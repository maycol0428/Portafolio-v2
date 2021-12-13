import React, { useEffect, useState } from "react";
import Subtitle from "./shared/Subtitle";
import axios from "axios";
import styled from "styled-components";
import { color } from "../utils/style/Colors";
import { Folder, LinkExternal } from "@styled-icons/boxicons-regular";
import { Github } from "@styled-icons/icomoon";
import { Divider, Paper } from "@mui/material";
import TrabajoCard from "./TrabajoCard";
import { SECTIONS_ID } from "../utils/constantes/sections";
import TrabajosDestacados from "./TrabajosDestacados";
import intagramIMG from "../static/Instagram-v2-clone.png";
import intagram2IMG from "../static/Instagram-v2-clone2.png";
import SpotifyIMG from "../static/Spotify-clone.jpg";
import uberEats3IMG from "../static/Uber-eats-clone (3).jpg";
import uberEats2IMG from "../static/Uber-eats-clone.jpg";
import uberEats1IMG from "../static/Uber-eats-clone (2).jpg";
const destacadosArray = [
  { name: "Instagram-v2-clone", image: [{ url: intagramIMG }] },
  { name: "Uber-eats-clone", image: [{ url: uberEats1IMG }, { url: uberEats2IMG }, { url: uberEats3IMG }] },
  { name: "Spotify-clone", image: [{ url: SpotifyIMG }] },
];
const Trabajos = ({ title }) => {
  const [repositories, setRepositories] = useState([]);
  const [offsetPaginate, setOffsetPaginate] = useState(3);
  useEffect(() => {
    axios.get("https://api.github.com/users/maycol0428/repos").then(({ data }) => {
      setRepositories(data);
    });
  }, []);

  return (
    <>
      <Subtitle title={title}></Subtitle>
      <TrabajosDestacados
        detacados={repositories.filter((repo) => {
          let des = destacadosArray.filter((des) => {
            if (des.name === repo.name) {
              repo.image = des.image;
              return true;
            }
          });
          if (des.length > 0) {
            return [repo, ...des];
          }
        })}
      ></TrabajosDestacados>

      <Default>
        <div className="wrapper" id="default-wrapper">
          {repositories
            .map((repository, i) => {
              if (repository.name.toLowerCase().includes("skeleton")) {
                return;
              }
              return <TrabajoCard key={i} repository={repository}></TrabajoCard>;
            })
            .slice(0, offsetPaginate)}
        </div>
        <div className="button">
          <button
            className={repositories.length === offsetPaginate ? "nohaymas" : ""}
            onClick={(e) => {
              setOffsetPaginate((offset) => {
                if (repositories.length > offsetPaginate) {
                  return offset + 3;
                } else {
                  const defaultwrapper = document.getElementById("default-wrapper");
                  e.target.scrollIntoView({ block: "start" });
                  defaultwrapper.scrollIntoView({ block: "start" });
                  return 3;
                }
              });
            }}
          >
            {repositories.length === offsetPaginate ? "ocultar" : "ver mas"}
          </button>
        </div>
      </Default>
    </>
  );
};

export default Trabajos;

const Default = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  flex: 1;
  padding-bottom: calc(15px + 1vw);
  padding-top: calc(15px + 1vw);
  padding-left: calc(15px + 1vw);
  padding-right: calc(15px + 1vw);
  > .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: calc(15px + 1vw);
  }
  > .button {
    text-align: center;
    button {
      margin: 50px auto 0;
      padding: 20px 40px;
      border-radius: 10px;
      background-color: ${color.PuertoRico};
      &.nohaymas {
        background: transparent;
        color: ${color.PuertoRico};
        border: 1px solid ${color.PuertoRico};
      }
    }
  }
`;
