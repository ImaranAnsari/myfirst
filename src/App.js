
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Routes, Route } from 'react-router-dom';
import MainMenu from "./MainMenu/MainMenu";
function App() {
  return (
    <div>
      <MainMenu/>
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/About' element={<About />}> </Route>
        <Route path='/Contact' element={<Contact />}> </Route>
      </Routes>
    </div>
  );
}
export default App;
