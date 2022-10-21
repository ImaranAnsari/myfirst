import React from "react";
import { useNavigate } from "react-router-dom";

import AddProductForm from "../Components/Product/AddProductForm";

function AddProduct() {
    const navigate= useNavigate();
    function addProductHandler(newProduct) {
        fetch("http://localhost:3004/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'

            }
        })
            .then(Response => navigate("/",{replace:true}))
            
            .catch (err=> console.log(err));
    }
    return <AddProductForm addProductHandler={addProductHandler} />
}

export default AddProduct;