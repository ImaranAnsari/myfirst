import{Link} from 'react-router-dom';
import mainMenuStyle from './MainMenu.module.css';
function MainMenu() {
    return <header className={mainMenuStyle.header}>
        <nav>
            <ul>
                <li> <Link to="/"> Home</Link> </li>
                <li> <Link to="/About">About</Link> </li>
                <li> <Link to="/Contact">Contact</Link> </li>
                <li> <Link to="/Product">Product</Link> </li>
                <li> <Link to="/Add/Product">Add Product</Link> </li>
                <li> <Link to="/update/Product">Update Product</Link> </li>
            </ul>
        </nav>
        
        
        
         
    </header>
}
export default MainMenu;