
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

import { Routes, Route } from 'react-router-dom';
 
import MainMenu from "./Components/Layouts/MainMenu";

function App() {
  return (
    <div>
      <MainMenu/>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/About' element={<About />}> </Route>
        <Route path='/Contact' element={<Contact />}> </Route>
        <Route path='/Product' element={<Product />}> </Route>
      </Routes>
    </div>
  );
}
export default App;
