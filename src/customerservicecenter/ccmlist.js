import { Link } from 'react-router-dom';

function Ccmlist() {
  return (
      <div id='cus_list'>
          <button id='ccm_list_btn'><Link to='/cs'>고객의 소리</Link></button>
          <button id='ccm_list_btn'><Link to="/cs/ccm">소비자중심경영(CCM)</Link></button>
          <button id='ccm_list_btn'><Link to="/cs/partnership">제휴제안</Link></button>
      </div>
  );
}

export default Ccmlist;
