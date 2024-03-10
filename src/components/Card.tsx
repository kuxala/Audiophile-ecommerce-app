import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "../App";
import { Link } from "react-router-dom";
import Counter from "./Counter";

type OverlayProps = {
  showOverlay: boolean;
};
export default function Card() {
  const context = useContext(MyContext);

  return (
    <>
      <Overlay
        showOverlay={context.card}
        onClick={() => {
          context.setCard(!context.card);
        }}
      />
      <CardContainer className="animate__animated animate__fadeIn">
        <TopDiv>
          <Cardh1>Card ({context.cart.length})</Cardh1>
          <RemoveAll onClick={() => context.setCart([])}>Remove all</RemoveAll>
        </TopDiv>
        <div>
          {context.cart.map((item: any, index: number) => (
            <CartItem key={index}>
              <ImageBackground>
                <img src={item.image.desktop} width="45px" />
              </ImageBackground>

              <CenterDiv>
                <ItemName>{item.name}</ItemName>
                <Price>{item.price}</Price>
              </CenterDiv>
              <div>
                <Counter />
              </div>
            </CartItem>
          ))}
        </div>
        <TotalDiv>
          <TotalP>Total</TotalP>
          <TotalPBlack>${context.calculateTotal()}</TotalPBlack>
        </TotalDiv>

        <Link to="/checkout">
          <Button
            onClick={() => {
              context.setCard(false);
            }}
          >
            Checkout
          </Button>
        </Link>
      </CardContainer>
    </>
  );
}

const CenterDiv = styled.div`
  /* margin-left: -100px; */
  padding: 8px 16px;
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
const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  position: absolute;
  width: 80%;
  border-radius: 8px;
  background: #fff;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  top: 12%;
  left: 10%;
  padding: 24px;
  z-index: 1000;

  @media only screen and (min-width: 768px) {
    width: 400px;
    z-index: 1000;
    right: -40%;
  }
`;
const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: ${({ showOverlay }) => (showOverlay ? "block" : "none")};
`;
const Button = styled.button`
  background: #d87d4a;
  width: 100%;
  height: 48px;
  border: 0;
  color: #fff;
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  &:hover {
    opacity: 0.8;
  }
`;
const TotalPBlack = styled.p`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
const TotalP = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  opacity: 0.5;
`;
const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 24px;
`;
const RemoveAll = styled.div`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
  text-decoration-line: underline;
  opacity: 0.5;
`;
const TopDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 24px;
`;
const Cardh1 = styled.h1`
  color: #000;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
`;
