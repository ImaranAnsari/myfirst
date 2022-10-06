import Styles from "./Layouts.module.css";
import MainMenu from "./MainMenu";

function Layouts(props) {
    return <div className={Styles.mainMenu}>
        <main><MainMenu /></main>
        {props.children}
    </div>
}
export default Layouts;