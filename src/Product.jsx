import "./Product.css";

let Product = ({title, description, price, features}) =>{
    // console.log(props.title);
    // let title = props.title;
    // const list = features.map((ele)=><li>{ele}</li>);

    // dynamic styling according to discounts
    let isDiscount = price>30000;
    let styles = {backgroundColor: isDiscount ? "green" : "blue"};
    return(
        <div className="Product" style={styles}>
            <h3>{title}</h3>
            <h3>{description}</h3>
            <h3>Rs.{price}/-</h3>
            { isDiscount ? <p>Discount of 5%</p> : null }
            {/* <h3>{list}</h3> */}
        </div>
    );
};

export default Product;