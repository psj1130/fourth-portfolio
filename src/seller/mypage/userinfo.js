import React from "react";

export default function Userinfo(props) {
  console.log(props.rdata);
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