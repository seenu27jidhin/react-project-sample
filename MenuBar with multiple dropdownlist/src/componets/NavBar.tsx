//import { useState } from "react";
//import { Key } from "react";
import "../App.css"
import { menuItemsData } from '../menuItemsData.js';
import MenuItems from "./MenuItems";
// interface ItemList
// {
//     id:number;
//     label:string;
//     link:string
// }
interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  //navItems: ItemList[];
  
}
const NavBar = ({ brandName, imageSrcPath }: NavBarProps) => {
  //const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">{brandName}</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse
         navbar-collapse "
        id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {menuItemsData.map((menu , index ) => {
              return <MenuItems items={menu} key={index} depthLevel={undefined}  />
            })}
           
          </ul>
          <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default NavBar;
