import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/contansts";
// import { getCookie } from "../loginpage/cookies";
import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import "./seller.css";
async function getseller(id) {
  const res = await axios.get(`${API_URL}/order/${id}`);
  console.log(res);
  return res.data;
}
function Info(props){
  const user = props.rdata.userResult;
  const menu = props.rdata.menuResult;
  const review = props.rdata.reviewResult;
  return(
    <div>
      <div>
        <h2>수신자 정보</h2>
        
      </div>
    </div>
  )
}
function Seller() {
  
  const { id } = useParams();
  const [state] = useAsync(() => getseller(id), [id]);
  const { loading, data: rdata, error } = state;
  // const cookie = getCookie('loginCookie');

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rdata) return null;

  console.log(rdata);
  return (
    <div className="seller">
      <Info rdata={rdata}/>
    </div>
  );
}
export default Seller