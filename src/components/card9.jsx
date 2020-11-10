import styled from "styled-components";
import { Card9SVG } from "../svg";
const Component = styled.div`
  background-color: #f1f8fc;
  position: relative;
  width: 100vw;

  .contentcontact {
    display: flex;
    max-width: 800px;
    margin: auto;
    padding: 20px;
  }

  .textcontent {
    width: 50%;
  }

  .fields {
    width: 50%;
  }

  .text {
    /* Style for "We would l" */

    color: #222a41;
    font-family: "Noto Serif";
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    text-align: left;

  }

  .head {
    /* Style for "Feel Free" */

    color: #000000;
    font-family: "Varela Round";
    font-size: 48px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 54px;
    text-align: left;
    
  }

  svg {
    position: absolute;
    bottom: -62px;
    width: -webkit-fill-available;
  }

  .fields {
    padding-top: 60px;
  }

  input {
    /* width: 543px; */
    height: 46px;
    /* border-radius: 0; */
    border: 0;
    padding: 0 10px;
    margin: 10px;
    background: #ecf1f8;
  }

  textarea {
    /* width: 543px; */
    /* border-radius: 0; */
    border: 0;
    padding: 0 10px;
    margin: 10px;
    background: #ecf1f8;
  }

  button {
    width: 170px;
    height: 42px;
    border-radius: 0;
    background-color: #ed145b;
    float: right;
    border: 0;
    border-radius: 7px;
    color: white;
    margin-top: 10px;
  }
`;
const Card9 = () => {
  return (
    <Component>
      <div className="side">
        <Card9SVG />
      </div>

      <div className="contentcontact">
        <div className="textcontent">
          <p className="head">
            Feel Free to <br /> Contact Us
          </p>

          <p className="text">
            We would love to connect and speak more <br />
            indepth about your challenges and goals.
            <br />
            Lets get more granular.
          </p>
        </div>

        <div className="fields">
          <div
            style={{
              display: "grid",
            }}
          >
            <input placeholder="Your Full Name" type="text" />
            <input placeholder="Your Email Address" type="text" />
            <textarea
              name=""
              placeholder="Drop us a message here…"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <button>SEND MESSAGE</button>
        </div>
      </div>
    </Component>
  );
};

Card9.prototype = {};

export { Card9 };
