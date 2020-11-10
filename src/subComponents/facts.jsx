import styled from "styled-components";

const Component = styled.div`
  display: flex;
  padding: 100px 0;
  p {
    /* Style for "Fast  Fact" */
    width: 53px;
    height: 28px;
    color: #2743a4;
    font-family: Montserrat;
    font-size: 12px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 18px;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "F, ast  ," */
    font-style: normal;
    letter-spacing: 3.6px;
    line-height: normal;
    margin-bottom: 30px;
  }

  .underline {
    width: 20px;
    height: 2px;
    background-color: #acacac;
    margin-bottom: 22px;
  }

  .blueunderline {
    width: 20px;
    height: 2px;
    background-color: #2743a4;
    margin-bottom: 22px;
  }

  .constatfact {
    width: -webkit-fill-available;
  }

  .metrics {
    /* Style for "04" */
    width: 25px;
    height: 13px;
    color: #000000;
    font-family: Montserrat;
    font-size: 15px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 48px;
    text-align: left;
    /* Text style for "04" */
    margin-bottom: 23px;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .factors {
    display: flex;
    width: -webkit-fill-available;
  }

  .facts {
    /* Style for "Years in" */
    width: 62px;
    height: 30px;
    color: #898989;
    font-family: Montserrat;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 18px;
    text-align: left;
    /* Text style for "Y, ears in" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }
`;

const LilFact = ({ metrics, content }) => {
  return (
    <div className="constatfact">
      <p className="metrics">{metrics}</p>

      <div className="blueunderline"></div>
      {content}
    </div>
  );
};

const Facts = () => {
  return (
    <Component>
      <div className="factors">
        <div className="constatfact">
          <p
            style={{
              marginBottom: "30px",
            }}
          >
            FAST
            <br />
            FACTS
          </p>

          <div className="underline"></div>
        </div>
        <LilFact
          metrics={"1B"}
          content={
            <p className="facts">
              {" "}
              Years in <br /> Business{" "}
            </p>
          }
        />
        <LilFact
          metrics={"1B"}
          content={
            <p className="facts">
              {" "}
              Years in <br /> Business{" "}
            </p>
          }
        />

        <LilFact
          metrics={"1B"}
          content={
            <p className="facts">
              {" "}
              Years in <br /> Business{" "}
            </p>
          }
        />

        <LilFact
          metrics={"1B"}
          content={
            <p className="facts">
              {" "}
              Years in <br /> Business{" "}
            </p>
          }
        />

        <LilFact
          metrics={"1B"}
          content={
            <p className="facts">
              {" "}
              Years in <br /> Business{" "}
            </p>
          }
        />
      </div>
    </Component>
  );
};

Facts.prototype = {};

export { Facts };
