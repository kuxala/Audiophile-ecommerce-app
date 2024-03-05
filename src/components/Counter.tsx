import styled from "styled-components";
import { MyContext } from "../App";
import { useContext } from "react";

export default function Counter() {
  const { counter, setCounter } = useContext(MyContext);

  const handleIncrement = () => {
    const quantity = 1;
    setCounter([...counter, ...Array(quantity).fill(1)]);
  };

  const handleDecrement = () => {
    if (counter.length > 1) {
      setCounter(counter.slice(0, -1));
    }
  };

  return (
    <>
      <Div>
        <Minus onClick={handleDecrement}>-</Minus>
        <Number>{counter.length}</Number>
        <Plus onClick={handleIncrement}>+</Plus>
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
