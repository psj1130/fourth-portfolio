import './stickAmericano.css';

const StickAmericano = ({ showInfo, handleButtonClick }) => {
  const americanoInfo = 
    <div id='am_top'>
      <div id='am_container'>
        <div id='am_main'>
          <img  id='' src='/stickimg/beanist_img01.jpg'></img>
          <div id='am_detail'>
            <h2 id='am_detail_h2'>오지날 아메리카노</h2>
            <h3 id='am_detail_h3'>ORIGINAL AMERICANO</h3>
            <p id='am_detail_p'>오리지널 아메리카노는 브라질, 베트남에 이어 세계 3위 원두 생산 국가인 콜롬비아산 SD 인스턴트 BASE를 사용하였습니다. 콜롬비아는 안데스 산맥의 비옥한 화산재 토양과 온화한 기후를 갖고 있어, 커피 생산의 최적지로 알려져 있습니다. 감칠맛과 뛰어난 향기의 특징을 갖고 있습니다.</p>
          </div>
        </div>
        <div id='am_main'>
          <img id='' src='/stickimg/beanist_img02.jpg'></img>
          <div id='am_detail'>
            <h2 id='am_detail_h2'>마일드 아메리카노</h2>
            <h3 id='am_detail_h3_b'>MILD AMERICANO</h3>
            <p id='am_detail_p'>마일드 아메리카노는 콜롬비아와 페루 사이에 위치한 에콰도르산 FD 인스턴트 BASE 를 사용하였습니다. 에콰도르는 고품질의 커피 생산을 위한 충분한 고도, 적당한 기후 조건, 비옥한 토양, 알맞은 일조량과 강수량을 갖고 있어, 천혜의 장소로 손꼽히고 있습니다. 은은한 스모크 향과, 진하면서도 부드러운 바디감이 특징입니다.</p>
          </div>
        </div>
        <div id='am_main'>
          <img id='' src='/stickimg/beanist_img03.jpg'></img>
          <div id='am_detail'>
            <h2 id='am_detail_h2'>스페셜 에디션</h2>
            <h3 id='am_detail_h3_c'>SPECIAL EDITION</h3>
            <p id='am_detail_p'>스페셜 에디션은 WBC(World Barista Championship) 우승자 데일 해리스와 공동 개발한 제품으로 콜롬비아산 고급 분무건조 원두 2종을 블렌딩하여 용해도가 좋으며 콜롬비아 원두의 고유 향미를 구현하였습니다.아로마가 풍부하며, 따뜻한 산미와 균형 잡힌 바디감이 특징입니다.</p>
          </div>
        </div>
      </div>
    </div>
  
  const handleClick = () => {
    handleButtonClick('stickAmericano'); // 선택된 커피를 부모 컴포넌트에 전달
  };

  return (
    <div>
      {showInfo && (
        <div>
          {americanoInfo}
        </div>
      )}
    </div>
  );
};

export default StickAmericano;
