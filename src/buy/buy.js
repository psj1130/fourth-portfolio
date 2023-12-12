import "./buy.css";
import { Link, useParams } from "react-router-dom";
// import { API_URL } from "../config/contansts";
// import { getCookie } from "../loginpage/cookies";
import React from "react";
import axios from "axios";
import { useState } from "react";
// import useAsync from "../customHook/useAsync";

// async function getBuy(userid) {
//   const res = await axios.get(`${API_URL}/reservationlist/${userid}`)
//   console.log(res);
//   return res.data;
// }
const MemberCount = () => {
  const [count, setCount] = useState(0);
  const Plus = () => {
    setCount(prevCount => prevCount + 1);
  };
  const Minus = () => {
    if(count == 0) {
      return;
    }
    setCount(prevCount => prevCount - 1);
  };
  
  return (
    <div className="member-count">
      <div className="member-count-button" onClick={Minus}><i className="xi-minus-min"></i></div>
      <div className="member-count-number"><p>{count}</p></div>
      <div className="member-count-button" onClick={Plus}><i className="xi-plus-min"></i></div>
    </div>
  )
}
function Buymenu(){
  return(
   <table id="buytable">
    <tr>
      <td id="buytabletd1"><img src="https://shop-phinf.pstatic.net/20231102_2/169890661946193fQv_JPEG/2280027448085475_217904227.jpg?type=m510"/></td>
      <td rowSpan={2} id="buytabletd2">
        <div id="buydiv">
        <h1 id="buyh1">메뉴이름</h1>
        <p id="buyp1">price<span>원</span></p>
        <div id="buybox1">
          <p id="buyp2"><b>"사용자닉" 님만을 위한 혜택</b></p>
          <p><b>적립 포인트</b><span id="buyspan"> 가격의 1%</span></p>
          <div id="buybox2">
            <p><span>TIP.</span> 포인트 더 받는 방법<span>+ 아래가격 3개 합친값</span></p>
            <p id="buyp5">네이버 멤버쉽 최대5%적립 {">"}<sapn>가격의5%</sapn></p>
            <p id="buyp5">네이버 현대카드로 결제 시{">"}<sapn>가격의?%</sapn></p>
            <p id="buyp5">네이버페이 머니로 결제 시 {">"}<sapn>가격의?%</sapn></p>
          </div>
        </div>
        <p id="buyp4_1">무이자 할부 <span id="buyp4">  카드자세히 보기</span></p>
        <p>유효기간 <span id="buyp4">  구매일로부터 366일</span></p>
        <p id="buyp4_1">사용장소 <span id="buyp4">  브랜드별 상이</span></p>
        <p id="buyp4_2">최대구매 10개(1회)</p>
        <MemberCount/>
      </div>
      </td>
    </tr>
    <tr>
      <td id="buytabletd1_1">리뷰 수<span>리뷰.length</span><span>사용자 총 평점</span><span>score/id.length</span></td>
    </tr>
   </table>
  )
}
function Buy() {
  // const { userid } = useParams();
  // const [state] = useAsync(() => getBuy(userid), [userid]);
  // const { loading, data:rdata, error } = state;
  // const cookie = getCookie('loginCookie');

  // if(loading) return <div>로딩중입니다.....</div>
  // if(error) return <div>에러가 발생했습니다.</div>
  // if(!rdata) return null;

  // console.log(rdata);
  return (
    <div className="buy">
     <Buymenu/>
    </div>
  );
}

export default Buy;
