import { useParams } from "react-router-dom";
import styled from "styled-components";

function SingleProduct() {
  const { product } = useParams();
  console.log(product);
  return (
    <>
      <div>
        <p>Go Back</p>
        <LeftCol>
          <img />
        </LeftCol>
        <RightCol>
          <span>new product</span>
          <h1>NAMES</h1>
        </RightCol>
      </div>
    </>
  );
}
export default SingleProduct;
const LeftCol = styled.div``;
const RightCol = styled.div``;
