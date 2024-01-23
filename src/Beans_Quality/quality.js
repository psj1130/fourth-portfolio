import React from "react";
import './quality.css';
import { Link } from 'react-router-dom';

function Quality(){
  return(
    <div>
      <div>

      <div id="Beans_bannerv">
          <img id="Beans_banner_imgv" src="../images/Beans_Quality_Source/Quality/Quality1.jpg" alt='1'/>
          <div id="Beans_banner_textv">
            <p id="Beans_banner_text1v">품질</p>
            <p id="Beans_banner_text2v">ALWAYS BESIDE YOU, EDIYA BEAN</p>
          </div>
          <div id="Beans_Quality_linkv">
            <div id="Beans_linkv">
              <Link to="/Beans" id="Beans_link_av" className="Beans_Quality_select_style">원두</Link>
            </div>
            <div id="Quality_linkv">
              <Link to="/Quality" id="Quality_link_av" >품질</Link>
            </div>
          </div>
        </div>

        <div id="Beans_main_bodyv">
          <div id="Beans_1divv"><p id="Beans_1div_ptagv">커피 한 잔의 진심</p></div>

          <div>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/zD1zlEXZCG4?si=yZWjdMkBLNBz7bl3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
          </div>

          <div id="Quality_2div">
            <div id="Quality_2div_warrap">
              <div id="Quality_img_back"></div>
              <div ><img id="Quality_2div_img1" src="../images/Beans_Quality_Source/Quality/Quality2.jpg" alt='1'/></div>
              <div id="Quality_2div_1div">
                <img id="Quality_2div_img2" src="../images/Beans_Quality_Source/Quality/Quality3.png" alt='1'/></div>
            </div>
            <div id="Quality_2div_textboxv">
              <div><p id="Quality_2div_textbox_p1"><b>01</b></p></div>
              <div id="Quality_textbox_2div"><p id="">품질의 원천, <b>드림팩토리</b></p></div>
              <div>
                <p id="Quality_2div_textbox_p3">
                연면적 4,000평에서 연간 원두커피 6,000톤 생산이 가능한 드림팩토리는 <b>커피 전문가로 구성된 R&D와 섬세한 생두 선별,최첨단 로스터기</b>를 통해 절정의 풍미와 깊은 향을 구현하는 품질의 원천입니다.
                </p>
              </div>
            </div>
          </div>

          <div id="Quality_2div">
            <div id="Quality_3div_textboxv">
              <div><p id="Quality_2div_textbox_p1"><b>02</b></p></div>
              <div id="Quality_textbox_3div"><p>품질의 비법, <b>로스팅</b></p></div>
              <div>
                <p id="Quality_4div_textbox_p3">
                커피는 산지에 따라 기본적인 속성부터 맛과 향이 모두 다릅니다. 이디야는 최첨단 시스템을 통해 <b>로스팅 전과 로스팅 후  복합적으로 적용</b>하고, 각 생두별로 선택한 최적의 로스터에 <b>'정점 로스팅'을 진행하여 최적의 맛을 구현</b>합니다.
                </p>
              </div>
            </div>
            <div id="Quality_2div_warrap">
              <div id="Quality_2img_back"></div>
              <div><img id="Quality_2div_img1" src="../images/Beans_Quality_Source/Quality/Quality4.jpg" alt='1'/></div>
              <div id="Quality_2div_1div">
                <img id="Quality_3div_img1" src="../images/Beans_Quality_Source/Quality/Quality5.jpg" alt='1'/>
              </div>
            </div>
          </div>

          <div id="Quality_2div">
            <div id="Quality_2div_warrap">
              <div id="Quality_2img_back"></div>
              <div><img id="Quality_2div_img1" src="../images/Beans_Quality_Source/Quality/Quality6.jpg" alt='1'/></div>
              <div id="Quality_2div_1div">
                <img id="Quality_4div_img1" src="../images/Beans_Quality_Source/Quality/Quality7.jpg" alt='1'/>
              </div>
            </div>
            <div id="Quality_4div_textboxv">
              <div><p id="Quality_2div_textbox_p1"><b>03</b></p></div>
              <div id="Quality_textbox_4div"><p id="">품질의 비법, <b>특허등록</b></p></div>
              <div>
                <p id="Quality_4div_textbox_p3">
                이디야커피는 <b>국내 커피 프랜차이즈 최초로 복합 블렌딩 커피 및 그 제조 방법에 대한 특허등록권리</b>(특허 제10-2510948호)를 2023년 3월 15일 취득하였습니다.
                </p>
              </div>
            </div>
          </div>

          <div id="Quality_2div">
            <div id="Quality_5div_textboxv">
              <div><p id="Quality_2div_textbox_p1"><b>04</b></p></div>
              <div id="Quality_textbox_5div"><p id="">품질의 결과, <b>이디야 블렌드</b></p></div>
              <div>
                <p id="Quality_2div_textbox_p3">
                분리와 결합을 반복하여 만드는 <b>복합적 배전구조</b>는 지금까지 느끼지 못했던 진한 초콜릿 향을 표현합니다.<b>묵직한 농도감과 바디감, 고소한 에프터 테이스트</b>를 바탕으로 <b>커피 고유의 절묘한 밸런스</b>를 즐겨보세요.
                </p>
              </div>
            </div>
            <div id="Quality_2div_warrap">
              <div id="Quality_img_back"></div>
              <div ><img id="Quality_2div_img1" src="../images/Beans_Quality_Source/Quality/Quality8.jpg" alt='1'/></div>
              <div id="Quality_2div_1div">
                <img id="Quality_5div_img2" src="../images/Beans_Quality_Source/Quality/Quality9.png" alt='1'/></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quality;