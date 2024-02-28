import { Routes, Route } from "react-router-dom";
import ProductPage from "../components/ProductPage";
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers";
import Earphones from "../pages/Earphones";
import SingleProduct from "../pages/SingleProduct";
import { useContext } from "react";
import { MyContext } from "../App";
import Checkout from "../components/Checkout";
import CheckoutMobile from "../components/CheckoutMobile";

function Routers({ websiteData }: any) {
  const context = useContext(MyContext);
  console.log(context.screenSize);

  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route
          path="/headphones"
          element={<Headphones websiteData={websiteData} />}
        />
        <Route
          path="/speakers"
          element={<Speakers websiteData={websiteData} />}
        />
        <Route
          path="/earphones"
          element={<Earphones websiteData={websiteData} />}
        />
        <Route path="/headphones/:product" element={<SingleProduct />} />
        <Route path="/speakers/:product" element={<SingleProduct />} />
        <Route path="/earphones/:product" element={<SingleProduct />} />
        <Route
          path="/checkout"
          element={
            context.screenSize.width > 768 ? <Checkout /> : <CheckoutMobile />
          }
        />
      </Routes>
    </>
  );
}

export default Routers;
