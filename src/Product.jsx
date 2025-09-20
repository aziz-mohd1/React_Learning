import "./Product.css";

// let Product = ({title, description, price, features}) =>{
//     // console.log(props.title);
//     // let title = props.title;
//     // const list = features.map((ele)=><li>{ele}</li>);

//     // dynamic styling according to discounts
//     // let isDiscount = price>30000;
//     // let styles = {backgroundColor: isDiscount ? "green" : "blue"};
    
//     return(
//         <div className="Product" style={styles}>
//             <h3>{title}</h3>
//             <h3>{description}</h3>
//             <h3>Rs.{price}/-</h3>
//             { isDiscount ? <p>Discount of 5%</p> : null }
//             {/* <h3>{list}</h3> */}
//         </div>
//     );
// };

function Product({ name, description, mrp, dealPrice }) {
  return (
    <div className="product">
      <h3 className="productTitle">{name}</h3>
      <p>
        {description.map((ele) => (
          <li>{ele}</li>
        ))}
      </p>
      <p className="priceTag"> <span className="strike">{mrp.toLocaleString("en-IN")}</span> &nbsp; {dealPrice.toLocaleString("en-IN")}</p>
    </div>
  );
}

export default Product;