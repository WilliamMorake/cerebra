import React from "react";
import styled from "styled-components";
import { Whiterightarrow } from "../svg";
const Component = styled.div`
float: right;
width: -webkit-fill-available;
position: relative;
margin: auto;
overflow: scroll;
display: flex;
`;
const Sliders = styled.div`
  
min-width: 231px; 
  height: 359px;
  display: flex;
  border-radius: 0;
  margin: auto;

  background-color: #d8d8d8;
  position: relative;

  .overlay p {
    /* Style for "Client or" */
    width: 135px;
    height: 85px;
    color: #ffffff;
    color: #ffffff;
    font-family: "Varela Round";
    font-size: 28px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 51px;
    text-align: left;
    /* Text style for "Client or" */
    color: #ffffff;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
}
  }

  .overlay {
    width: calc(205px * 0.8);
    height: calc(339px * 0.8);
    border-radius: 0;
    background-color: #ed145b;
    opacity: 0.75;
    position: absolute;
    top: 33px;
    left: 23px;
    padding: 10px;
  }

  #bottom{
    position: absolute;
    bottom: 20px;
    display:flex
  }

  #bottom p{
    /* Style for "Learn more" */
    width: 93px;
    height: 10px;
    color: #ffffff;
    color: #ffffff;
    font-family: "Varela Round";
    font-size: 10px;
    font-weight: 400;
    margin-right: 10px;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "Learn more" */
    color: #ffffff;
    font-style: normal;
    letter-spacing: 0.55px;
    line-height: normal;
  }

  #bottom svg{
    width: 20px;
  }
`;

const Project = ({ name, id, content }) => {
  const [hide, setHide] = React.useState(true);
  return (
    <Sliders
      onMouseEnter={() => setHide(false)}
      onMouseLeave={() =>
        setTimeout(() => {
          setHide(true);
        }, 2000)
      }
    >
      {!hide && (
        <div className="overlay">
          <p>
            {name}
            Client or <br /> Project
          </p>
          <div id="bottom">
            <p>Learn More</p>
            <Whiterightarrow />
          </div>
        </div>
      )}
    </Sliders>
  );
};

const Slider = () => {
  return (
    <Component className="sliderHolder">
      <Project
        mame={
          <h1>
            Client or <br /> Project
          </h1>
        }
      />
      <Project
        mame={
          <h1>
            Client or <br /> Project
          </h1>
        }
      />
      <Project
        mame={
          <h1>
            Client or <br /> Project
          </h1>
        }
      />
    </Component>
  );
};

Slider.prototype = {};

export { Slider };
