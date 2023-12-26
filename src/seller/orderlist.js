import React from "react";
import axios from "axios";
import { API_URL } from "../config/serverurl";
import { getCookie } from "../customer/cookies.js";
import { Link, useParams } from "react-router-dom";
import useAsync from "../customHook/useAsync";

import './orderlist.css';

async function getOrder(userid) {
  const res = await axios.get(`${API_URL}/seller/orderlist/${userid}`)
  console.log(res);
  return res.data;
}

function CheckReservation() {
  const { userid } = useParams();
  const [state] = useAsync(() => getOrder(userid), [userid]);
  const { loading, data:rdata, error } = state;
  const cookie = getCookie('loginCookie');

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!rdata) return null;

  console.log(rdata);

  return(
    <div id="orderlist-wrapper">
      <h2>구매 내역</h2>
      <div id="orderlist-container">
      
        <ul>
          {rdata.map((list) => { 
            if(cookie){
            return(
            
              <li className="order-item" key={list.id}>
                <Link to={`/order/menu/${list.menu.id}`}>
                <h3>{list.menu.name}</h3>
                </Link>
                <div>
                  
                </div>
                  
                  <button type="click" id="delete-button" onClick={async () => {
                    
                    await axios.patch(`${API_URL}/seller/cancel/id=${list.id}`, {
                      data: {
                        cancel:"1",
                        
                      },
                    
                    })
                    .then(result => {
                      console.log('삭제 성공');
                    })
                    .catch(err => {
                      console.log(err);
                    })
                  }}>구매취소</button>               
              </li>
          )}else if(!cookie){
            return(<div>로그인후 사용해주세요</div>);
            
          }
          })}
        </ul>
      </div>
    </div>
  )
}

export default CheckReservation;