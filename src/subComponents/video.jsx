import React from "react";
import styled from "styled-components";
import { Media, Player } from "react-media-player";
import CustomPlayPause from "./CustomPlayPause";

const Component = styled.div`
max-width: 640px;
margin: auto;
position: relative;
top: 0;
box-shadow: 2px 5px 60px 11px rgba(50, 91, 151, 0.28);
border-radius: 10px;
background-color: #ebebeb;
max-height: 361px;

@media (max-width: 700px) {
  width:95vw !important
}

.media-controls{
  position: absolute;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  border: 0;
}

 

.media-controls .button{
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #ed145b;
  border: 0;
  font-size: 40px;
  color: white;
}

iframe{
  max-width: 100%;
}
`;
const Video = () => {
  const [opacity, setOpacity] = React.useState(1);
  return (
    <Component>
      <Media>
        <div className="media">
          <div className="media-player">
            <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
          </div>
          <div
            className="media-controls"
            style={{
              opacity,
            }}
            onMouseEnter={() => {
              setOpacity(1);
            }}
            onMouseLeave={() => {
              setOpacity(0.1);
            }}
          >
            <CustomPlayPause
              setOpa={() => {
                setOpacity(0.1);
              }}
              className={"button"}
            />
          </div>
        </div>
      </Media>
    </Component>
  );
};

Video.prototype = {};

export { Video };
