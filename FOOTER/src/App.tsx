import NavBar from "./componets/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/logo.png";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Footer from './pages/Footer'; 
import { Route, Routes } from "react-router-dom";
function App() {
  const items = [
      { id:1, label:"Home",link:'/' }, 
      {id:2, label:"Product",link:'/product'},
      {id:3,label:"Contact",link:'/contact'},
      {id:4, label:"Login",link:'/login'},
      {id:5,label:"Sign UP",link:'/register'},
     ];
  return (
    <>
      <NavBar 
      brandName="Creator" 
      imageSrcPath={imagePath}
      navItems={items}/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/register" element={< Register/>} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
      <Footer imageSrcPath={imagePath}  navItems={items}/>
    </>
  )
}

export default App
  