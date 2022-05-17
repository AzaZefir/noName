import React from "react";

const BurgerMenu = ({ header, items,active,setActive }) => {
  return (
    <div className={active? 'menu active': 'menu'} onClick={()=>setActive(false)}>
      <div className="blur"></div>
      <div className="menu__content" onClick={(e)=>e.stopPropagation()}>
        <div className="menu__header">{header}</div>
        <ul>
          {items.map((item) => (
            <li key={item.value}>
              <a href={item.href}>{item.value}</a>
                  <span className="material-symbols-outlined">{item.icon}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
