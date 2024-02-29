import styled from "styled-components";

export default function Card() {
  return (
    <>
      <CardContainer>
        <TopDiv>
          <Cardh1>Card (number)</Cardh1>
          <RemoveAll>Remove all</RemoveAll>
        </TopDiv>
        <div>
          <div>Card</div>
        </div>
        <TotalDiv>
          <TotalP>Total</TotalP>
          <TotalPBlack>$Number</TotalPBlack>
        </TotalDiv>
        <Button>Checkout</Button>
      </CardContainer>
    </>
  );
}

const Button = styled.button`
  background: #d87d4a;
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
  z-index: 2;
`;
