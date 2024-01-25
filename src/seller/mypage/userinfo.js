import React from "react";

import { getCookie } from "../../customer/cookies.js";
const cookie = getCookie('loginCookie');

export default function Userinfo(props) {

  if (!props.rdata) {
    console.log('props.rdata이 존재하지 않습니다.');
    return null; // 또는 에러 메시지를 렌더링하거나 다른 대체 로직을 수행합니다.
  }

  const userinfo = props.rdata.userResult;
  if(cookie){
    return(
      <div id="userinfo-container">
        <h2>사용자 정보</h2>
        <table>
          <tbody>
            <tr>
              <td className="td-name">이름</td>
              <td>{userinfo.name}</td>
            </tr>
            <tr>
              <td className="td-name">이메일</td>
              <td>{userinfo.email}</td>
            </tr>
            <tr>
              <td className="td-name">핸드폰 번호</td>
              <td>{'0' + userinfo.phone}</td>
            </tr>
            <tr>
              <td className="td-name">잔여 포인트</td>
              <td>{userinfo.point.toLocaleString('ko-KR')} 점</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }else{
    window.location.href('/member/login');
  }
}