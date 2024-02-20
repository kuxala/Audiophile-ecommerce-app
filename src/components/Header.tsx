import styled from "styled-components";

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
`;
const Li = styled.li`
  color: #fff;
  font-family: Manrope;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 192.308% */
  letter-spacing: 2px;
  text-transform: uppercase;
`;
function Header() {
  return (
    <>
      <header
        style={{ backgroundColor: "#191919", borderBottom: "1px solid gray" }}
      >
        <Nav>
          <img src="../../assets/shared/desktop/logo.svg" width="143px" />
          <Ul>
            <Li>Home</Li>
            <Li>Headphones</Li>
            <Li>Speakers</Li>
            <Li>Earphones</Li>
          </Ul>
          <img
            src="../../assets/shared/desktop/icon-cart.svg"
            width="23px"
            height="30px"
          />
        </Nav>
      </header>
    </>
  );
}

export default Header;
