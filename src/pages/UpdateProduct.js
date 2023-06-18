import React from "react";
import { useNavigate } from "react-router-dom";

import UpdateProductForm from "../Components/Product/UpdateProductForm";

function UpdateProduct() {
    const navigate = useNavigate();
    function UpdateProductHandler(newProduct) {
        fetch("http://localhost:3004/product", {
            method: "POST",
            body: JSON.stringify(newProduct),
            headers: {
                'Content-Type': 'application/json'

            }
        })
            .then(Response => navigate("/", { replace: true }))

            .catch(err => console.log(err));
    }
    return <UpdateProductForm UpdateProductHandler={UpdateProductHandler} />
}

export default UpdateProduct;