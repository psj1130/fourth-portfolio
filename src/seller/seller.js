import { useParams, useSearchParams} from "react-router-dom";
import { API_URL } from "../config/contansts";
import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { useState, } from 'react'
import "./seller.css";
import Checkout from "./Checkout.tsx";
import { getCookie } from "../customer/cookies.js";
const cookie = getCookie('loginCookie');
async function getseller(id) {
  const res = await axios.get(`${API_URL}/seller/${id},${cookie}`);
  console.log(res);
  return res.data;
}
// async function getseller(userid, id) {
//   const res = await axios.get(`${API_URL}/seller/${userid}`, {
//     params: {
//       id: id
//     }
//   });


function DT1(props) {
  const [isOpen, setIsOpen] = useState(false);
  const user = props.rdata.userResult;
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div>
        <div></div>
        {isOpen ? (
          <div>
          <div id="sellerbox">
        <h3 id="sellerbor" onClick={handleToggle}>구매자 정보</h3>
        <div id="sellergrid1">
         <p id="sellerp"><b>받는사람</b></p><input id="NAME" type="text"  className="inputstyle" placeholder={user.name}></input>
         <p id="sellerp"><b>전화번호</b></p><input id="NAME" type="text"  className="inputstyle" placeholder={user.phone}></input>
        </div >
        <input type="textarea" placeholder="기타메모를 입력하세요" id="sellertext"></input>
        </div> 
            </div>
        ) : (
          <h3 id="sellerbor" onClick={handleToggle}>구매자 정보</h3>
        )}
      </div>
      <ul style={{ display: isOpen ? "block" : "none" }}>

      </ul>
    </>
  );
}
function DT2(props) {
  const [isOpen, setIsOpen] = useState(false);
 
  const menu = props.rdata.menuResult;
  console.log(menu);
  
  const imgurl = null
  const amount1 = props.value.amount;
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
 console.log(props.value.count);
  return (
    <>
      <div>
        <div></div>
        {isOpen ? (
          <div>
          <div id="sellerbox">
        <h3 id="sellerbor1" onClick={handleToggle}>구매상품</h3>
          <div id="sellerdt1">
            <div>
              <img src={imgurl} id="sellerimg"></img>
            </div>
              <div >
                <h2 id="sellerp1">{menu.name}</h2>
                <div id="sellergrid4">
                <h3>구매수량:{props.value.count}개</h3>
                <h3>총 {amount1.toLocaleString('ko-KR')}원 </h3>
              </div>
            </div>
          </div>
        </div> 
            </div>
        ) : (
          <h3 id="sellerbor" onClick={handleToggle}>구매상품</h3>
        )}
      </div>
      <ul style={{ display: isOpen ? "block" : "none" }}>
      </ul>
    </>
  );
}
function DT3(props) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const n1 = props.value.amount * 0.03;
  
  return (
    <>
      <div>
        <div></div>
        {isOpen ? (
          <div>
          <div id="sellerbox">
        <h3 id="sellerbor" onClick={handleToggle}>포인트적립</h3>
        <div id="sellergird2">
        <h3>총 적립포인트</h3><h3 id="sellerright">{n1}원</h3>
        </div>
      </div>
            </div>
        ) : (
          <h3 id="sellerbor" onClick={handleToggle}>포인트적립</h3>
        )}
      </div>
      <ul style={{ display: isOpen ? "block" : "none" }}>

      </ul>
    </>
  );

return <div>로그인후 사용해주세요</div>
}
function Info(props){
  const [point, setpoint] = useState('0');
  const user = props.rdata.userResult;
  console.log(user);
  const order = props.value.amount
  const Allprice = order - point;
  const n1 = props.value.amount * 0.03;
  // useState를 사용하여 text 값의 상태를 관리
  const changepoint = (e) => {
    e.preventDefault(); // 기본 동작 취소
  
    // 숫자만 허용하도록 정규식 수정
    const inputValue = e.target.value.replace(/[^0-9]/g, '').replace(/^0+/, '');
  
    // 값이 변경되었을 때만 상태 업데이트
    if (inputValue !== point) {
      if (inputValue > user.point || inputValue > parseInt(order)) {
        setpoint(""); // 상태 업데이트
      } else {
        setpoint(inputValue);
      }
    }
  };
  
  return (
    <>
      <div id="sellergrid">
        <div>
          <DT1 rdata={props.rdata} value={props.value} />
          <DT2 rdata={props.rdata} value={props.value} />
          <DT3 rdata={props.rdata} value={props.value} point={point} />
          <h3 id="sellercenter">포인트</h3>
          <div id="sellergird2">
            <h3>보유 이디야 포인트</h3>
            <h3 id="sellerright">{user.point}원</h3>
            <p>사용포인트</p>
            <p id="sellerright">
              <input
                type="text"
                id="sellerbtn"
                placeholder="0"
                onChange={changepoint}
                value={point}
              ></input>
              P
            </p>
  
            <p>총 사용 포인트</p> <p id="sellerright">{point}P</p>
          </div>
        </div>
        <div>
          <h3 id="sellercenter">최종결제</h3>
          <div>
            <div id="sellergird2">
              <h3 id="sellercolor">총금액 </h3>
              <h3 id="sellerright1">{order}원</h3>
              <h3 id="sellercolor">사용포인트 </h3>
              <h3 id="sellerright1">{point}P</h3>
              <h3>최종금액</h3>
              <h3 id="sellerright">{Allprice.toLocaleString('ko-KR')}원</h3>
            </div>
            <Checkout count={props.value.count} Allprice={Allprice} rdata={props.rdata} Mpoint ={point} Ppoint ={n1}/>
          </div>
        </div>
      </div>
    </>
  );
    
  }  
function Seller(props) {
  const { userid } = useParams();
  console.log(userid);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id');
  const count = searchParams.get('o_count');
  const amount = searchParams.get('o_amount');
  const value = {

    count,
    amount
  }
  
 
  
  // console.log("Link to:",id,count,amount);
  const [state] = useAsync(() => getseller(id), [id]);
  const { loading, data: rdata, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rdata) return null;
  if (cookie){
  return (
    <div className="seller">
      <Info  rdata={rdata} value={value} />
    </div>
  );
} else{
  window.location.replace('/members/login');
}}
export default Seller;