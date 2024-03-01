import styled from "styled-components";
import { Link } from "react-router-dom";
import { MyContext } from "../App";
import { useContext } from "react";

function Header() {
  const context = useContext(MyContext);
  console.log(context.hamburger);
  return (
    <>
      <header
        style={{
          backgroundColor: "#000",
        }}
      >
        <Nav>
          <Link to="/">
            <img src="../../assets/shared/desktop/logo.svg" width="143px" />
          </Link>
          <Ul>
            <Link to="/">
              <Li>Home</Li>
            </Link>
            <Link to="/headphones">
              <Li>Headphones</Li>
            </Link>
            <Link to="/speakers">
              <Li>Speakers</Li>
            </Link>
            <Link to="/earphones">
              <Li>Earphones</Li>
            </Link>
          </Ul>
          <img
            src="../../assets/shared/desktop/icon-cart.svg"
            width="23px"
            height="30px"
            onClick={() => {
              context.setCard(!context.card);
            }}
          />
        </Nav>
        {/* <Border></Border> */}
      </header>
    </>
  );
}

export default Header;
// const Border = styled.div`
//   width: 80%;
//   height: 1px;
//   background-color: rgba(255, 255, 255, 0.3);
//   margin: 0 auto;
// `;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 165px;
`;

const Ul = styled.ul`
  display: flex;
  color: #fff;
  list-style: none;
  gap: 34px;
  margin-left: -50px;
`;
const Li = styled.li`
  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 2px;
  text-transform: uppercase;
`;
