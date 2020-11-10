import styled from "styled-components";
import { Profile } from "../subComponents/profile";
const Component = styled.div`
  width: 100vw;
  padding-top: 70px;
  .line {
    margin: auto;
    border: 0.1px solid #000000;
    height: 30px;
    width: 0px;
    margin-top: 30px;
  }

  .form {
    width: 40%;
    margin: 20px auto;
    text-align: center;
  }

  button {
    width: 190px;
    height: 40px;
    border-radius: 25px;
    background-color: #6e45e2;
    color: white;
    margin: auto;
    border: 0;
    margin-top: 22px;
  }

  .top {
    margin: auto;
    /* width: -webkit-fill-available; */
    margin: 30px 0;
    color: #ed145b;
    font-family: Nunito;
    font-size: 12px;
    font-weight: 700;
    font-style: normal;
    -webkit-letter-spacing: normal;
    -moz-letter-spacing: normal;
    -ms-letter-spacing: normal;
    letter-spacing: normal;
    line-height: 32px;
    text-align: center;
    text-transform: uppercase;
    font-style: normal;
    -webkit-letter-spacing: 0.6px;
    -moz-letter-spacing: 0.6px;
    -ms-letter-spacing: 0.6px;
    letter-spacing: 0.6px;
    line-height: normal;
  }

  .header {
    /* Style for "We would l" */
    height: 164px;
    color: #000000;
    font-family: "Nunito";
    font-size: 40px;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 59.81px;
    text-align: center;
    /* Text style for "We would l" */
   
     
  }

  .content {
    max-width: fit-content;
    margin: auto;
  }

  .form input {
    width: -webkit-fill-available;
    /* width: 370px; */
    height: 31px;
    border-radius: 23px;
    background-color: #000000;
    opacity: 0.5;
    border: 0;
    padding: 0 10px;
    /* margin: 1px;
  }


  .row {
      display:flex
  }




  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: red;
    opacity: 1; /* Firefox */
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: red;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: red;
  }

  .profiles {
    display: flex;
    text-align: -webkit-center;
    margin: auto;
    width: max-content;
    margin-top: 100px;
  }
`;
const Card7 = () => {
  return (
    <Component>
      <div className="line"></div>

      <div className="content">
        <p className="top">OUR EXPERTS</p>

        <p className="header">
          Our core team of experiencedd{" "}
          <span>
            {" "}
            c-suite <br />
            professionals
          </span>{" "}
          are at your service
        </p>
      </div>

      <div className="profiles">
        <Profile color={" #91bceb"} name="Somto King" title="king/CEO " />
        <Profile color={" #ed145b"} name="Somto King" title="king/CEO " />
        <Profile color={" #725ddf"} name="Somto King" title="king/CEO " />
      </div>
    </Component>
  );
};

Card7.prototype = {};

export { Card7 };
