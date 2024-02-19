import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import data from "./data.json";
import ProductPage from "./components/ProductPage";

function App() {
  const [websiteData, setWebsiteData] = useState<any>(data);
  return (
    <>
      <HeaderMobile />
      <ProductPage />
    </>
  );
}

export default App;
