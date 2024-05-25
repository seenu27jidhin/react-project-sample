import NavBar from "./componets/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from "./assets/logo.png";
function App() {
  const items = [
      { id:1, label:"Home",link:'/' }, 
      {id:2, label:"Product",link:'/product'},
      {id:3,label:"Contact",link:'/contact'},
     ];
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
