/* eslint-disable @typescript-eslint/no-explicit-any */
import Dropdown from "./Dropdown";
import { useState } from "react";
interface ItemValues
{
  items:any
  depthLevel:any
}

const MenuItems = ({ items ,depthLevel} : ItemValues) => {
  const [dropdown, setDropdown] = useState(false);
 
  return (
    <li className="nav-item">
      {items.submenu ? (
        <>
         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
          aria-haspopup="true"
           aria-expanded={dropdown ? "true" : "false"} 
           onClick={() => setDropdown((prev) => !prev)}   
       >
             {items.title}{" "}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          
        </a>
        
          <Dropdown  depthLevel={depthLevel} 
          submenulist={items.submenu}  
          dropdown={dropdown} />
        </>
      ) : (
        <a href={items.url} className="nav-link">{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;