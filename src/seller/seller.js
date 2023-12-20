import { useParams,useSearchParams} from "react-router-dom";
import { API_URL } from "../config/contansts";
// import { getCookie } from "../loginpage/cookies";
import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { useState, } from 'react'
import "./seller.css";
import Checkout from "./Checkout.tsx";
async function getseller(id) {
  const res = await axios.get(`${API_URL}/seller/${id}`);
  console.log(res);
  return res.data;
}

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
  
  const imgurl = props.rdata.menuResult.img_url.split(',');
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
              <img src={imgurl[0]} id="sellerimg"></img>
            </div>
              <div >
                <h2 id="sellerp1">{menu.name}</h2>
                <div id="sellergrid4">
                <h3>구매수량:{props.value.count}개</h3>
                <h3>총 {amount1.toLocaleString()}원 </h3>
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
}
function Info(props){
  
  const user = props.rdata.userResult;
  console.log(user);
  const order = props.value.amount;


  const changepoint =(e)=>{
    const inputValue = e.target.value.replace(/[^0-9]/g, '') && e.target.value.replace(/^0+/, '');
   props.setpoint1(inputValue); 
   
   if( e.target.value>user.point || e.target.value>parseInt(order)){
    // alert('보유 포인트 이상은 사용불가능합니다.');
    e.target.value="";
    props.setpoint1(e.target.value);
   }
   if (e.target.value === '0') {
    e.target.value="";
  } else {
    props.setpoint1(e.target.value);
  }
   
 
  }
  return(
    <div id="sellergrid">
      <div>
        <DT1 rdata={props.rdata}  value={props.value}/>
        <DT2 rdata={props.rdata} value={props.value}/>
        <DT3 rdata={props.rdata} value={props.value}point={props.point1}/>
        <h3 id="sellercenter">포인트</h3>
        <div id="sellergird2">
        <h3>보유 이디야 포인트</h3><h3 id="sellerright">{user.point}원</h3>
        <p >사용포인트</p>
        <p id="sellerright"><input type="text" id="sellerbtn" placeholder='0' onChange={(e) =>changepoint(e)}
        ></input>P</p>
        
        <p>총 사용 포인트</p> <p id="sellerright">{props.point1}P</p>
        </div>
      </div>
      <div>
        <h3 id="sellercenter">최종결제</h3>
      <Info2  rdata={props.rdata} value={props.value} point1={props.point1}
       setseller={props.setseller}/>
      </div>
    </div>
  )
}

function Info2(props){
  const order = props.value.amount.toLocaleString();
  const Allprice = order-props.point1;
  
  
  return(
    <div>
      <div id="sellergird2">
     
      <h3 id="sellercolor">총금액 </h3><h3 id="sellerright1">{order}원</h3>
      <h3 id="sellercolor">사용포인트 </h3><h3 id="sellerright1">{props.point1}P</h3>
      <h3 >최종금액</h3><h3 id="sellerright">{Allprice.toLocaleString()}원</h3>
    </div>
    <Checkout setseller={props.setseller} price={Allprice}/>
    </div>
  )
}
function Seller(props) {
  const [point1,setpoint1] = useState('0')
  const { id} = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const count = searchParams.get('o_count');
  const amount = searchParams.get('o_amount');
  const value = {
    count,
    amount
  }
  const order =value.amount.toLocaleString();
  const Allprice = order-props.point1;
  async function setseller(price){
    const data = {
      count : count,
      amount : price,

      
    };
    console.log("data:",data);
    const res = await axios.post(`${API_URL}/seller/success`,{data})
    .then((res)=>{
      if(res.data == '저장완료') {
        console.log('주문했음');
      }
    })
    .catch(err=>{
        console.log(err)
    })};
  
  console.log("Link to:",id,count,amount);
  const [state] = useAsync(() => getseller(id), [id]);
  const { loading, data: rdata, error } = state;
  // const cookie = getCookie('loginCookie');

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rdata) return null;
  return (
    <div className="seller">
      
      <Info  rdata={rdata} value={value} setseller={setseller} point1={point1} setpoint1={setpoint1} />
      
    </div>
  );
}
export default Seller