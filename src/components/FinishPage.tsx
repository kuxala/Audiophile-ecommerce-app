import { Link } from "react-router-dom";
import styled from "styled-components";
import { MyContext } from "../App";
import { useContext } from "react";

export default function FinishPage() {
  const context = useContext(MyContext);
  return (
    <Overlay>
      <Container>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <circle cx="32" cy="32" r="32" fill="#D87D4A" />
          <path
            d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
            stroke="white"
            stroke-width="4"
          />
        </Svg>
        <H1>Thank you for your order</H1>
        <P>You will recieve an email conformation shortly</P>
        <Card>
          <LeftCol>
            <div>
              {context.cart.map((item: any, index: number) => (
                <CartItem key={index}>
                  <CenterDiv>
                    <ImageBackground>
                      <img src={item.image.desktop} width="45px" />
                    </ImageBackground>
                    <TextDiv>
                      <ItemName>{item.name}</ItemName>
                      <Price>{item.price}</Price>
                    </TextDiv>
                  </CenterDiv>
                  <div>{context.counter}x</div>
                </CartItem>
              ))}
            </div>
          </LeftCol>
          <RightCol>
            <Grant>Grand total</Grant>
            <GrandTotal>${context.total}</GrandTotal>
          </RightCol>
        </Card>

        <Link to="/" style={{ color: "#fff" }}>
          <Button>Back to Home</Button>
        </Link>
      </Container>
    </Overlay>
  );
}

const Grant = styled.h1`
  color: #fff;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
`;

const GrandTotal = styled.p`
  color: #fff;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
`;
const TextDiv = styled.div`
  flex-direction: column;
`;
const CenterDiv = styled.div`
  /* padding-left: -100px; */
  padding: 0 16px;
  display: flex;
  gap: 16px;
  text-align: left;
  align-items: center;
`;
const ItemName = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 166.667% */
`;
const Price = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 178.571% */
  opacity: 0.5;
`;
const ImageBackground = styled.div`
  width: 64px;
  height: 64px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const LeftCol = styled.div`
  width: 60%;
  border-radius: 8px;
  background: #f1f1f1;
`;
const RightCol = styled.div`
  width: 40%;
  border-radius: 0px 8px 8px 0px;
  background: #000;
  color: #fff;
`;
const Card = styled.div`
  min-height: 200px;
  display: flex;
`;

const Button = styled.button`
  width: 100%;
  margin-top: 48px;
  height: 48px;
  border: 0;
  background: #d87d4a;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  /* background: #fbaf85; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 48px;
  width: 40%;
  border-radius: 8px;
  background: #fff;
  position: absolute;
  left: 30%;
  @media only screen and (max-width: 768px) {
    width: 90%;
    left: 0;
    margin: 0 auto;
  }
`;
const H1 = styled.h1`
  padding-bottom: 24px;
  color: #000;
  font-family: Manrope;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 112.5% */
  letter-spacing: 1.143px;
  text-transform: uppercase;
`;
const P = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  padding-bottom: 33px;
`;
const Svg = styled.svg`
  margin-bottom: 24px;
`;
