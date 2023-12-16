import React from "react";
import { Link } from "react-router-dom";
import './success.css'
// import { getCookie } from "../loginpage/cookies";

function ReservationSuccess() {
  // const cookie = getCookie('loginCookie');
  return(
    <div id="payment-result-wrapper">
      <div id="payment-result-container">
        <h1>결제가 완료되었습니다 !</h1>
        <p>자세한 내역은 예약확인 페이지에서 확인해주세요 !</p>
      </div>
      <div id="result-navigation-wrapper">
        <Link to='/'>
          <div className="payment-result-button">
            메인 페이지
          </div>
        </Link>
        <Link to={`/reservationlist/`}>
          <div className="payment-result-button">
            예약확인 페이지
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ReservationSuccess;