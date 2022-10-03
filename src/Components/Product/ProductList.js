import productItem from "./ProductItem";

function ProductList(props){

    return <div>Product List

        {props.products.map((item)=>{
            return <li key={item.id}>{item.product_name}</li>;
        })}

    </div>
}
export default ProductList;