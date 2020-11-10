import styled from "styled-components";

const Component = styled.div`
  width: 100vw;
  background-color: #252525;
  padding: 70px 0;
  .line {
    margin: auto;
    border: 0.1px solid #ffffff;
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
    height: 45px;
    font-family: "Nunito";
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
    color: #ffffff;
    font-family: "Nunito";
    font-size: 40px;
    margin: 0;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 59.81px;
    text-align: center;
  
   
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
`;
const Card5 = () => {
  return (
    <Component>
      <div className="line"></div>

      <div className="content">
        <p className="top">REQUEST A CALL BACK</p>

        <p className="header">
          We would love to
          <br />
          <span>help your business </span> grow
          <br />
          smarter by the second
        </p>
      </div>
      <div className="form">
        <div
          className="row"
          style={{
            display: "flex",
          }}
        >
          <input
            type="text"
            style={{
              marginRight: "10px",
            }}
            placeholder="Name"
          />
          <input type="text" placeholder="Name" />
        </div>

        <div
          className="row"
          style={{
            display: "flex",
            marginTop: "20px",
          }}
        >
          <input
            type="text"
            style={{
              marginRight: "10px",
            }}
            placeholder="Name"
          />
          <input type="text" placeholder="Name" />
        </div>

        <button>SEND TO US</button>
      </div>
    </Component>
  );
};

Card5.prototype = {};

export { Card5 };
