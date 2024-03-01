import styled from "styled-components";
import { MyContext } from "../App";
import { useContext } from "react";

export default function Counter() {
  const context = useContext(MyContext);

  return (
    <>
      <Div>
        <Minus
          onClick={() => {
            context.setCounter(context.counter - 1);
          }}
        >
          -
        </Minus>
        <Number>{context.counter}</Number>
        <Plus
          onClick={() => {
            context.setCounter(context.counter + 1);
          }}
        >
          +
        </Plus>
      </Div>
    </>
  );
}
const Number = styled.div`
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Div = styled.div`
  width: 120px;
  height: 48px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
`;
const Minus = styled.div`
  opacity: 0.5;
  width: 16px;
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
const Plus = styled.div`
  opacity: 0.5;
  width: 16px;
  color: #000;
  text-align: center;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
