
import Product from "./Product.jsx";

let ProductTab = () => {
  return (
    <>
      <Product title="pen" description="Ball pen for good hand-writing" price={100} features = {["hi-tech", "durable"]}/>
      <Product title="laptop" description="Budget friendly laptop" price={1000} features = {["hi-tech", "durable"]}/>
      <Product title="mobile" description="Iphone 21 PRO X MAX" price={100000} features = {["hi-tech", "durable"]}/>
    </>
  );
};

export default ProductTab;
