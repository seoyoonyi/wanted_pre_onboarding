import React, { useState } from 'react';

function Dropdown() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const serachList = [
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'BTCUSD.PERP',
    'XRPUSD.PERP',
    'WERTYU.PERP',
    'BHJKLH.PERP',
    'QWERTY.PERP',
  ];
  const title = 'All Symbols';
  const filterKeyword = (e) => {
    const inputValue = e.target.value;

    const ret = serachList.filter((data) => {
      return data.toUpperCase().startsWith(inputValue.toUpperCase()) === true;
    });
    setFilteredData(ret);
  };

  const clickKeyword = (e) => {
    const {
      target: { innerText },
    } = e;
    setIsClicked(innerText);
    setIsDisplayed(!isDisplayed);
  };

  return (
    <>
      <div
        className="selectBtn"
        onClick={() => {
          setIsDisplayed(!isDisplayed);
        }}
      >
        {isClicked || title}
      </div>
      {isDisplayed ? (
        <div className="content">
          <input type="search" className="searchBox" onChange={filterKeyword} />
          <h4>{title}</h4>
          <ul className="options">
            {filteredData?.length > 0
              ? filteredData.map((data, index) => (
                  <li key={index} onClick={clickKeyword}>
                    {data}
                  </li>
                ))
              : serachList.map((keyword, index) => (
                  <li key={index} onClick={clickKeyword}>
                    {keyword}
                  </li>
                ))}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Dropdown;
