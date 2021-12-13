import "./App.css";
import fonts from "webfontloader";
import { useEffect } from "react";
import styled from "styled-components";
import Home from "./pages/Home";
import { color } from "./utils/style/Colors";
function App() {
  useEffect(() => {
    fonts.load({
      google: {
        families: [
          "Roboto:300,400,500,600,700,800,900",
          "Lato:300,400,500,600,700,800,900",
          "Nunito:300,400,500,600,700,800,900",
          "Chilanka",
          "Montserrat:300,400,500,600,700,800,900",
          "Corinthia:300,400,500,600,700,800,900",
          "Work Sans:300,400,500,600,700,800,900",
          "Amiri:300,400,500,600,700,800,900",
        ],
      },
    });
  }, []);

  return (
    <>
      <Home></Home>
    </>
  );
}

export default App;
