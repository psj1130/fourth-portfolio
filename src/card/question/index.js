import React, {useState} from 'react'
import { useParams} from 'react-router-dom';
import '../question/questionmain.css'
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import useAsync from '../../config/useAsync';


//컴포넌트 가져오기
import All from './all';
import Purchase from './purchase';
import Refund from './refund';
import Use from './use';
import Group from './group';
import Guitar from './guitar';

// async function getQnA() {
//   try {
//     const QnAdata = await axios.patch(`${API_URL}/qna/update`);
//들어오는 경로가 기본적으론 /qna임 그럼 서버는 /qna 요청을 처리를 하고
 //라우터로 이동하게됨
//     console.log('QnA로 받아온 데이터', QnAdata);
//     return QnAdata.data;
//   }
//   catch(err) {
//     console.error('에러 발생:', err);
//   }
// }


async function getQnA() {
  try {
    const QnAdata = await axios.get(`${API_URL}/qna`);
    console.log('QnA로 받아온 데이터', QnAdata);
    return QnAdata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Question() {
  const [content, setContent] = useState("전체");
  const [selectcomponent, setSelectcomponent] = useState('all');



  const { id } = useParams();
  const [QnAstate] = useAsync(() => getQnA(id), [id]);
  const { loading, data:QnAdata, error } = QnAstate;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!QnAdata) return null;

  const options = [
    {key:1, value:"전체"},
    {key:2, value:"제목"},
    {key:3, value:"내용"}
  ];

  const components = {
    all: { title: '전체', component: <All QnAdata={QnAdata}/> },
    purchase: { title: '구매', component: <Purchase QnAdata={QnAdata}/> },
    refund: { title: '환불', component: <Refund QnAdata={QnAdata}/> },
    use: { title: '사용', component: <Use QnAdata={QnAdata}/> },
    group: { title: '단체', component: <Group QnAdata={QnAdata}/> },
    guitar: { title: '기타', component: <Guitar QnAdata={QnAdata}/> }
    //QnAdata라는 변수 자체를 쓴다는거 (data가 저장되어있음)
  };
  
  const cardBox = () => {
    switch (selectcomponent) {
      case 'purchase':
        return <Purchase QnAdata={QnAdata}/>;
      case 'refund':
        return <Refund QnAdata={QnAdata}/>;
      case 'use' :
        return <Use QnAdata={QnAdata}/>;
      case 'group':
        return <Group QnAdata={QnAdata}/>;
      case 'guitar':
        return <Guitar QnAdata={QnAdata}/>;
      default:
        return null;
    }
  }

  const onchanglist = (e) => {
    setContent(e.currentTarget.value);
  }

    return(
      <div className="qna-container">
        <div className="qna-title-container">
          <div className="qna-con-text">
            <h1 className='con1-title-text'>잔액조회</h1>
              <div className="qna-info-text">
                <p>빠르고 간편하게 잔액을 확인해보세요</p>
              </div>
            <div className="qna-btn">
              <div className="qna-btn-con">
                <span className='qna-btn-con-lists'>
                  <a href='/card/giftcardrouters/'>기프트카드</a>
                </span>
                <span className='qna-btn-con-lists'>
                  <a href="https://brand.naver.com/ediyagift">모바일 상품권</a>
                </span>
                <span className='qna-btn-con-lists'>
                  <a href='/card/giftcardrouters/giftbuy'>단체·기업 구매</a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="qna-datail-container">
          <div className="qna-guide-link">
            <span>HOME</span>
            <span>기프트카드
            </span>
            FAQ
          </div>
          <div className="qna-con-box">
            <div className="qna-search-container">
              <div className="qna-search-boxs">
                <div className="qna-search-dropdown">
                  <select className='qna-drowdown-list' onChange={onchanglist} value={content}>
                    {options.map((item)=>(
                      <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                  </select>
                </div>
                <div className="qna-serach-result-box">
                  <input type="text" className='qna-serach-input-box'/>
                  <button type="button" className='qna-serach-button'></button>
                </div>
              </div>
            </div>
            <div className="qna-detail-box-container">
              <div className="qna-detail-box-lists">
                {Object.keys(components).map((key)=> (
                  <div key={key} className={`qna-select-box ${selectcomponent === key ? 'select' : ''}`}
                  onClick={() => setSelectcomponent(key)}>
                    <p>{components[key].title}</p>
                  </div>
                ))}
              </div>
            </div>
            {components[selectcomponent].component}
          </div>
        </div>
      </div>
    );
}

export default Question;
