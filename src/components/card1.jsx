import styled from "styled-components";

const Component = styled.div`
  background: linear-gradient(
    45deg,
    #91bceb,
    #8ca6ef,
    #aa77da,
    #e264b1,
    #f15fa6
  );
  width: 100vw;
  height: 70vh;
  margin: 0;

  .maintext {
    /* Style for "We know ex" */
    color: #ffffff;
    font-family: Nunito;
    font-size: 45px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 82px;
    text-align: center;
    /* Text style for "We know ex" */
    font-style: normal;
    letter-spacing: -2.3px;
    line-height: normal;
    /* Text style for "customers" */
    font-style: italic;
    letter-spacing: normal;
    line-height: normal;
    margin: 0;
  }

  .subtext {
    /* Style for "Cerebra ex" */
    height: 77px;
    color: #ffffff;
    font-family: "Nunito";
    margin: 30px auto;
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 32.98px;
    text-align: center;
    text-transform: uppercase;
    /* Text style for "Cerebra ex" */
    font-style: normal;
    letter-spacing: 0.7px;
    line-height: normal;
  }

  .content {
    position: absolute;
    width: 100%;
    top: 25%;
  }
`;
const Card1 = () => {
  return (
    <Component>
      <div className="content">
        <h3 className="maintext">
          We know exactly what <br /> your customers want
        </h3>
        <p className="subtext">
          Cerebra extracts signals from any data source, <br />
          structured or not, to alert you of opportunities <br />
          and anticipate customers' needs
        </p>
      </div>
    </Component>
  );
};

Card1.prototype = {};

export { Card1 };
