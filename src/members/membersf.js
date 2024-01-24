import React from "react";
import './membersf.css'
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";

function MembersFooter (){
  return(
    <div id="member_footer_body">
      <div id="member_footer_container">

        <div id="member_footer_box1">
          <div id="footer_box1_1">
            <div id="footerbox1_text"><p>이디야멤버스 이용약관</p></div>
            <div id="footerbox1_text"><p>개인정보처리방침</p></div>
            <div id="footerbox2_text"><p>위치기반 서비스 이용약관</p></div>
          </div>
          <div id="react_icons">
            <BiLogoInstagramAlt id="react_icon_item"/>
            <FaYoutube id="react_icon_item"/>
            <IoLogoFacebook id="react_icon_item"/>
          </div>
        </div>

        <div id="member_footer_box2">
          <img src="../images/members_main/EDIYA_footer_img.png" alt="1"/>
        </div>

        <div id="member_footer_box3">
          <div id="memeber_footer_box3_1">
            <div><p>(주)이디야</p></div>
            <div><p>서울특별시 강남구 논현로 636 이디야빌딩(서울특별시 강남구 논현동 221-17) | TEL : 02-543-6467 | FAX : 02-543-7191</p></div>
            <div><p>사업자등록번호 : 107-86-16302 | 통신판매업 신고 : 강남 제 002519호 | 대표이사 : 문창기, 권익범</p></div>
            <div><p>ⓒ 2023 EDIYA COFFEE COMPANY.ALL RIGHTS RESERVED</p></div>
          </div>
          <div id="memeber_footer_box3_2"><img src="../images/members_main/EDIYA_footer_img2.png" alt="1"/></div>
        </div>
      </div>
    </div>
  )
}

export default MembersFooter;