import { useState } from "react";
import HeaderMobile from "./components/HeaderMobile";
import data from "./data.json";
import ProductPage from "./components/ProductPage";
import Header from "./components/Header";

function App() {
  const [websiteData, setWebsiteData] = useState<any>(data);
  return (
    <>
      {/* <HeaderMobile /> */}
      <Header />
      <ProductPage />
    </>
  );
}

export default App;
