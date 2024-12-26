import React from "react";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
  return (
    <div>
      <Link  to={"/"}><button class="btn">Home</button></Link>
      <Link  to={"/about"}><button class="btn">About</button></Link>
      <Link  to={"/contact"}><button class="btn">Contact</button></Link>
      <Link  to={"/services"}><button class="btn">Services</button></Link>
    </div>
  );
};

export default NavBar;