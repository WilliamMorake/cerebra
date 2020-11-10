import styled from "styled-components";
import { Twitter, Google, Instagram, Facebook } from "../svg";

const Component = styled.div`
  background-color: #171717;
  display: flex;


  .contentlast{
    display: flex;
    margin: auto;
  }

  .section {
    width: -webkit-fill-available;
    color: white;
    padding: 10px 50px;
  }

  .logo {
    color: #ffffff;
    font-family: Nunito;
    font-size: 45px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 35.07px;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "CEREBRA" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .socials {
    display: flex;
    width: 50%;
  }

  .socials svg {
    width: 30px;
    fill: white;
    margin: auto;
  }

  .text {
    /* Style for "Eaque ipsa" */
    color: white;

    font-family: Nunito;
    font-size: 13px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: normal;
    line-height: 28px;
    text-align: left;
    /* Text style for "Eaque ipsa" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .address {
    /* Style for "Mon - FRI:" */
    color: #555555;

    color: #9fa4af;
    font-family: Nunito;
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 32px;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "M, on - FR" */
    font-style: normal;
    letter-spacing: 0.6px;
    line-height: normal;
  }

  .row {
    display: flex;
  }

  .row div {
    width: -webkit-fill-available;
  }

  .straight {
    display: flex;
  }

  .left {
    width: -webkit-fill-available;
    text-align: left;
  }

  .right {
    width: -webkit-fill-available;
    text-align: left;
  }
`;
const Card11 = () => {
  return (
    <Component>
      <div className="contentlast">
        <div className="section">
          <p className="logo">CEREBRA</p>

          <p
            className="text"
            style={{
              color: "#555555",
            }}
          >
            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
            beatae vitae dicta sunt <br />
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
            aut odit aut fugit
          </p>

          <div className="tags">
            <h1 className="address">BUSINESS ADDRESS </h1>
            <p className="text">1864 Fell Street San Francisco, CA 94117</p>
          </div>

          <div className="row">
            <div className="tags">
              <h1 className="address">BUSINESS PHONE</h1>
              <p className="text">555-555-5555</p>
            </div>

            <div className="tags">
              <h1 className="address">BUSINESS EMAIL</h1>
              <p className="text">learn@cerebra.tech</p>
            </div>
          </div>

          <div className="socials">
            <Twitter />
            <Google />
            <Instagram />
            <Facebook />
          </div>
        </div>
        <div className="section">
          <p className="opening">OPENING HOURS</p>

          <p
            className="text"
            style={{
              color: "#555555",
            }}
          >
            Architecto beatae vitae dicta sunt ipsam voluptatem
            <br /> quia voluptas sit aspernatur aut odit aut fugit
          </p>

          <div className="straight">
            <p className="left address">Mon - FRI:</p>

            <p className="right address">9.00 am - 5.00 pm</p>
          </div>

          <div className="straight">
            <p className="left address">SAT & Sun :</p>

            <p className="right address">Closed</p>
          </div>
        </div>
      </div>
    </Component>
  );
};

Card11.prototype = {};

export { Card11 };
