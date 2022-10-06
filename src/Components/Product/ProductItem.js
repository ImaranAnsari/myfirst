import Styles from "./ProductItem.module.css";
import CustomWrapper from "../Layouts/CustomWrapper";
function productItem(props) {

    return <li key={props.item.id}>
        <CustomWrapper>
            <div className={Styles.image}>
                <img src={props.item.image} alt="no"/>
            </div>
            <div className={Styles.content}>
                <h2>{props.item.product_name}</h2>
                <p>{props.item.discription}</p>
                <h4>{props.item.price}</h4>

            </div>
            <div className={Styles.btn}>
                <button>Purchage</button>
            </div>
        </CustomWrapper>
    </li>;
}
export default productItem;
