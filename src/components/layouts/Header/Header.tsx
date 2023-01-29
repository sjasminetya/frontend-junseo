import React from "react";
import { ICONS } from "../../../configs";
import styles from "./styles.module.css";
import { Link, useNavigate } from "react-router-dom";
import { RouterPath } from "../../../routes";

const Header = () => {
  const navigate = useNavigate();
  const checkActive = (path: string) => {
    return window.location.pathname === path;
  };
  return (
    <nav className={["w-full px-24 flex items-center justify-between", styles.navbar].join(" ")}>
      <h3>Junseo</h3>
      <ul className="flex">
        <li><Link className={checkActive("/home") ? styles.active : styles["non-active"]} to="/home">Home</Link></li>
        <li><Link className={checkActive("/blog") ? styles.active : styles["non-active"]} to="/blog">Blog</Link></li>
        <li><Link className={checkActive("/about") ? styles.active : styles["non-active"]} to="/about">About</Link></li>
        <li><Link className={checkActive("/help") ? styles.active : styles["non-active"]} to="/help">Help</Link></li>
        <li><img alt="icons search" src={ICONS.SEARCH} /></li>
        <li><img alt="icons user" src={ICONS.USER} /></li>
        <li><img alt="icons star" src={ICONS.STAR} /></li>
        <li><img alt="icons shopping cart" className="cursor-pointer" onClick={() => navigate(RouterPath.CART)} src={ICONS.SHOPPINGCART} /></li>
      </ul>
    </nav>
  );
};

export default Header;
