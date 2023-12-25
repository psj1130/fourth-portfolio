import React from "react";
import './featuredinfo.css';

export default function FeaturedInfo(props) {
  const data = props.data;
  let revenue = data.map((order) => order.o_amount).reduce((prev, curr) => prev+curr, 0);
  let amount = data.length;

  return(
    <div className="ad-featuredinfo-container">
      <div className="featuredItem">
        <span className="feautured-title">수익</span>
        <div className="fetured-revenue-container">
          <span className="fetured-revenue" >{revenue.toLocaleString('ko-KR')}</span>
          <span className="fetured-revenue-rate"></span>
        </div>
        <span className="fetured-last">* 지난달과 비교</span>
      </div>
      <div className="featuredItem">
        <span className="feautured-title">총 주문 수</span>
        <div className="fetured-revenue-container">
          <span className="fetured-revenue" >{amount}</span>
          <span className="fetured-revenue-rate"></span>
        </div>
        <span className="fetured-last">* 지난달과 비교</span>
      </div>
    </div>
  )
}