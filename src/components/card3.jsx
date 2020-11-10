import styled from "styled-components";
import { Video } from "../subComponents/video";
const Component = styled.div`
max-width: 640px;
margin: auto;
position: relative;
top: -85px;

.line{
  margin: auto;
  border: .1px solid;
  height: 30px;
  width: 0px;
  margin-top: 30px;

}

.contenttext{
  text-align:center
}

.toptext{
  color: #ed145b;
font-family: Nunito;
font-size: 10px;
font-weight: 700;
font-style: normal;
letter-spacing: normal;
line-height: 32px;
text-align: center;
text-transform: uppercase;
/* Text style for "OUR COMPAN" */
font-style: normal;
letter-spacing: 0.6px;
line-height: normal;
}

.main{
  color: #000000;
font-family: Nunito;
font-size: 40px;
font-weight: 400;
font-style: normal;
letter-spacing: normal;
line-height: 58px;
text-align: center;
/* Text style for "We , bette" */
font-weight: 600;
font-style: normal;
letter-spacing: -1.35px;
line-height: normal;
/* Text style for "help you" */
font-style: italic;
letter-spacing: -1.35px;
line-height: normal;
/* Text style for "who love a" */
font-weight: 400;
font-style: normal;
letter-spacing: -1.35px;
line-height: normal;
}

.subtext{
  color: #9fa4af;
font-family: Nunito;
font-size: 13px;
font-weight: 300;
font-style: normal;
letter-spacing: normal;
line-height: 28px;
text-align: center;
/* Text style for "Eaque ipsa" */
font-style: normal;
letter-spacing: normal;
line-height: normal;
}
`;
const Card3 = () => {
  return (
    <Component>
      <Video />
      <div className="line"></div>

      <div className="contenttext">
        <p className="toptext">OUR COMPANY MISSION</p>

        <p className="main">
          We <span>help you</span> better understand those
          <br />
          who love and trust your brand
        </p>

        <p className="subtext">
          Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. <br /> Nemo enim ipsam voluptatem quia
          voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur
          magni dolores eos <br /> qui ratione voluptatem sequi nesciunt. Neque
          porro quisquam est, qui dolorem ipsum quia dolor sit amet, <br />{" "}
          consectetur, adipisci velit, sed quia non numquam eius modi tempora
          incidunt ut labore et dolore magnam <br />
          aliquam quaerat voluptatem.
        </p>
      </div>
    </Component>
  );
};

Card3.prototype = {};

export { Card3 };
