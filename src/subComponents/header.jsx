import styled from "styled-components";

const Component = styled.div`
  display: inline-table;
  padding: 0px 30px;
  width: -webkit-fill-available;
  position:absolute;

  .logo{
    /* Style for "CEREBRA" */
    width: 226px;
    height: 35px;
    color: #ffffff;
    font-family: Nunito;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24.57px;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "CEREBRA" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    float: left;

  }

  .enleft {
    /* Style for "EN" */
    width: 17px;
    height: 10px;
    float: right;
    color: #ffffff;
    font-family: "Nunito";
    font-size: 14px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 24.57px;
    text-align: left;
    text-transform: uppercase;
    /* Text style for "EN" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    margin-top:25px;
  }

   
`;
const Header = () => {
  return (
    <Component>
      <p className="logo">CEREBRA</p>
      <p className="enleft">EN</p>
    </Component>
  );
};

Header.prototype = {};

export { Header };
