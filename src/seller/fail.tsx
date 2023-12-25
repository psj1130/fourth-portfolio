import React from "react";
import { Link } from "react-router-dom";
import './success.css'
import { getCookie } from "../customer/cookies";

function ReservationSuccess() {
  const cookie = getCookie('loginCookie');
  return(
    <div id="payment-result-wrapper">
      <div id="payment-result-container">
        <h1>결제 실페</h1>
        <p>메인페이지로 돌아가서 다시 실행해주세요</p>
      </div>
      <div id="result-navigation-wrapper">
        <Link to='/'>
          <div className="payment-result-button">
            메인 페이지
          </div>
        </Link>
        {/* <Link to={`/order/list/`}>
          <div className="payment-result-button">
            구매목록
          </div>
        </Link> */}
      </div>
    </div>
  )
}

export default ReservationSuccess;