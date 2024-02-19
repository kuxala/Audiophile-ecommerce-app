import { useState } from "react";
import FooterMobile from "./components/FooterMobile";
import data from "./data.json";

function App() {
  const [websiteData, setWebsiteData] = useState<any>(data);
  return (
    <>
      <FooterMobile websiteData={websiteData} />
    </>
  );
}

export default App;
