import styled from "styled-components";

const Component = styled.div`
  

  .name {
    /* Style for "Deger Tura" */
    color: #ed145b;
    font-family: Nunito;
    font-size: 15px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 28px;
    text-align: center;
    /* Text style for "D, eger Tu" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .title {
    /* Style for "CTO" */
    color: #a1a1a1;
    font-family: "Libre Baskerville";
    font-size: 10px;
    font-style: italic;
    letter-spacing: normal;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    /* Text style for "CTO" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .image {
    /* Style for "Your image" */
    width: 151px;
    height: 215px;
    border-radius: 10px;
    border: 1px solid #000000;
    background-color: #91bceb;
    margin: 0px 49px;
  }
`;

const Profile = ({ name, title, color }) => {
  return (
    <Component>
      <div
        className="image"
        style={{
          backgroundColor: color,
        }}
      ></div>

      <div className="contents">
        <p className="name">{name}</p>

        <p className="title">{title}</p>
      </div>
    </Component>
  );
};

Profile.prototype = {
  name: String,
  title: String,
};

export { Profile };
