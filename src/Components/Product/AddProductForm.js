
import { useRef } from "react";
import Styles from "./AddProductForm.module.css";
import CustomWrapper from "../Layouts/CustomWrapper";
//import Product from "../../pages/Product";

function AddProductForm() {

    const Product_Name_ref = useRef();
    const Image_ref = useRef();
    const Price_ref = useRef();
    const Description_ref = useRef();

    function submittHandler(event) {
        event.preventDefault();
        const Product_Name = Product_Name_ref.current.value;
        const Image = Image_ref.current.value;
        const Price = Price_ref.current.value;
        const Description = Description_ref.current.value;

        const product = {
            Product_Name,
            Image,
            Price,
            Description
        }
        console.log(product);
    }


    return <CustomWrapper>
        <form className={Styles.form} omSubmitt={submittHandler}>
            <div className={Styles.groups}>
                <lebel htmlFor="Product_Name">Product Name</lebel>
                <input type="test" placeholder="" id="Product_Name" ref={Product_Name_ref} />
            </div>

            <div className={Styles.groups}>
                <lebel htmlFor="Image">Image</lebel>
                <input type="test" placeholder="" id="Image" ref={Image_ref} />
            </div>

            <div className={Styles.groups}>
                <lebel htmlFor="Price">Price</lebel>
                <input type="test" placeholder="" id="Price" ref={Price_ref} />
            </div>
            <div className={Styles.groups}>
                <lebel htmlFor="Description">Description</lebel>
                < textarea rows="5" id="Description" ref={Description_ref} />
            </div>


        </form>

        <div className={Styles.btn}>
            <button>Submitt</button>
        </div>
    </CustomWrapper>

}


export default AddProductForm;