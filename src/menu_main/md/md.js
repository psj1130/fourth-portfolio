import React, { useState, useEffect, useRef } from "react";
import './md.css';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../../config/contansts";
import useAsync from '../../customHook/useAsync';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

async function getMD() {
  const res = await axios.get(`${API_URL}/menu/md`);
  console.log(res);
  return res.data;
}

const Drink_header = () => {
  return (
    <div id="drink_main_div1">
      <div id="md_back_img">
        <div id="drink_textbox1">
          <div id="drink_textbox1_div1"><p>MD</p></div>
          <div id="drink_textbox1_div2"><p>Always Beside you, <b>EDIYA COFFEE</b></p></div>
        </div>
        <div id="drink_header_DFM">
          <Link to="/product/drink" id="DFM_drink_style">음료</Link>
          <Link to="/product/food" id="DFM_drink_style">푸드</Link>
          <Link to="/product/md" className="backwhite">MD</Link>
        </div>
      </div>
    </div>
  );
}

function MD(props) {
  const [hiddenItems, setHiddenItems] = useState([]);
  const [hiddenItems1, setHiddenItems1] = useState([]);
  const [showMore1, setShowMore1] = useState(8);
  const itemsPerPage = 8;

  const { id } = useParams();
  const [state] = useAsync(() => getMD(id), [id]);
  const { loading, data: pdata, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!pdata) return null;

  // hidden_div를 ON/OFF 형식으로 보여주기위한 함수
  const switchHandler = (index,listNumber) => {
    if (listNumber === 1) {
      setHiddenItems((prevHiddenItems) => {
        const newHiddenItems = [...prevHiddenItems];
        newHiddenItems[index] = !newHiddenItems[index];
        return newHiddenItems;
      });
    } else if (listNumber === 2) {
      setHiddenItems1((prevHiddenItems) => {
        const newHiddenItems = [...prevHiddenItems];
        newHiddenItems[index] = !newHiddenItems[index];
        return newHiddenItems;
      });
    }
  };

  // 더보기 기능 / 더보기를 누를 시 itemsPerPage의 수 만큼 생성됨
  const toggleShowMore1 = () => {
    setShowMore1((prevShowMore) => prevShowMore + itemsPerPage);
  };
  

  // ICED와 HOT 필터링된 데이터 가져오기 seq순서에 맞게
  const sortedData = pdata.sort((a, b) => a.seq - b.seq);

  const settings = {
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <>
      <div id="drink_body">
        <div id="drink_header_container">
          <Drink_header/>
          <div id="drink_main_container">
            <div className="hr-sect">추천 상품</div>
            <Slider {...settings} id='slick-slider'>
              {sortedData.map((a, index) => {
                const imga = a.img_url.split(',');
                return (
                  <div id="drink_relative" key={a.id} style={{ margin: '0 10px' }}>
                    <div id="drink_imgdiv" onClick={() => switchHandler(index,1)}>
                      <div id="drink_imgwarrap">
                        <img src={imga[0]} alt="1" id="drink_img" />
                      </div>
                      <div id="drink_textbox">
                        <p><b>{a.name}</b></p>
                      </div>
                    </div>
                    <div
                      id="drink_hidden"
                      onClick={() => switchHandler(index,1)}
                      style={{ display: hiddenItems[index] ? "block" :"none"}}>
                      <div>
                        <div id="drink_name">
                          <div id="name_kor"><p><b>{a.name}</b></p></div>
                          <div id="name_eng"><p>{a.eng_name}</p></div>
                        </div>
                        <div id="drink_info" ><p>{a.info}</p></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>

            {sortedData.slice(0, showMore1).map((a, index) => {
              const imga = a.img_url.split(',');
              if (index < itemsPerPage || showMore1) {
                return (
                  <div id="drink_relative1" key={a.id} style={{ margin: '10px 10px' }}>
                    <div id="drink_imgdiv1" onClick={() => switchHandler(index,2)}>
                      <div id="drink_imgwarrap">
                        <img src={imga[0]} alt="1" id="drink_img1" />
                      </div>
                      <div id="drink_textbox">
                        <div id="a_name"><p><b>{a.name}</b></p></div>
                        {a.use_yn == 1 && (
                         <Link to={`/order/menu/${a.id}`}>
                         <div id="drink_buy"><p>구매하기</p></div>
                       </Link>
                        )}
                      </div>
                    </div>
                    <div
                      id="drink_hidden1"
                      onClick={() => switchHandler(index,2)}
                      style={{ display: hiddenItems1[index] ? "block" :"none"}}>
                      <div>
                        <div id="drink_name1">
                          <div id="name_kor1"><p><b>{a.name}</b></p></div>
                          <div id="name_eng"><p>{a.eng_name}</p></div>
                        </div>
                        <div id="drink_info1" ><p>{a.info}</p></div>
                      </div>
                    </div>
                  </div>
                );
                }
                return null;
              })}
              <div id="show_drink_list_warrap">
                {showMore1 < pdata.length && (
                <button id="show_drink_list" onClick={toggleShowMore1}>
                  {'더보기  +'}
                </button>
              )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MD;
