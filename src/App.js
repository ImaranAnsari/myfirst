
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Layouts from "./Components/Layouts/Layouts";
import AddProduct from "./pages/AddProduct";
import UpdateProduct from "./pages/UpdateProduct";

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Layouts>

      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/About' element={<About />}> </Route>
        <Route path='/Contact' element={<Contact />}> </Route>
        <Route path='/Product' element={<Product />}> </Route>
        <Route path='/Add/Product' element={<AddProduct />}> </Route>
        <Route path='/Update/Product' element={<UpdateProduct />}> </Route>
      </Routes>
    </Layouts>
  );
}
export default App;
