import styled from "styled-components";
import { Subscribe } from "../subComponents/subscribe";
import { DetailSvg1 } from "../svg/index";
const Component = styled.div`
  background-color: #ed145b;
  width: 100vw;
  height: 800px;
  margin: 0;

  .info {
    display: flex;
    width: 56%;
    margin: auto;
  }

  .info .content {
    width: 50%;
    text-align: center;
    color: white;
    padding-top: 13%;
  }

  svg {
    width: 50%;
  }

  .main {
    /* Style for "See where" */
    color: #ffffff;
    font-family: "Titillium Web";
    font-size: 19px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    /* Text style for "See where" */
    font-style: normal;
    letter-spacing: -0.25px;
    line-height: normal;
  }

  .sub {
    /* Style for "We make da" */
    color: #ffffff;
    font-family: "Titillium Web";
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    /* Text style for "We make da" */
    font-style: normal;
    letter-spacing: -0.2px;
    line-height: normal;
  }
`;
const Card2 = () => {
  return (
    <Component>
      <Subscribe />
      <div className="info">
        <div className="content">
          <h3 className="main">See where everything stands</h3>

          <p className="sub">
            We make data frictionless and easy.
            <br />
            Information shouldn’t be hard to read and action
            <br />
            shouldnt be hard to initiate.
            <br />
          </p>
        </div>
        <DetailSvg1 />
      </div>
    </Component>
  );
};

Card2.prototype = {};

export { Card2 };
