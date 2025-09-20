
import Product from "./Product.jsx";

let ProductTab = () => {
  let styles = {display: "flex"};
  return (
    <div style={styles}>
      <Product name="Logitech MX Master" description={["8000 DPI", "5 Programmable Buttons"]} mrp={12495} dealPrice={8999}/>
      <Product name="Apple Pencil (2nd Gen)" description={["Intuitive Touch Surface", "Designed for iPad Pro"]} mrp={11900} dealPrice={9199}/>
      <Product name="Zebronics" description={["Designed for iPad Pro", "Intuitive Touch Surface"]} mrp={1599} dealPrice={899}/>
      <Product name="Petronics Toad" description={["Wireless Mouse 2.3GHz", "Optical Orientation"]} mrp={599} dealPrice={278}/>
    </div>
  );
};

export default ProductTab;
