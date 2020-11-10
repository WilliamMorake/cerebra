import styled from "styled-components";

const Component = styled.div`
  max-width: 640px;
  margin: auto;
  position: relative;
  margin-bottom: 150px;
  display: flow-root;

  .details {
    width: 240px;
    box-shadow: 0 30px 40px rgba(0, 0, 0, 0.05);
    border-radius: 0;
    padding: 14px 79px;
    background-color: #ffffff;
    position: absolute;
    top: 90px;
    z-index: -1;
  }

  button {
    width: 123px;
    height: 32px;
    border-radius: 0;
    background-color: #ed145b;
    border: 0;
    border-radius: 5px;
    color: white;
    font-family: "Varela Round";
  }

  .head {
    color: #000000;
    font-family: "Varela Round";
    font-size: 25px;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 54px;
    text-align: left;
    font-style: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: normal;
    margin: auto;
  }

  ul {
    padding: 2px 17px;
  }

  ul li {
    /* Style for "•  Braggad" */
    color: #222a41;
    font-family: "Noto Serif";
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 34px;
    text-align: left;
    /* Text style for "•  Braggad" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .box {
    /* Style for "Rectangle" */
    width: 50%;
    height: 450px;
    border: 0;
  }
`;

const CardBoard = ({ left, svg, title }) => {
  const Svg = svg
  return (
    <Component>
      <div className="details" style={{ left: left ? "240px" : "" }}>
        <div>
          {title}
          <ul>
            <li>
              <p>Ilom ipson Ilom ipson Ilom ipson Ilom ipson</p>
            </li>
            <li>
              <p>Ilom ipson Ilom ipson Ilom ipson Ilom ipson</p>
            </li>
            <li>
              <p>Ilom ipson Ilom ipson Ilom ipson Ilom ipson</p>
            </li>
            <li>
              <p>Ilom ipson Ilom ipson Ilom ipson Ilom ipson</p>
            </li>
          </ul>

          <button>learn more</button>
        </div>
      </div>
      <div
        className="box"
        style={{ float: left ? "left" : "right", left: left ? "240px" : "" }}
      >
        <Svg/>
      </div>
    </Component>
  );
};

CardBoard.prototype = {
  title: String,
  content: String,
};

export { CardBoard };
