import Styles from "./ProductItem.module.css";
import CustomWrapper from "../Layouts/CustomWrapper";
function productItem(props) {

    return <li key={props.item.id}>
        <CustomWrapper>
            <div className={Styles.image}>
                {/* {JSON.stringify(props)} */}
                <img src={props.item.Image} alt="NoImage" />
            </div>
            <div className={Styles.content}>

                <h2>{props.item.Product_Name}</h2>
                <p>{props.item.Description}</p>
                <h4>{props.item.Price}</h4>

            </div>
            <div className={Styles.btn}>
                <button>Purchage</button>
            </div>
        </CustomWrapper>
    </li>;
}
export default productItem;
