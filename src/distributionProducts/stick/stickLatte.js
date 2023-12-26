import './stickLatte.css';

const StickLatte = ({ showInfo, handleButtonClick }) => {
  const latteInfo = 
    <div id='la_top'>
      <div id='la_container'>
        <div id='la_container_a'>
          <div id='la_main'>
            <img  id='' src='/stickimg/beanist_img04.jpg'></img>
            <h3 id='la_detail_h3_d'>BEANIST CAFFE LATTE</h3>
            <h2 id='la_detail_h2'>비니스트 카페 라떼</h2>
            <p id='la_detail_p_d'>이디야 다크블루 블렌드의 고소함과 부드러운 라떼의 조화!</p>
          </div>
          <div id='la_main'>
            <img  id='' src='/stickimg/beanist_img05.jpg'></img>
            <h3 id='la_detail_h3_e'>BEANIST VANILLA LATTE</h3>
            <h2 id='la_detail_h2'>비니스트 바닐라 라떼</h2>
            <p id='la_detail_p_e'>마다가스카르산 바닐라빈 특유의 고급스러운 달콤함이 특징!</p>
          </div>
        </div>
        <div id='la_container_a'>
          <div id='la_main'>
            <img  id='' src='/stickimg/beanist_img06.jpg'></img>
            <h3 id='la_detail_h3_f'>BEANIST CHOCOLATE CHIP LATTE</h3>
            <h2 id='la_detail_h2'>비니스트 초콜릿 칩 라떼</h2>
            <p id='la_detail_p_f'>벨기에 초콜릿 칩의 진하고 부드러운 맛 그대로</p>
          </div>
          <div id='la_main'>
            <img  id='' src='/stickimg/beanist_img07.jpg'></img>
            <h3 id='la_detail_h3_g'>BEANIST TOFFEE NUT LATTE</h3>
            <h2 id='la_detail_h2'>비니스트 토피 넛 라떼</h2>
            <p id='la_detail_p_g'>토피 카라멜과 코코아의 달콤한 풍미와 아몬드의 고소함이 한가득!</p>
          </div>
        </div>
      </div>
    </div>
  
  const handleClick = () => {
    handleButtonClick('stickLatte'); // 선택된 커피를 부모 컴포넌트에 전달
  };

  return (
    <div>
      {showInfo && (
        <div>
          {latteInfo}
        </div>
          )}
    </div>
  );
};

export default StickLatte;
