import React from "react";
import styled from "styled-components";
import { DropIconInActive, DropIconActive } from "../svg/index";

const Component = styled.div`

display: flex;
  .holder {
    min-height: 50px;
    border-top: 0.1px solid rgb(99, 88, 88, 0.2);
    padding-top: 12px;
    width: -webkit-fill-available;
  }



  .title {
    /* Style for "Consumer i" */
    height: 27px;
    font-family: Poppins;
    font-size: 13px;
    font-weight: 700;
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    text-align: left;
    /* Text style for "Consumer i" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
  }

  .content {
    /* Style for "Lorem ipsu" */
    height: 95px;
    color: #747474;
    font-family: Verdana;
    font-size: 11px;
    font-weight: 400;
    font-style: normal;
    letter-spacing: normal;
    line-height: 26px;
    text-align: left;
    /* Text style for "Lorem ipsu" */
    font-style: normal;
    letter-spacing: normal;
    line-height: normal;
    padding-left: 28px;
  }

  svg {
   
    padding-top: 20px;

    margin: 0 10px;
  }
`;

const getIcon = (state) => {
  return state ? <DropIconActive /> : <DropIconInActive />;
};
const DropDowns = ({ title, content }) => {
  const [active, setActive] = React.useState(false);
  return (
    <Component>
      {getIcon(active)}
      <div className="holder">
        <div
          className="title"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          <p
            style={
              active
                ? {
                    color: "#ed145b",
                  }
                : {}
            }
          >
            {title}
          </p>
        </div>

        {active && (
          <div className="content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </Component>
  );
};

DropDowns.prototype = {
  title: String,
  content: String,
};

export { DropDowns };
