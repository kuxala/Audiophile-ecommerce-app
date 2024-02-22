import { useParams } from "react-router-dom";
import styled from "styled-components";

function SingleProduct() {
  //params
  const { product } = useParams();
  console.log(product);
  return (
    <>
      <div>
        <p>Go Back</p>
        <Component>
          <LeftCol>
            <img src="" />
          </LeftCol>
          <RightCol>
            <span>new product</span>
            <h1>NAMES</h1>
            <p>Some description</p>
            <h3>Price</h3>
            <input />
            <button className="yellow-btn"></button>
          </RightCol>
        </Component>
      </div>
    </>
  );
}
export default SingleProduct;

const Component = styled.div`
  display: flex;
`;
const LeftCol = styled.div``;
const RightCol = styled.div``;
