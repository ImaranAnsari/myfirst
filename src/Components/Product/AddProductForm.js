
import { useRef } from "react";
import Styles from "./AddProductForm.module.css";
import CustomWrapper from "../Layouts/CustomWrapper";
//import Product from "../../pages/Product";

function AddProductForm() {
    const Product_Name_ref = useRef();
    const Image_ref = useRef();
    const Price_ref = useRef();
    const Description_ref = useRef();

    function submitHandler(event) {
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
        console.log(Product_Name);
    }
    return <CustomWrapper>
        <form className={Styles.form} onSubmit={submitHandler}>
            <div className={Styles.groups}>
                <label htmlFor="Product_Name">Product Name</label>
                <input type="test" placeholder="" id="Product_Name" ref={Product_Name_ref} />
            </div>

            <div className={Styles.groups}>
                <label htmlFor="Image">Image</label>
                <input type="test" placeholder="" id="Image" ref={Image_ref} />
            </div>

            <div className={Styles.groups}>
                <label htmlFor="Price">Price</label>
                <input type="test" placeholder="" id="Price" ref={Price_ref} />
            </div>
            <div className={Styles.groups}>
                <label htmlFor="Description">Description</label>
                < textarea rows="5" id="Description" ref={Description_ref} />
            </div>


        </form>

        <div className={Styles.btn}>
            <button>Submit</button>
        </div>
    </CustomWrapper>

}


export default AddProductForm;