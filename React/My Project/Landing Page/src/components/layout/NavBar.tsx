import React from "react";
import { Link } from "react-router-dom";


const NavBar: React.FC = () => {
  return (
    <div>
      <Link to={"/"}><button className="btn">Home</button></Link>
      <Link to={"/services"}><button className="btn">Services</button></Link>
      <Link to={"/about"}><button className="btn">About</button></Link>
      <Link to={"/portfolio"}><button className="btn">Portfolio</button></Link>
      <Link to={"/blog"}><button className="btn">Blog</button></Link>
      <Link to={"/pricing"}><button className="btn">Pricing</button></Link>
      <Link to={"/contact"}><button className="btn">Contact</button></Link>
    </div>
  );
};

export default NavBar;