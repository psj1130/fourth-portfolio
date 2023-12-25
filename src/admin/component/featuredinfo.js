import React from "react";

export default function FeaturedInfo(props) {
  const data = props.data;
  console.log(data.o_amount);
  let revenue = data.map((order) => order.o_amount).reduce((prev, curr) => prev+curr, 0);

  return(
    <div className="ad-featuredinfo-container">
      <div className="featuredItem">
        <span className="feautured-title">수익</span>
        <div className="fetured-revenue-container">
          <span className="fetured-revenue" >{revenue}</span>
          <span className="fetured-revenue-rate"></span>
        </div>
        <span className="fetured-last">* 지난달과 비교</span>
      </div>
    </div>
  )
}