
import { useState } from "react";
import { useEffect } from "react";
import ProductList from "../Components/Product/ProductList";

function Product() {
    let [product, setProduct] = useState([]);
    let [isDataFeching, setIsDataFeching] = useState(true);

    useEffect(() => {
        setIsDataFeching(true);
        fetch("http://localhost:3004/product",)
            .then(Response => Response.json())
            .then(responseData => {
                setIsDataFeching(false);
                setProduct(responseData.data);
            })
            .catch(err => console.log(err));

    }, []);




    if (isDataFeching) {
        return <div>
            Data is loading......
        </div>
    }
    return <div>
        with data
        <ProductList products={product} />
    </div>
}
export default Product;