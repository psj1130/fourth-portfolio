import React from "react";
import Orderlist from "./orderlist";
import Userinfo from "./userinfo";
import axios from "axios";
import useAsync from "../../customHook/useAsync";
import { API_URL } from "../../config/contansts";
import { useParams } from "react-router";
import './mypage.css'
import { getCookie } from "../../customer/cookies";

async function getOrder(userid) {
  const res = await axios.get(`${API_URL}/seller/orderlist/${userid}`)
  console.log(res);
  return res.data;
}

export default function MyPage() {
  const { userid } = useParams();
  const [state] = useAsync(() => getOrder(userid), [userid]);
  const { loading, data:rdata, error } = state;
  const cookie = getCookie('loginCookie');

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!rdata) return null;

  console.log(rdata);
  if(cookie) {
    return(
      <div id="mypage-wrapper">
        <Userinfo rdata={rdata[0].user}/>
        <Orderlist rdata={rdata} />
      </div>
    )
  } else if(!cookie) {
    window.location.replace('/members/login');
  }
  
}