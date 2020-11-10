import React from "react";
import { Card1 } from "./components/card1";
import { Card2 } from "./components/card2";
import { Card3 } from "./components/card3";
import { Card4 } from "./components/card4";
import { Card5 } from "./components/card5";
import { Card6 } from "./components/card6";
import { Card7 } from "./components/card7";
import { Card8 } from "./components/card8";
import { Card9 } from "./components/card9";
import { Card10 } from "./components/card10";
import { Card11 } from "./components/card11";
import "./App.css";
import WebFont from "webfontloader";

const { Header } = require("./subComponents/header");

WebFont.load({
  google: {
    families: [
      "Droid Sans",
      "Noto Serif",
      "Varela Round",
      "Montserrat",
      "Poppins",
      "Verdana",
      "Nunito",
      "Droid Serif",
      "Titillium Web",
      "Libre Baskerville",
    ],
  },
});

function App() {
  return (
    <div className="App">
      <Header />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
      <Card10 />
      <Card11 />
    </div>
  );
}

export default App;
