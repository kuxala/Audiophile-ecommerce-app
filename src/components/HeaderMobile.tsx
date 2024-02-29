import { Link } from "react-router-dom";
import "../styles/HeaderMobile.css";
import { MyContext } from "../App";
import { useContext } from "react";

function HeaderMobile({ hamburger, sethamburger }: any) {
  const context = useContext(MyContext);
  console.log(context.card);
  return (
    <>
      <header>
        <div className="header-div">
          <img
            src="../../assets/shared/desktop/icon-hamburger.svg"
            onClick={() => {
              sethamburger(!hamburger);
            }}
          />
          <Link to="/">
            <img src="../../assets/shared/desktop/logo.svg" />
          </Link>
          <img
            src="../../assets/shared/desktop/icon-cart.svg"
            onClick={() => {
              context.setCard(!context.card);
            }}
          />
        </div>
      </header>
    </>
  );
}
export default HeaderMobile;
