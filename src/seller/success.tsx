import React from "react";
import { Link } from "react-router-dom";
import './success.css'
import { getCookie } from "../customer/cookies";

function ReservationSuccess() {
  const cookie = getCookie('loginCookie');
  return(
    <div id="payment-result-wrapper">
      <div id="payment-result-container">
        <h1>결제가 완료되었습니다 !</h1>
        <p>구매한 상품은 구매목록에서 확인해주세요 !</p>
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