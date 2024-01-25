import React from "react";

export default function Userinfo(props) {
  if (props.rdata) {
    console.log("식별됨",props.rdata.name);
  } else {
    console.log('props.rdata 또는 props.rdata.name이 존재하지 않습니다.');
  }

  console.log("userinfo 정보",typeof props.rdata);
  console.log(typeof props.rdata.name);
  return(
    <div id="userinfo-container">
      <h2>사용자 정보</h2>
      {/* <ul className="userinfo-list">
        <li>이름 : {props.rdata.name}</li>
        <li>이메일 : {props.rdata.email}</li>
        <li>핸드폰 번호 : {'0' + props.rdata.phone}</li>
        <li>잔여 포인트 : {props.rdata.point.toLocaleString('ko-KR')} 점</li>
      </ul> */}
      <table>
        <tbody>
          <tr>
            <td className="td-name">이름</td>
            <td>{props.rdata.name}</td>
          </tr>
          <tr>
            <td className="td-name">이메일</td>
            <td>{props.rdata.email}</td>
          </tr>
          <tr>
            <td className="td-name">핸드폰 번호</td>
            <td>{'0' + props.rdata.phone}</td>
          </tr>
          <tr>
            <td className="td-name">잔여 포인트</td>
            <td>{props.rdata.point.toLocaleString('ko-KR')} 점</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}