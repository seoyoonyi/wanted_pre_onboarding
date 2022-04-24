import React, { useState } from 'react';

function Tab() {
  const types = ['감자', '고구마', '카레라이스'];
  const [active, setActive] = useState(types[0]);
  const [borderDistance, setBorderDistance] = useState(0);
  const borderActive = (index) => {
    setBorderDistance(100 * index);
  };
  return (
    <>
      <div className="tabmenuWrap">
        <div className="inner">
          <div className="tabmenuGroup">
            {types.map((type, index) => (
              <button
                className={active === type ? 'tabmenu active' : 'tabmenu'}
                key={Date.now().toString + type}
                onClick={(e) => {
                  setActive(type);
                  borderActive(index);
                }}
              >
                {type}
              </button>
            ))}
          </div>
          <span
            className="border"
            style={{ transform: `translateX(${borderDistance}%)` }}
          ></span>
        </div>
      </div>
    </>
  );
}

export default Tab;
