import React, { useRef, useState } from 'react';

function Dropdown() {
  const [searchedKeywords, setSerachedKeywords] = useState([]);
  const [searchDisplay, setSearchDisplay] = useState(false);
  const inputRef = useRef({ value: '' });

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

  const filterKeyword = (keyword) => {
    if (!keyword) {
      // 빈값이 넘어오는 경우
      // 사용자가 값을 입력했다가 다시 지우는 경우 모든 키워드가 필터링을 통과하므로 문제가 생기기 때문에 이 로직이 필요함
      return keyword;
    }
    return serachList.filter((data) => {
      return data.toUpperCase().startsWith(keyword.toUpperCase()) === true;
    });
  };

  const searchKeyword = (e) => {
    const result = filterKeyword(e.target.value);
    setSerachedKeywords(result);
  };

  const clickKeyword = (e) => {
    const {
      target: { innerText },
    } = e;
    inputRef.current.value = innerText;
    const result = filterKeyword(innerText);
    setSerachedKeywords(result);
  };

  return (
    <>
      <div className="dropdownWrap">
        <div className="selectBtn">
          <h2>검색목록</h2>
          <ul>
            {serachList.map((symbol, index) => (
              <li onClick={clickKeyword} key={index}>
                {symbol}
              </li>
            ))}
          </ul>
          <hr />
        </div>
        <div className="content">
          <div className="search">
            <form action=""></form>
            <input
              type="search"
              onChange={searchKeyword}
              value={inputRef.current.value}
              ref={inputRef}
            />
          </div>
          <div className="resultGroup">
            <h2>검색결과</h2>
            <ul className="result">
              {searchedKeywords?.length > 0 ? (
                searchedKeywords.map((keyword, index) => (
                  <li key={index}>{keyword}</li>
                ))
              ) : (
                <li>찾을 수 없습니다</li>
              )}
            </ul>
          </div>
          {/* TODO 
          - 메인페이지로 돌아가기
           */}
        </div>
      </div>
    </>
  );
}

export default Dropdown;
