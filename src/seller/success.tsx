import React from "react";
import { useParams,useSearchParams} from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './success.css'
import { getCookie } from "../customer/cookies";
import { log } from "console";
import axios from "axios";
import { API_URL } from "../config/contansts";
const cookie = getCookie('loginCookie');

function ReservationSuccess() {
  
  async function Setseller(){
    const {userid} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('id');
    const count = searchParams.get('o_count');
    const amount = searchParams.get('o_amount');
    const cookie = getCookie('loginCookie');
    console.log("2");
    console.log("1");
    if(cookie){
    const data = {
      id:cookie,
      menuid:id,
      count : count,
      amount : amount,   
    };
    
    const res = await axios.post(`${API_URL}/seller/success`,{data})
    .then((res)=>{
      if(res.data == '저장완료') {
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
  useEffect(() => {
    console.log("!");
    
  },[])
  
  
  

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