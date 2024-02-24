import { Link } from "react-router-dom";
import "../styles/HeaderMobile.css";
import { useContext } from "react";
import { MyContext } from "../App";

function HeaderMobile({ hamburger, sethamburger }: any) {
  const context = useContext(MyContext);
  console.log("context in header", context.hamburger);
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
          <img src="../../assets/shared/desktop/icon-cart.svg" />
        </div>
      </header>
    </>
  );
}
export default HeaderMobile;
