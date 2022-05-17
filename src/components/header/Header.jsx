import React, { useState } from "react";
import { MyBotton } from "../UI/myButton/MyBotton";
import Logo from "./../assets/img/javascript-logo-svgrepo-com.svg";
import BurgerMenu from "./burgerMenu/BurgerMenu";

export const Header = () => {
  const [burgerMenu, setBurgerMenu]=useState(false)
  const items = [
    { value: "Main", href: "./main", icon: "add" },
    { value: "Service", href: "./service", icon: "api" },
    { value: "Profile", href: "./profile", icon: "Token" },
    { value: "Settings", href: "./settings", icon: "Javascript" },
  ];
  return (
    <div className="header__content">
      <div className="header__logo">
        <img src={Logo} alt="" />
      </div>
      <div className="header__links">
        <a href="/">HTML</a>
        <a href="/">CSS</a>
        <a href="/">REACT</a>
        <a href="/">REDUX</a>
        <a href="/">TYPESCRIPT</a>
      </div>
      <div>
        <MyBotton>Contacts</MyBotton>
      </div>
      <div className="burger__menu" onClick={()=>setBurgerMenu(!burgerMenu)}>
        <span></span>
      </div>
      <BurgerMenu active={burgerMenu} setActive={setBurgerMenu} header={"Burger menu"} items={items} />
    </div>
  );
};
