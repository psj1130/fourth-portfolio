import React, { useState, useRef } from "react";
import axios from "axios";
import { API_URL } from "../../config/serverurl.js";
import { getCookie } from "../../customer/cookies.js";
import { Link } from "react-router-dom";
import useAsync from "../../customHook/useAsync.js";

function Orderlist(props) {
  // 상태 및 레퍼런스 선언
  const cookie = getCookie('loginCookie');
  const [reviewText, setReviewText] = useState("");
  const [previewImg, setPreviewImg] = useState(""); // previewImg 상태 추가
  const imgRef = useRef();
  const [isModalOpenList, setModalOpenList] = useState(Array(props.rdata.length).fill(false));

  // Modal 열기
  const openModal = (index) => {
    setModalOpenList((prev) => prev.map((_, i) => (i === index ? true : _)));
  };

  const InsertImg = (e) => {
    if (e && e.target) {
      const reader = new FileReader();
      console.log("이미지파일",e.target.files[0]);

      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onloadend = () => {
        const previewImgUrl = reader.result;
        if (previewImgUrl) {
          setPreviewImg(previewImgUrl); // previewImg 상태 업데이트
        }
      };
    }
  };

  // Modal 닫기
  const closeModal = () => {
    setModalOpenList(Array(props.rdata.length).fill(false));
    setReviewText("");
    setPreviewImg(""); // Modal이 닫힐 때 이미지 초기화
  };

  // 리뷰 제출 처리
  const handleReviewSubmit = async (listId) => {
    try {
      const upload = imgRef.current.files[0];
  
      // 이미지가 선택되었을 때만 이미지 업로드 진행
      if (upload) {
        const formData = new FormData();
        formData.append("imageFile", upload);
  
        await axios.post(`${API_URL}/reviews/${listId}`, formData)
          .then(res => {
            console.log(res.data.image_path);
            const data = {
              id: listId,
              body: reviewText,
              img_url: res.data.image_path,
            };
  
            console.log("리스트ID", listId);
            console.log("리뷰텍스트", reviewText);
            console.log("이미지파일이름", res.data.image_path);
  
            axios.post(`${API_URL}/reviews/test/${listId}`, data)
              .then(async (res) => {
                const updatedRdata = await fetchReviewData(); // fetchReviewData는 리뷰 목록을 가져오는 함수로 가정
  
                setReviewText("");
                setPreviewImg("");
                closeModal();
  
                // 업데이트된 리뷰 목록으로 상태를 업데이트
                props.setRdata(updatedRdata);
              })
              .catch((err) => {
                console.log(err);
              });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        // 이미지가 선택되지 않은 경우에 대한 처리
        const data = {
          id: listId,
          body: reviewText,
          img_url: null, // 이미지가 없는 경우 null 또는 다른 기본 값으로 설정
        };
  
        axios.post(`${API_URL}/reviews/test/${listId}`, data)
          .then(async (res) => {
            const updatedRdata = await fetchReviewData();
  
            setReviewText("");
            setPreviewImg("");
            closeModal();
  
            props.setRdata(updatedRdata);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.error("리뷰 전송 실패:", error);
    }
  };

  const fetchReviewData = async () => {
    try {
      const response = await axios.get(`${API_URL}/reviews`);
      return response.data; // 이 부분은 실제 데이터 구조에 맞게 수정 필요
    } catch (error) {
      console.error("리뷰 데이터 가져오기 실패:", error);
      return [];
    }
  };
  return (
    <div id="orderlist-container">
      <h2>구매 내역</h2>
      <ul>
        {cookie ? props.rdata.map((list, index) => {
          const images = list.menu.img_url.split(',');
          return (
            <li className="order-item" key={list.id}>
              {/* 주문 정보 표시 */}
              <div className="order-info">
                <Link to={`/order/menu/${list.menu.id}`}>
                  <img src={images[0]} alt="x"></img>
                </Link>
                <div>
                  <div>
                    <p>수량 : {list.o_count}</p>
                    <p>총 가격 : {list.o_amount.toLocaleString('ko-KR')} 원</p>
                  </div>
                </div>
              </div>

              {/* 리뷰 작성 및 구매 취소 버튼 */}
              <div>
                <button type="click" id="review-button" onClick={() => openModal(index)}>
                  리뷰쓰기
                </button>
                <button type="click" id="delete-button" onClick={async () => {
                  let confirm = window.confirm('주문을 취소하시겠습니까?');

                  if (confirm) {
                    await axios.patch(`${API_URL}/seller/cancel/${list.id}`, {
                      data: {
                        cancel: "1",
                      },
                    })
                      .then(result => {
                        console.log('삭제 성공');
                        window.location.replace(`/mypage/${cookie}`);
                      })
                      .catch(err => {
                        console.log(err);
                      });
                  } else {
                    return;
                  }
                }}>구매취소</button>
              </div>

              {/* 리뷰 작성 Modal */}
              {isModalOpenList[index] && (
  <div className="modal">
    <div className="modal-content">
      <span className="close" onClick={closeModal}>
        &times;
      </span>
      <p>리뷰를 작성해주세요.</p>
      <div id="review_img_warrap">
        <textarea
          id="review_textbox"
          placeholder="리뷰를 작성하세요."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div id="showImg_sendfile">
          <input ref={imgRef} type="file" accept="image/*" onChange={(e) => { InsertImg(e); }}></input>
          {previewImg && (
            <div>
              <label htmlFor='img1'><img src={previewImg} alt='image' style={{ width: '100px', height: '100px' }}></img></label>
              <p>선택한 이미지</p>
            </div>
          )}
          {/* 리뷰 작성 및 전송 버튼 */}
          <button id="review_sendbtn" onClick={() => handleReviewSubmit(list.id)}>
            리뷰 작성 및 전송
          </button>
        </div>
      </div>
    </div>
  </div>
)}

            </li>
          )
        })
          : <div>로그인후 사용해주세요</div>}
      </ul>
    </div>
  );
}

export default Orderlist;