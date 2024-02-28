import styled from "styled-components";

export default function Checkout() {
  return (
    <WholeComponent>
      <GoBack>Go Back</GoBack>
      <Component>
        <CheckoutH1>CHECKOUT</CheckoutH1>
        <div>
          <HeaderH1>Billing Details</HeaderH1>

          <EachDiv>
            <SmallP>Name</SmallP>
            <Input placeholder="Alexei Ward" />
          </EachDiv>

          <div>
            <SmallP>Email address</SmallP>
            <Input placeholder="alexei@mail.com" />
          </div>
          <div>
            <SmallP>Phone number</SmallP>
            <Input placeholder="+005 232 123 123" />
          </div>
        </div>
        <div>
          <HeaderH1>Shipping info</HeaderH1>
          <div>
            <SmallP>your address</SmallP>
            <Input placeholder="Vakes Avenue" />
          </div>
          <div>
            <SmallP>Zip code</SmallP>
            <Input placeholder="9500" />
          </div>
          <div>
            <SmallP>City</SmallP>
            <Input placeholder="Tbilisi" />
          </div>
          <div>
            <SmallP>Country</SmallP>
            <Input placeholder="Georgia" />
          </div>
        </div>

        <div>
          <HeaderH1>Payment details</HeaderH1>
          <Payment>
            <Emoney>e-Money</Emoney>
            <Cash>Cash on Delivery</Cash>
          </Payment>
          <div>
            <SmallP>e-Money Number</SmallP>
            <input />
          </div>
          <div>
            <SmallP>e-Money Pin</SmallP>
            <input />
          </div>
        </div>
      </Component>

      <Summary>Summary</Summary>
    </WholeComponent>
  );
}
const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const Cash = styled.div`
  height: 56px;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  background: #fff;
  padding: 1.2rem;
`;

const Emoney = styled.div`
  border-radius: 8px;
  height: 56px;
  border: 1px solid #d87d4a;
  background: #fff;
  padding: 1.2rem;
`;
const Input = styled.input`
  margin-top: 8px;
  margin-bottom: 24px;
  width: 100%;
  height: 56px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #cfcfcf;
  background: #fff;
  padding: 2rem;
  font-size: 14px;
`;
const EachDiv = styled.div``;
const SmallP = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
`;
const WholeComponent = styled.div`
  background: #fafafa;
  min-height: 100vh;
`;
const HeaderH1 = styled.h1`
  padding-bottom: 16px;
  padding-top: 24px;
  color: #d87d4a;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 0.929px;
  text-transform: uppercase;
`;
const CheckoutH1 = styled.h1`
  color: #000;
  font-family: Manrope;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Component = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 23px;
  border-radius: 8px;
  background: #fff;
`;

const Summary = styled.div`
  padding-top: 165px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const GoBack = styled.p`
  width: 90%;
  display: flex;
  margin: 0 auto;
  padding-top: 24px;
  padding-bottom: 24px;
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  opacity: 0.5;
  @media only screen and (min-width: 768px) {
    color: #000;
    font-family: Manrope;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    padding-top: 70px;
    padding-bottom: 24px;
  }
`;
