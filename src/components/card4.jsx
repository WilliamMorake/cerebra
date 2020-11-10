import styled from "styled-components";
import { DropDowns } from "../subComponents/dropDowns";
import { Facts } from "../subComponents/facts";
import { Menu } from "../svg/index";

const Component = styled.div`
  max-width: 640px;
  margin: auto;

  .contentdrop {
    display: flex;
  }

  .title {
    display: -webkit-inline-box;
  }

  p {
    margin: 0;
  }

  .menu svg {
    max-width: max-content;
  }

  .menu {
    width: 50%;
  }

  .dropdowns {
    max-width: 50%;
    width: 50%;
  }
`;
const Card4 = () => {
  return (
    <Component>
      <div className="contentdrop">
        <div className="menu">
          <Menu />
        </div>
        <div className="dropdowns">
          <DropDowns
            title={"Consumer insights"}
            content={
              "Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin at. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris metus.. Donec vel ligula eu erat."
            }
          />

          <DropDowns
            title={"Consumer insights"}
            content={
              "Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin at. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris metus.. Donec vel ligula eu erat."
            }
          />

          <DropDowns
            title={"Consumer insights"}
            content={
              "Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin at. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris metus.. Donec vel ligula eu erat."
            }
          />

          <DropDowns
            title={"Consumer insights"}
            content={
              "Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin at. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris metus.. Donec vel ligula eu erat."
            }
          />

          <DropDowns
            title={"Consumer insights"}
            content={
              "Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin at. Proin sagittis turpis semper purus. Phasellus ut consectetur mauris metus.. Donec vel ligula eu erat."
            }
          />
        </div>
      </div>
      <Facts/>
    </Component>
  );
};

Card4.prototype = {};

export { Card4 };