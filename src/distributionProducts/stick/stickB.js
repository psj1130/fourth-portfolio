import React, { useState } from 'react';
import StickAmericano from './stickAmericano';
import StickLatte from './stickLatte';
import './stickB.css';

const StickB = () => {
  const [selectedCoffee, setSelectedCoffee] = useState('stickAmericano'); // 초기 상태를 아메리카노로 설정

  const handleButtonClick = (coffeeType) => {
    setSelectedCoffee(coffeeType);
  };

  return (
    <div>
      <div id='st_list'>
        <button id='st_list_btn' onClick={() => handleButtonClick('stickAmericano')}>아메리카노</button>
        <button id='st_list_btn' onClick={() => handleButtonClick('stickLatte')}>라떼</button>
      </div>
      <div>
        {/* 아메리카노가 선택된 경우에만 StickAmericano 컴포넌트 표시 */}
        {selectedCoffee === 'stickAmericano' && (
          <StickAmericano
            showInfo={true} // 아메리카노가 보이도록 showInfo를 true로 설정
            handleButtonClick={handleButtonClick}
          />
        )}

        {/* 라떼가 선택된 경우에만 StickLatte 컴포넌트 표시 */}
        {selectedCoffee === 'stickLatte' && (
          <StickLatte
            showInfo={true} // 라떼가 보이도록 showInfo를 true로 설정
            handleButtonClick={handleButtonClick}
          />
        )}
      </div>
    </div>
  );
};

export default StickB;
