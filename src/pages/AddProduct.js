import React from "react";
import AddProductForm from "../Components/Product/AddProductForm";

function AddProduct() {
    function addProductHandler(newProduct) {
        console.log("newProduct", newProduct)
        fetch("http://localhost:3004/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type':'application/json'

            }
        })
    }
    return <AddProductForm addProductHandler={addProductHandler} />
}

export default AddProduct;