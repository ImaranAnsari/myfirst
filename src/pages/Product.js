
import { Component } from "react";
import ProductList from "../Components/Product/ProductList";


function Product() {
    let products = [
        {
            id: "p1",
            product_name: "City Tour",
            image: "https://drive.google.com/file/d/1sknRnMlPK53Vjt92QKEYzF1V9A7ur7Ze/view?usp=sharing",
            description: "Its a wonderful tour.",
            price: "25000"
        },
        {
            id: "p2",
            product_name: "Forest Tour",
            image: "https://drive.google.com/file/d/0B-BnXe94NzotZ3RtNzV0aW8tQTA/view?usp=sharing&resourcekey=0-x06X6JX1zOLRCKL97SbHRw",
            description: "Its a Refresh tour.",
            price: "40000"

        },
        {
            id: "p3",
            product_name: "work Tour",
            image: "https://drive.google.com/file/d/1qeoIE1HZJyhdPmAybXcz-JPUIM5ZN7tU/view?usp=sharing",
            description: "Good Experience on tour.",
            price: "20000"
        }
    ]
    return <div>

        <ProductList products={products} />

    </div>

}
export default Product;