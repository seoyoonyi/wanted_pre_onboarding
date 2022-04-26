import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuList from '../data/menu.json';

const Tab = () => {
  const [active, setActive] = useState(menuList[0].name);
  const [moveDistance, setMoveDistance] = useState(0);
  const borderActive = (index) => {
    setMoveDistance(100 * index);
  };

  const handleClickTab = (name, index) => {
    setActive(name);
    borderActive(index);
  };

  return (
    <>
      <Link to={'/'}>돌아가기</Link>
      <div className="tabmenuWrap">
        <div className="inner">
          <div className="tabmenuGroup">
            {menuList.map((menu, index) => {
              const { name, id } = menu;
              return (
                <button
                  className={active === name ? 'tabmenu active' : 'tabmenu'}
                  key={id}
                  onClick={() => handleClickTab(name, index)}
                >
                  {name}
                </button>
              );
            })}
          </div>
          <span
            className="border"
            style={{
              transform: `translateX(${moveDistance}%)`,
              transition: '.5s',
            }}
          ></span>
        </div>
      </div>
    </>
  );
};

export default Tab;
