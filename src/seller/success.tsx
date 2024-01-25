import React from "react";
import { useParams,useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom";
import './success.css'
import { getCookie } from "../customer/cookies";

import axios from "axios";
import { API_URL } from "../config/serverurl";
const cookie = getCookie('loginCookie');

function ReservationSuccess() {
  
  async function Setseller(){
    const { userid } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
   
    const id = searchParams.get('id');
    const count = searchParams.get('o_count');
    const amount = searchParams.get('o_amount');
    const cookie = searchParams.get('userid');
    const Ppoint = searchParams.get('Ppoint');
    const Mpoint = searchParams.get('point');
    console.log(id)
    
    if(cookie){
    const data = {
      userid:cookie,
      menuid:id,
      count : count,
      amount : amount,
      Ppoint:Ppoint,
      Mpoint:Mpoint,   
    };
    
    await axios.post(`${API_URL}/seller/success`,{data})
    .then((res)=>{
      if(res.data === '저장완료') {
        console.log("3");
        
        console.log('주문했음');
      }
    })
    .catch(err=>{
        console.log(err)
    })
  }else if(!cookie){
    return;
  }
}
  Setseller();
  
  

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
        <Link to={`/mypage/${cookie}`}>
          <div className="payment-result-button">
            구매목록
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ReservationSuccess;