import styled from "styled-components";
import { CardBoard } from "../subComponents/cardboad";
import { CardBoard1, CardBoard2, CardBoard3 } from "../svg";

const Component = styled.div`
  padding-top: 100px;
`;
const Card6 = () => {
  return (
    <Component>
      <CardBoard
        title={
          <p className="head">
            the thing about us is we <br /> think big, huge
          </p>
        }
        svg={CardBoard1}
      />
      <CardBoard
        left
        title={
          <p className="head">
          Superior data and  <br /> recommendations
          </p>
        }
        svg={CardBoard2}
      />
      <CardBoard
        title={
          <p className="head">
           Easy to use software <br/> for ambitious execs
          </p>
        }
        svg={CardBoard3}
      />
    </Component>
  );
};

Card6.prototype = {};

export { Card6 };
