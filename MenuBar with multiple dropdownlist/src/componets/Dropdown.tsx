/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItems from "./MenuItems";

interface ItemList
{
  
    url:string;
    title:string
}
interface SubMenus
{
    submenulist:ItemList[]; 
    dropdown:boolean;
    depthLevel:any;
}
const Dropdown = ({ submenulist, dropdown, depthLevel }:SubMenus) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-item" : "";
    return (
      <ul className={`dropdown-menu ${dropdownClass} ${dropdown ? "show" : ""}`}>
        {submenulist.map((submenu, index) => (
         <MenuItems items={submenu} key={index}  depthLevel={depthLevel} />
        ))}
      </ul>
    );
  };
  
  export default Dropdown;