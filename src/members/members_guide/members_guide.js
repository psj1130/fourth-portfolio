import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { BsDot } from "react-icons/bs";
// import MembersHeader from "../membersh";

import '../members_guide/members_guide.css'

function Members_guide(){
  
  return(
    <>
      <div id="members_guide_body">
        <div id="members_guide_container">
          
          <div id="guide_header_textbox">
            <div id="guide_header_div1"><p>멤버십 안내</p></div>
            <div id="guide_header_div2"><p>새로워진 이디야 멤버스를 만나보세요.</p></div>
            <div id="guide_header_div3"><p>스탬프가 적립될수록 등급이 올라갑니다.</p></div> {/* 나중에 지우기 */}
          </div>
  
          <div id="guide_main_treebox">
  
            <div id="main_treebox1">
              <div id="main_trb1_1div">
                <div id="main_trb1_textbox">
                  <div id="trb1_textbox1"><p>WELCOME</p></div>
                  <div id="trb1_textbox2"><p>회원 신규 가입 시</p></div>
                </div>
                <div>
                  <img src="../images/members_guide/membershipguid1.png" id="trb1_img" alt="1"/>
                </div>
              </div>
              <div id="main_trb1_2div">
                <div id="trb1_2div_1"><IoMdCheckmark id="check_icon"/><p>멤버스 전용 이벤트 참여</p></div>
                <div id="trb1_2div_2" ><BsDot id="BsDot"/><div></div><p>회원가입 프로모션은 별도로 진행됩니다.</p></div>
              </div>
            </div>

            <div id="main_treebox1">
              <div id="main_trb1_1div">
                <div id="main_trb1_textbox">
                  <div id="trb1_textbox1"><p>WHITE</p></div>
                  <div id="trb1_textbox2"><p>스탬프 <b id="num5blue">5</b>개 이상 적립 시</p></div>
                </div>
                <div id="main_treebox1_imgdiv">
                  <img src="../images/members_guide/membershipguid2.png" id="trb1_img" alt="1"/>
                </div>
              </div>
              <div id="main_trb1_2div">
                <div id="trb1_2div_1"><IoMdCheckmark id="check_icon"/><p>WHITE 쿠폰팩 증정 (최초1회)</p></div>
                <div id="trb1_2div_1"><IoMdCheckmark id="check_icon"/><p>멤버스 전용 이벤트 참여</p></div>
              </div>
            </div>

            <div id="main_treebox1">
              <div id="main_trb1_1div">
                <div id="main_trb1_textbox">
                  <div id="trb1_textbox1"><p>BLUE</p></div>
                  <div id="trb1_textbox2"><p>스탬프 <b id="num5blue">20</b>개 이상 적립 시</p></div>
                  
                </div>
                <div id="main_treebox1_imgdiv">
                  <img src="../images/members_guide/membershipguid3.png" id="trb1_img" alt="1"/>
                </div>
              </div>
              <div id="main_trb1_2div">
                <div id="trb1_2div_1"><IoMdCheckmark id="check_icon"/><p>BLUE 쿠폰팩 증정 (연1회)</p></div>
                <div id="trb1_2div_1"><IoMdCheckmark id="check_icon"/><p>멤버스 적립시마다 스탬프 발행</p></div>
                <div id="trb1_2div_1"><IoMdCheckmark id="check_icon"/><p>멤버스 전용 이벤트 참여</p></div>
              </div>
            </div>
            
          </div>
          <div id="guidetextbox3"><p>※ 승급에 소요된 멤버스 적립은 등급 혜택을 받음과 동시에 소멸됩니다.</p></div>

          
        </div>
        <div id="service_useguide_back">
            <div id="service_useguide_container">
              <div id="useguide_textbox">
                <div id="useguide_textbox_1"><p>이용안내</p></div>
                <div id="useguide_textbox_2"><p>※ 회원 전용 프로모션은 운영에 따라 변경될 수 있습니다.</p></div>
              </div>
              <div id="service_useguide_items">

                <div id="service_useguide_item">
                  <div><img src="../images/members_guide/membershipguid4.png" alt="1"/></div>
                  <div>
                    <div id="service_item_text1"><p>스탬프 적립기준</p></div>
                    <div id="service_item_text2"><p>매장 제조음료 1잔당<br/>스탬프 1개가 적립됩니다.</p></div>
                  </div>
                </div>

                <div id="service_useguide_item">
                  <div><img src="../images/members_guide/membershipguid5.png" alt="1"/></div>
                  <div>
                    <div id="service_item_text1"><p>스탬프 유효기간</p></div>
                    <div id="service_item_text2"><p>스탬프 유효기간은 스탬프별<br/>1년입니다.</p></div>
                  </div>
                </div>

                <div id="service_useguide_item">
                  <div><img src="../images/members_guide/membershipguid6.png" alt="1"/></div>
                  <div>
                    <div id="service_item_text1"><p>등급상승</p></div>
                    <div id="service_item_text2"><p>승급조건 충족 시 익일부터<br/>적용됩니다.</p></div>
                  </div>
                </div>

                <div id="service_useguide_item">
                  <div><img src="../images/members_guide/membershipguid7.png" alt="1"/></div>
                  <div>
                    <div id="service_item_text1"><p>등급기간</p></div>
                    <div id="service_item_text2"><p>승급 일자로부터 1년간<br/>유효합니다.</p></div>
                  </div>
                </div>

                <div id="service_useguide_item">
                  <div><img src="../images/members_guide/membershipguid8.png" alt="1"/></div>
                  <div>
                    <div id="service_item_text1"><p>등급변경</p></div>
                    <div id="service_item_text2"><p>1년간 등급 유지 후 승급조건에<br/>해당하는 등급으로 변경됩니다.</p></div>
                  </div>
                </div>
            </div>
            </div>
  
          </div>
      </div>
    </>
  )
}

export default Members_guide;