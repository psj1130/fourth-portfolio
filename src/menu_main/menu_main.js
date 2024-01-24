import React from "react";
import './menu_main.css'
import { Link } from "react-router-dom";

function Menu_main (){
  return(
    <>
      <div id="Menu_main_body">
        <div id="Menu_main_container">
          <div id="Menu_main_div1">
            <img className="menu_main_img" src="../images/menu/menu_1.jpg" alt="1"/>
            <div id="menu_textbox1">
              <div id="menu_textbox1_div1"><p>메뉴</p></div>
              <div id="menu_textbox1_div2"><p>Always Beside you, EDIYA COFFEE</p></div>
              <div id="menu_textbox1_div3"><p>한 잔의 커피 그 이상의 감동을 경험하세요.</p></div>
              
              <div id="menu_header_DFM">
                <Link to="/product/drink" id="DFM_div_style">음료</Link>
                <Link to="/product/food" id="DFM_div_style">푸드</Link>
                <Link to="/product/md" id="DFM_div_style">MD</Link>
              </div>
            </div>
          </div>

          <div id="Menu_main_div1">
            <img className="menu_main_img" src="../images/menu/menu_2.jpg" alt="1"/>
            <div id="menu_textbox2">
              <div id="menu_textbox2_div1"><p>음료</p></div>
              <div id="menu_textbox2_div2"><p>특별한 경험을 선사합니다.</p></div>
              <div id="menu_textbox2_div3"><p>오직 품질에 대한 열정,<br/>이디야의 노력을 음료 한 잔에 가득 담았습니다.</p></div>
              <a id="menu_detail" href="/product/drink">자세히 보기</a>
            </div>
          </div>

          <div id="Menu_main_div1">
            <img className="menu_main_img" src="../images/menu/menu_3.jpg" alt="1"/>
            <div id="menu_textbox3">
              <div id="menu_textbox3_div1"><p>베이커리</p></div>
              <div id="menu_textbox3_div2"><p>갓 구워낸 신선함, 그 맛과 영양을 그대로</p></div>
              <div id="menu_textbox3_div3"><p>좋은 재료를 엄선해 만든 빵으로 든든한 하루를 시작하세요.</p></div>
              <a id="menu_detail1"  href="/product/food">자세히 보기</a>
            </div>
          </div>

          <div id="Menu_main_div1">
            <img className="menu_main_img" src="../images/menu/menu_4.jpg" alt="1"/>
            <div id="menu_textbox2">
              <div id="menu_textbox2_div1"><p>MD</p></div>
              <div id="menu_textbox2_div2"><p>특별함을 더해줄 상품들</p></div>
              <div id="menu_textbox2_div3"><p>이디야커피의 다양한 컬렉션으로 당신의 일상을 더 특별하게!</p></div>
              <a id="menu_detail"  href="/product/md">자세히 보기</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Menu_main;