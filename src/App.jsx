import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import  About  from "./components/pages/about";
function App() {
  return <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/products'>Products</Link>
    </nav>

    <Routes>
   <Route path="about" element={<About/>}/>
      </Routes>

  </>;
}

export default App;
