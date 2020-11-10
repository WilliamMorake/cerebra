import styled from "styled-components";

const Component = styled.div`
  position: relative;
  .form {
    width: 50%;
    margin: auto;
    background: white;
    padding: 22px 33px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);
    border-radius: 24px;
    position: relative;
    top: -35px;
  }

  .content {
    display: flex;
  }

  input {
    /* Style for "Enter your" */
    width: -webkit-fill-available;
    margin: 0 5px;
    height: 29px;
    border-radius: 10px;
    border: 1px solid silver;
    font-size: 11px;
    padding: 5px 10px;
    color: #747474;
    font-family: Verdana;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    text-align: left;
    /* Text style for "Enter your" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  button {
    /* Style for "btn" */
    width: -webkit-fill-available;
    margin: 0 5px;
    height: 40px;
    border: 0;
    border-radius: 10px;
    background-color: #725ddf;
    color: white;
  }

  p {
    /* Style for "* This is" */
    height: 13px;
    color: #1f1f1f;
    font-family: Nunito;
    font-size: 11px;
    font-weight: 300;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24px;
    text-align: center;
    /* Text style for "* This is" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }
`;
const Subscribe = () => {
  return (
    <Component>
      <div className="form">
        {" "}
        <div className="content">
          <input type="text" placeholder="Enter your e-mail" />
          <button> Subscribe for a free demo </button>
        </div>
        <p>
          * This is placeholder technical content for you to write and add to in
          this area for this particular section.
        </p>
      </div>
    </Component>
  );
};

Subscribe.prototype = {};

export { Subscribe };
