import "./buy.css";
import { Link, useParams } from "react-router-dom";
import { API_URL } from "../config/contansts";
import { getCookie } from "../customer/cookies";
import React from "react";
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { useState, useEffect, useRef } from "react";
import MenuList from "./menulist";
import Contents from "./contents";
import styled from "styled-components";
import Star from "./star";

const cookie = getCookie("loginCookie");
const ContentDiv = styled.div`
  width: 1020px;
  display: flex;
  flex-direction: column-reverse;
`;


async function getBuy(id) {
  const res = await axios.get(`${API_URL}/order/menu/${id}`);
  console.log(res);
  return res.data;
}

function Buymenu(props) {
  const [count, setCount] = useState(0);
  const Plus = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const Minus = () => {
    if (count == 0) {
      return;
    }
    setCount((prevCount) => prevCount - 1);
  };
  const menu = props.rdata.menuResult;
  const review = props.rdata.reviewResult;
  const user = props.rdata.userResult;
  const price = menu.price;
  const n1 = price * 0.03;
  const n4 = price * 0.04;
  const n5 = price * 0.05;
  const n2 = price * 0.02;
  const sumn = n4 + n5 + n2;
  const imgurl = props.rdata.menuResult.img_url.split(",");
  console.log(review);

  return (
    <table id="buytable" border={1}>
      <tr id="borderbuy">
        <td id="buytabletd1">
          <img id="buyimg" src={imgurl[1]} />
        </td>
        <td rowSpan={2} id="buytabletd2">
          <div id="buydiv">
            <h1 id="buyh1">{menu.name}</h1>
            <p id="buyp1">
              <span>{price.toLocaleString("ko-KR")}원</span>
            </p>
            <div id="buybox1">
              <p id="buyp2">
                <b>{cookie} 님만을 위한 혜택</b>
              </p>
              <div id="buyp2-4">
                <p id="buyp1-3">
                  <b>적립 포인트</b>
                </p>
                <p id="buyspan"> {n1.toLocaleString("ko-KR")}원</p>
              </div>
              <div id="buybox2">
                <div id="buyp2-5">
                  <p id="buyred1">
                    <b>
                      <span id="buyred">TIP.</span> 포인트 더 받는 방법
                    </b>
                  </p>
                  <p id="buymar2">
                    <b>+ 최대{sumn.toLocaleString("ko-KR")}원</b>
                  </p>
                </div>
                <div id="buyp2-5">
                  <p id="buyp5">이디야 멤버쉽 최대5%적립 {">"}</p>
                  <p id="buymar1">{n4.toLocaleString("ko-KR")}원</p>
                </div>
                <div id="buyp2-5">
                  <p id="buyp5">이디야 현대카드로 결제 시{">"}</p>
                  <p id="buymar1">{n5.toLocaleString("ko-KR")}원</p>
                </div>
                <div id="buyp2-5">
                  <p id="buyp5">이디야 머니로 결제 시 {">"}</p>
                  <p id="buymar1">{n2.toLocaleString("ko-KR")}원</p>
                </div>
              </div>
            </div>
            <p id="buyp4_1">
              무이자 할부 <span id="buyp4"> 카드자세히 보기</span>
            </p>
            <p>
              유효기간 <span id="buyp4"> 구매일로부터 366일</span>
            </p>
            <p id="buyp4_1">
              사용장소 <span id="buyp4"> 브랜드별 상이</span>
            </p>
            <p id="buyp4_2">최대구매 10개(1회)</p>
            <div className="member-count">
              <div className="member-count-button" onClick={Minus}>
                <i className="xi-minus-min"></i>
              </div>
              <div className="member-count-number">
                <p>
                  <b>{count}</b>
                </p>
              </div>
              <div className="member-count-button" onClick={Plus}>
                <i className="xi-plus-min"></i>
              </div>
            </div>
            <p id="buyp6">
              {" "}
              총 상품 금액 <span id="buyright">총 수량{count}개</span>{" "}
              <span id="buyright1">
                {(price * count).toLocaleString("ko-KR")} 원
              </span>
            </p>
            <Link
              to={
                cookie
                  ? `/seller/${cookie}?id=${
                      props.rdata.menuResult.id
                    }&o_count=${count}&o_amount=${count * price}`
                  : "/login"
              }
              id="buybutton"
            >
            <button id="buybutton">
              <b>구매하기</b>
            </button>
            </Link>
            <div>
              <button id="buytok">톡톡문의</button>
              <button id="buytok">찜하기</button>
            </div>
          </div>
        </td>
      </tr>   
          <tr>
            <td id="buytabletd1_1">
            리뷰 수<span>{review.score}</span>
            <span>사용자 총 평점</span>
            <span>{review.score/review.id}</span>
          </td>
        </tr>
    </table>
  );
}
function Photo(props) {
  const review = props.rdata.reviewResult;
  const [rating, setRating] = useState(review[1].score); // 가저온 점수를 저장할 state

  // 데이터베이스에서 값을 가져와서 rating state를 업데이트하는 함수
  const fetchRatingFromDatabase = () => {
    // 여기에서 데이터베이스에서 값을 가져오는 로직을 구현
    // 가져온 값을 setRating을 사용하여 rating state에 업데이트
    const fetchedRating = props.rdata.reviewResult[0].score;
    setRating(fetchedRating);
  };

  // 컴포넌트가 마운트될 때 데이터베이스에서 값을 가져옴
  useEffect(() => {
    fetchRatingFromDatabase();
  }, []); // 빈 배열을 전달하여 최초 한 번만 실행

  // 별점을 보여주는 UI를 생성하는 함수
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= rating ? 'star filled' : 'star'}
          // 여기에서 클릭 이벤트를 추가하여 사용자가 별을 클릭할 때 rating을 업데이트할 수 있도록 구현 가능
        >
          &#9733; {/* 별 모양의 유니코드 */}
        </span>
      );
    }

    return stars;
  }
  return (
    <div>
    <p id="photop1"><b>포토/동영상</b>
    <span>전체보기</span></p>
      <div id="photogrid">
        {review.filter((_, index) => index < 2).map((a) => {
          return (
          <div key={a.id} id="photogrid1">
             <div>
                <div>
                  <div className="star-rating">{renderStars()} {rating}</div> 
                </div>
                <p>
                    {a.user.name}*
                    <span style={{ fontSize: "10px" }}>{a.createAt}</span>
                  </p>
                <p>{a.body}</p>
            </div>
              <div> 
                <img id="reviewimg" src={a.img_url} alt="빈칸"/></div>
            </div>  
          )
        })}
        </div>
      </div> 
    )
}

function Buy() {
  const { id } = useParams();
  const [state] = useAsync(() => getBuy(id), [id]);
  const { loading, data: rdata, error } = state;
  const cookie = getCookie("loginCookie");

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!rdata) return null;

  console.log(rdata);
  return (
    <div className="buy">
      <Buymenu rdata={rdata} />
      <Photo rdata={rdata} />
      <ContentDiv>
        <Contents rdata={rdata} />
        <MenuList />
      </ContentDiv>
    </div>
  );
}

export default Buy;
