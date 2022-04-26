import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchList from '../data/search.json';

function Dropdown() {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  const searchTitle = 'All Symbols';

  const handleFilterKeyword = (e) => {
    const inputValue = e.target.value;

    const ret = searchList.filter((data) => {
      const { name } = data;
      return name.toUpperCase().startsWith(inputValue.toUpperCase()) === true;
    });

    setFilteredData(ret);
  };

  const handleClickKeyword = (e) => {
    const {
      target: { innerText },
    } = e;

    setIsClicked(innerText);
    setIsDisplayed(!isDisplayed);
  };

  return (
    <>
      <Link to={'/'}>돌아가기</Link>
      <div
        className="selectBtn"
        onClick={() => {
          setIsDisplayed(!isDisplayed);
        }}
      >
        {isClicked || searchTitle}
      </div>
      {isDisplayed ? (
        <div className="content">
          <input
            type="search"
            className="searchBox"
            onChange={handleFilterKeyword}
          />
          <h4>{searchTitle}</h4>
          <ul className="options">
            {filteredData?.length > 0
              ? filteredData.map((data) => {
                  const { name, id } = data;
                  return (
                    <li key={id} onClick={handleClickKeyword}>
                      {name}
                    </li>
                  );
                })
              : searchList.map((keyword) => {
                  const { name, id } = keyword;
                  return (
                    <li key={id} onClick={handleClickKeyword}>
                      {name}
                    </li>
                  );
                })}
          </ul>
        </div>
      ) : null}
    </>
  );
}

export default Dropdown;
