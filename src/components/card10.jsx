import styled from "styled-components";
import { Twitter, Google, Instagram, Facebook } from "../svg";

const Component = styled.div`
  .subsribe {
    display: flex;
    max-width: 800px;
    margin: auto;
    margin: 20vh auto;
  }
  .section {
    width: -webkit-fill-available;
  }

  .head {
    /* Style for "CONNECT Wi" */

    color: #ed145b;
    font-family: Nunito;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 32px;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "CONNECT Wi" */
    
  }

  .content {
    /* Style for "Join us on" */

    color: #000000;
    font-family: "Nunito";
    font-size: 25px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 48px;
    text-align: left;
    /* Text style for "Join us on" */
     font-weight: 600;
    font-style: normal;
    letter-spacing: -1.01px;
    line-height: normal;
    
  }

  .subcontent {
    /* Style for "Nam ac eli" */

    color: #9fa4af;
    font-family: "Libre Baskerville";
    font-size: 12px;
    font-style: italic;
    letter-spacing: normal;
    line-height: 30px;
    text-align: left;
    /* Text style for "Nam ac eli" */
     sr
  }

  input {
    height: 36px;
    border-radius: 23px;
    border: 0;
    min-width: 60%;
    padding: 0 10px;
    margin: 10px;
    background: #ecf1f8;
  }

  button {
    height: 36px;
    border: 0;
    color: white;
    /* font-size: 20px; */
    /* height: 45px; */
    border-radius: 23px;
    background-color: #ed145b;
    margin: 10px;
    width: -webkit-fill-available;
  }

  .first {
    margin-right: 16px;
  }

  .subscribe {
    display: flex;
  }

  .socials {
    display: flex;
  }

  .socials svg {
    width: 30px;
    fill: black;
    margin: auto;
  }

  .socials svg:hover {
    fill: #ed145b;
  }
`;
const Card10 = () => {
  return (
    <Component>
      <div className="subsribe">
        <div className="section first">
          <div>
            <p className="head">NEWLETTER</p>
            <p className="content">
              Sign up to stay in the loop <br /> regarding latest trends and
              data
            </p>
            <p className="subcontent">
              Quasi architecto beatae vitae dicta sunt explicabo. Nemo <br />{" "}
              enim ipsam voluptatem quia voluptas sit aspernatur
            </p>
            ,
          </div>

          <div className="subscribe">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="section">
          <div>
            <p className="head">CONNECT With US</p>

            <p className="content">
              Join us on the following{" "}
              <span>
                social <br /> networks
              </span>
            </p>

            <p className="subcontent">
              Nam ac elit a ante commodo tristique. Duis lacus urna, <br />{" "}
              condimentum a vehicula, hendrerit ac nisi lorem tortor nec commodo
              ultricies, vitae viverra urna nulla sed turpis
            </p>
          </div>

          <div className="socials">
            <Twitter />
            <Google />
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </Component>
  );
};

Card10.prototype = {};

export { Card10 };
