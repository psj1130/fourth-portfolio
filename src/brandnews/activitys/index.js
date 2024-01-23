import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './society.css';

function Society() {
  const [selectBoxlist, setSelectBoxlist] = useState('activity');
  const navigate = useNavigate();

  const components = {
    activity: { title: '메이트 희망기금',},
    campus: { title: '캠퍼스 희망기금', },
    hygiene: { title: '식수위생 캠페인',},
    accompany: { title: '이디야의 동행', },
    otheractivities: { title: '기타 활동', },
  };

  const handleComponentClick = (key) => {
    setSelectBoxlist(key);
    // 페이지 이동 로직 추가
    navigate(`/brandnews/${key}`);
  };

  const renderContent = () => {
    switch (selectBoxlist) {
      case 'campus':
        return (
          <>
            오랜 시간 아껴주신 여러분의 성원에 보답하기 위해 <br />
            이디야커피가 대한민국 이디야 가족 모두를 응원합니다.
          </>
        );
      case 'hygiene':
        return (
          <>
            세계 곳곳 더 밝은 내일을 위해 <br />
            맑은 물, 그 이상의 가치를 나눕니다.
          </>
        );
      case 'accompany':
        return (
          <>
            나눔의 기쁨을 행동으로<br />
            이디야커피가 먼저 실천합니다.
          </>
        );
      case 'otheractivities':
        return (
          <>
            더불어 함께 사는 이웃에게 사랑을 나눠드립니다.
          </>
        );
      default:
        return (
          <>
            오랜 시간 아껴주신 여러분의 성원에 보답하기 위해 <br />
            이디야커피가 대한민국 이디야 가족 모두를 응원합니다.
          </>
        );
    }
  };

  return (
    <div className='society-body'>
      <div className="society-bg">
        <div className="society-title-container">
          <h2>이디야커피와 함께 하는 향기로운 동행</h2>
          <p>{renderContent()}</p>
          <div className="society-title-box-container">
            <div className="society-title-box-list">
              {Object.keys(components).map((key) => (
                <div key={key} className="society-title-box" onClick={() => handleComponentClick(key)}>
                  <p>{components[key].title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Society;
