import React from "react";
import axios from "axios";
import { API_URL } from "../../config/serverurl.js";
import { getCookie } from "../../customer/cookies.js";
import { Link} from "react-router-dom";
// import useAsync from "../../customHook/useAsync.js";

function Orderlist(props) {
  const cookie = getCookie('loginCookie');

  return(
      <div id="orderlist-container">
      <h2>구매 내역</h2>
        <ul>
          {cookie ? props.rdata.map((list) => {
            const images = list.menu.img_url.split(',');
            return(
              <li className="order-item" key={list.id}>
                <div className="order-info">
                  <Link to={`/order/menu/${list.menu.id}`}>
                    <img src={images[0]} alt="x"></img>
                  </Link>
                  <div>
                    <h3>{list.menu.name}</h3>
                    <div>
                      <p>수량 : {list.o_count}</p>
                      <p>총 가격 : {list.o_amount.toLocaleString('ko-KR')} 원</p>
                    </div>
                  </div>
                </div>
                  <button type="click" id="delete-button" onClick={async () => {
                    let confirm = window.confirm('주문을 취소하시겠습니까?')

                    if(confirm) {
                      await axios.patch(`${API_URL}/seller/cancel/${list.id}`, {
                        data: {
                          cancel:"1",
                        },
                      })
                      .then(result => {
                        console.log('삭제 성공');
                        window.location.replace(`/mypage/${cookie}`)
                      })
                      .catch(err => {
                        console.log(err);
                      })
                    } else {
                      return;
                    }
                  }}>구매취소</button>               
              </li>
            )})
            : <div>로그인후 사용해주세요</div> }
        </ul>
      </div>
  )
}

export default Orderlist;