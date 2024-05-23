import NavBar from "./componets/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/logo.png";
function App() {
  const items = ["Home" , "Product", "Contact"];
  return (
    <div>
      <NavBar 
      brandName="Creator" 
      imageSrcPath={imagePath}
      navItems={items}/>
    </div>
  )
}

export default App
