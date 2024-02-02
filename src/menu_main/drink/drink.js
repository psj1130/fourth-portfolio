import React, { useState} from "react";
import './drink.css';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { API_URL } from "../../config/contansts";
import useAsync from '../../customHook/useAsync';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IoSearch } from "react-icons/io5";

async function getdrink() {
  const res = await axios.get(`${API_URL}/menu/drink`);
  console.log(res);
  return res.data;
}

const Drink_header = () => {
  return (
    <div id="drink_main_div1">
      <div id="drink_back_img">
        <div id="drink_textbox1">
          <div id="drink_textbox1_div1"><p>음료</p></div>
          <div id="drink_textbox1_div2"><p>Always Beside you, <b>EDIYA COFFEE</b></p></div>
        </div>
        <div id="drink_header_DFM">
          <Link to="/product/drink" className="backwhite">음료</Link>
          <Link to="/product/food" id="DFM_drink_style">푸드</Link>
          <Link to="/product/md" id="DFM_drink_style">MD</Link>
        </div>
      </div>
    </div>
  );
}

function Drink(props) {
  const [hiddenItems, setHiddenItems] = useState([]); //슬릭 슬라이드의 hiddden_div를 ON/OFF 형식으로 보여주기위해 만든 useState
  const [hiddenItems1, setHiddenItems1] = useState([]);  // hiddden_div를 ON/OFF 형식으로 보여주기위해 만든 useState
  const [icedChecked, setIcedChecked] = useState(false); //체크박스의 값을 받아 ICED가 포함된 아이템을 보여주기위해 만든 useState
  const [hotChecked, setHotChecked] = useState(false); //체크박스의 값을 받아 HOT이 포함된 아이템을 보여주기위해 만든 useState
  const [searchText, setSearchText] = useState(''); //검색용 useState
  const [showMore1, setShowMore1] = useState(8); //화면 켰을 시 보여주는 item들의 갯수
  const itemsPerPage = 8; //추가되는 아이템들의 갯수


  
  
  const { id } = useParams();
  const [state] = useAsync(() => getdrink(id), [id]);
  const { loading, data: pdata, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!pdata) return null;

  const sortedData = [...pdata].sort((a, b) => a.seq - b.seq);
  
  // ICED와 HOT 필터링된 데이터 가져오기
  const filteredData = sortedData.filter((item) => {
    const isIcedMatch = !icedChecked || item.name.includes('ICED');
    const isHotMatch = !hotChecked || item.name.includes('HOT');
    const isSearchMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
    return isIcedMatch && isHotMatch && isSearchMatch;
  });

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

  // 더보기 기능 함수
  const toggleShowMore1 = () => {
    setShowMore1((prevShowMore) => prevShowMore + itemsPerPage);
  };
  
  const handleIcedChange = () => {
    setIcedChecked(!icedChecked);
    // HOT 체크박스가 true일 때, ICED 체크박스를 변경할 때 false로 설정
    if (hotChecked) {
      setHotChecked(false);
    }
  };

  // HOT 체크박스 변경 시
  const handleHotChange = () => {
    setHotChecked(!hotChecked);
    // ICED 체크박스가 true일 때, HOT 체크박스를 변경할 때 false로 설정
    if (icedChecked) {
      setIcedChecked(false);
    }
  };

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
                          {/*  */}
                          <div id="name_kor"><p><b>{a.name}</b></p></div>
                          <div id="name_eng"><p>{a.eng_name}</p></div>
                        </div>
                        <div id="drink_info" ><p>{a.info}</p></div>
                        <div id="drink_ingredient">
                          <div id="ingredient1">
                            <p>칼로리 <b>({a.ingredient_cal})</b></p>
                            <p>단백질 <b>({a.ingredient_protein})</b></p>
                            <p>나트륨 <b>({a.ingredient_na})</b></p>
                          </div>
                          <div id="ingredient2">
                            <p>당 <b>({a.ingredient_sugar})</b></p>
                            <p>포화지방<b>({a.ingredient_sf})</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
            <div id="drink_search">
              <div id="drink_search_container">
                <div id="drink_search_1">
                  <div id="search_1text"><p>음료 검색</p></div>
                  <div><input id="dsearch" type="text"value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/><IoSearch /></div>
                </div>  
                <div id="drink_search_2">
                  <input
                    type="checkbox"
                    id="drink_search_checkbox1"
                    checked={icedChecked}
                    onChange={handleIcedChange}
                  />
                  <p>ICED</p>
                  <input
                    type="checkbox"
                    id="drink_search_checkbox2"
                    checked={hotChecked}
                    onChange={handleHotChange}
                  />
                  <p>HOT</p>
                </div>
              </div>
            </div>

            {filteredData.slice(0, showMore1).map((a, index) => {
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
                        {a.use_yn == 1 && ( // This condition checks if use_yn is true
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
                        <div id="drink_ingredient">
                          <div id="ingredient1">
                            <p>칼로리 <b>({a.ingredient_cal})</b></p>
                            <p>단백질 <b>({a.ingredient_protein})</b></p>
                            <p>나트륨 <b>({a.ingredient_na})</b></p>
                          </div>
                          <div id="ingredient2">
                            <p>당 <b>({a.ingredient_sugar})</b></p>
                            <p>포화지방<b>({a.ingredient_sf})</b></p>
                            <p>카페인<b>({a.ingredient_caf})</b></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
                }
                return null;
              })}
              <div id="show_drink_list_warrap">
                {showMore1 < filteredData.length && (
                <button id="show_drink_list" onClick={toggleShowMore1}>
                  {'더보기 +'}
                </button>
              )}
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drink;
