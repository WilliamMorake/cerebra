import styled from "styled-components";
// import { LeftArrow, RightArrow } from "../svg";
import { Slider } from "../subComponents/slider";
const Component = styled.div`
 
margin-top:150px;
min-height: 700px;

  .projects{
    max-width: 80%;
    margin: 200px auto;
  }
  .side{
    display: flex;
    width: max-content;
    margin: auto;
    max-width: 90vw;
  }
  .sidep {
    /* Style for "check our" */
    color: #000000;
    font-family: "Varela Round";
    font-size: 34px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 54px;
    text-align: left;
    /* Text style for "check our" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  svg {
    margin-right: 20px;
  }

 
`;
const Card8 = () => {
  return (
    <Component>
      <div className="side">
           <p className='sidep'>
            check our <br />
            recent <br /> projects
          </p>

          {/* <div className="arrows">
            <LeftArrow />
            <RightArrow />
          </div> */}

        <Slider />
      </div>
     </Component>
  );
};

Card8.prototype = {};

export { Card8 };
