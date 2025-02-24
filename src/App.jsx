import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import  About  from "./components/pages/about";
import NotFound from "./components/pages/NotFound";
import HomePage from "./components/pages/HomePage";
import Products from "./components/pages/Products";
function App() {
  return <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>

    <Routes>
   <Route path="about" element={<About/>}/>
   <Route path="homepage" element={<HomePage/>}/>
   <Route path="products" element={<Products/>} />
   <Route path="*" element={<NotFound/>} />
      </Routes>

  </>;
}

export default App;
