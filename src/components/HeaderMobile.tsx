import { Link } from "react-router-dom";
import "../styles/HeaderMobile.css";

function HeaderMobile({ hamburger, sethamburger }: any) {
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
