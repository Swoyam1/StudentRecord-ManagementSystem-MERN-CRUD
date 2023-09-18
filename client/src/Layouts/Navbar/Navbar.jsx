import React from "react";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <div>
        <h3 className={style.title}>MERN-CRUD</h3>
      </div>
      <div className={style.links}>
        <Link to="/" className={style.link}>
          Home
        </Link>
        <Link to="/add" className={style.link}>
          Add
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
