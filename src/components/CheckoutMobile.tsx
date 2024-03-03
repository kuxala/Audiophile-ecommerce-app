import styled from "styled-components";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {
  name: string;
  mail: string;
  number: number;
  address: string;
  zip: number;
  city: string;
  country: string;
  emoney: number;
  pin: number;
};

export default function CheckoutMobile() {
  const [checkbox, setCheckbox] = useState<string>("money");
  const border = {
    border: "1px solid #d87d4a",
  };
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Props>();

  const onSubmit: SubmitHandler<Props> = (data) => setFormSubmitted(true);

  return (
    <WholeComponent onSubmit={handleSubmit(onSubmit)}>
      <GoBack>Go Back</GoBack>
      <Component>
        <CheckoutH1>CHECKOUT</CheckoutH1>
        <div>
          <HeaderH1>Billing Details</HeaderH1>

          <EachDiv>
            <SmallP>Name</SmallP>
            <Input
              placeholder="Alexei Ward"
              type="text"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && <Errors>{errors.name.message}</Errors>}
          </EachDiv>

          <div>
            <SmallP>Email address</SmallP>
            <Input
              placeholder="alexei@mail.com"
              {...(register("mail"),
              {
                required: true,
              })}
            />
          </div>
          <div>
            <SmallP>Phone number</SmallP>
            <Input
              placeholder="+005 232 123 123"
              type="number"
              {...register("number", {
                required: "Phone is required",
              })}
            />
            {errors.number && <Errors>{errors.number.message}</Errors>}
          </div>
        </div>
        <div>
          <HeaderH1>Shipping info</HeaderH1>
          <div>
            <SmallP>your address</SmallP>
            <Input
              placeholder="Vakes Avenue"
              {...register("address", {
                required: "Address is requred",
              })}
            />
            {errors.address && <Errors>{errors.address.message}</Errors>}
          </div>
          <div>
            <SmallP>Zip code</SmallP>
            <Input
              placeholder="9500"
              {...register("zip", {
                required: "Zip is required",
              })}
            />
            {errors.zip && <Errors>{errors.zip.message}</Errors>}
          </div>
          <div>
            <SmallP>City</SmallP>
            <Input
              placeholder="Tbilisi"
              type="text"
              {...register("city", {
                required: "City is required",
              })}
            />
            {errors.city && <Errors>{errors.city.message}</Errors>}
          </div>
          <div>
            <SmallP>Country</SmallP>
            <Input
              placeholder="Georgia"
              type="string"
              {...register("country", {
                required: "Country is required",
              })}
            />
            {errors.country && <Errors>{errors.country.message}</Errors>}
          </div>
        </div>

        <div>
          <HeaderH1>Payment details</HeaderH1>
          <Payment>
            <Emoney
              onClick={() => {
                setCheckbox("money");
              }}
              style={checkbox === "money" ? border : {}}
            >
              e-Money
            </Emoney>
            <Cash
              onClick={() => {
                setCheckbox("cash");
              }}
              style={checkbox === "cash" ? border : {}}
            >
              Cash on Delivery
            </Cash>
          </Payment>
          {checkbox === "money" ? (
            <EachDiv>
              <div>
                <SmallP>e-Money Number</SmallP>
                <Input
                  placeholder="2312314123"
                  {...register("emoney", {
                    required: "eMoney Number is required",
                  })}
                  type="number"
                />
                {checkbox === "money"
                  ? errors.emoney && <Errors>{errors.emoney.message}</Errors>
                  : null}
              </div>
              <div>
                <SmallP>e-Money Pin</SmallP>
                <Input
                  placeholder="8723"
                  {...register("pin", {
                    required: "eMoney Pin is required",
                  })}
                  type="number"
                />
                {checkbox === "money"
                  ? errors.pin && <Errors>{errors.pin.message}</Errors>
                  : null}
              </div>
            </EachDiv>
          ) : null}
        </div>
      </Component>

      <Summary>
        <SummaryH1>Summary</SummaryH1>
        <div>
          <div>Cards</div>
          <div>Cards</div>
        </div>

        <AllDivs>
          <Divs>
            <LeftP>Total</LeftP>
            <RightP>$Price</RightP>
          </Divs>
          <Divs>
            <LeftP>Shipping</LeftP>
            <RightP>$50</RightP>
          </Divs>
          <Divs>
            <LeftP>VAT(INCLUDED)</LeftP>
            <RightP>$Price</RightP>
          </Divs>
          <Divs>
            <LeftP>Grand Total</LeftP>
            <GrandTotal>$Price</GrandTotal>
          </Divs>
        </AllDivs>
        <Button type="submit">Continue & Pay</Button>
      </Summary>
    </WholeComponent>
  );
}

const Errors = styled.div`
  color: #cd2c2c;
  font-family: Manrope;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.214px;
  padding-bottom: 10px;
`;
const Button = styled.button`
  margin-top: 32px;
  margin-bottom: 64px;
  border: 0;
  height: 48px;
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
`;
const AllDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 32px;
`;
const SummaryH1 = styled.h1`
  color: #000;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1.286px;
  text-transform: uppercase;
  padding: 32px 0;
`;
const GrandTotal = styled.div`
  color: #d87d4a;
  text-align: right;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
const Divs = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LeftP = styled.p`
  color: #000;
  font-family: Manrope;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 166.667% */
`;

const RightP = styled.p`
  color: #000;
  text-align: right;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
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
  margin-bottom: 32px;
  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

const Emoney = styled.div`
  border-radius: 8px;
  height: 56px;

  border: 1px solid #cfcfcf;
  background: #fff;
  padding: 1.2rem;
  color: #000;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
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
const WholeComponent = styled.form`
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
  margin-bottom: 32px;
`;

const Summary = styled.div`
  padding: 24px;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 8px;
  background: #fff;
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
