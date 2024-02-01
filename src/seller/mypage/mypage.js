import React, { useState } from "react";
import Orderlist from "./orderlist";
import Userinfo from './userinfo';
import axios from "axios";
import useAsync from "../../customHook/useAsync";
import { API_URL } from "../../config/contansts";
import { useParams } from "react-router";
import './mypage.css'
import { getCookie } from "../../customer/cookies";

async function getOrder(userid) {
  const res = await axios.get(`${API_URL}/seller/orderlist/${userid}`);
  console.log(res);
  return res.data;
}

async function getReviews() {
  const res = await axios.get(`${API_URL}/reviews/review`);
  // console.log(res.data);
  return res.data;
}

export default function MyPage() {
  const { userid } = useParams();
  const [state] = useAsync(() => getOrder(userid), [userid]);
  const { loading, data: rdata, error } = state;
  const cookie = getCookie('loginCookie');

  const { id1 } = useParams();
  const [state1] = useAsync(() => getReviews(id1), [id1]);
  const { loading1, data: pdata1, error1 } = state1;

  const [editMode, setEditMode] = useState({}); // 수정 상태를 객체로 관리
  const [editedContent, setEditedContent] = useState({}); // 수정된 내용을 객체로 관리
  const [editedImage, setEditedImage] = useState({}); // 수정된 이미지를 객체로 관리
  const [previewImage, setPreviewImage] = useState({}); // 미리 보기 이미지를 객체로 관리

  const handelDeleteReview = async (reviewId) => {
    await axios.delete(`${API_URL}/reviews/delete/${reviewId}`)
      .then(res => {
        console.log(res.data);
        window.location.reload();
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleUpdateReview = async (reviewId) => {
    try {
      let updatedReview = {
        id: reviewId,
        body: editedContent[reviewId],
      };

      if (editedImage[reviewId]) {
        // 이미지가 있는 경우에만 이미지 업로드 로직 실행
        const formData = new FormData();
        formData.append('image', editedImage[reviewId]);

        // 이미지 업로드 API 호출
        const imageUploadResponse = await axios.patch(`${API_URL}/reviews/upload/${reviewId}`, formData);
        updatedReview.img_url = imageUploadResponse.data.imageUrl;
      } else {
        // 이미지가 없는 경우 서버에 전달할 데이터 추가
        updatedReview.noImage = true;
      }

      // 리뷰 수정 API 호출
      const reviewUpdateResponse = await axios.patch(`${API_URL}/reviews/update/${reviewId}`, updatedReview);

      // 성공적으로 업데이트되었을 때 로직
      console.log("리뷰가 성공적으로 수정되었습니다.", reviewUpdateResponse.data);

      // 이미지가 없는 경우, 기존 이미지 삭제
      if (updatedReview.noImage) {
        // 이미지 삭제 API 호출
        console.log("이미지없으니 삭제호출");
        await axios.delete(`${API_URL}/reviews/deleteImage/${reviewId}`);
      }

      // 리뷰 목록을 다시 불러오는 등의 적절한 업데이트 로직 추가
      setEditMode({ ...editMode, [reviewId]: false }); // 편집 모드 종료
      window.location.reload();
    } catch (error) {
      // 수정 실패시의 에러 처리
      console.error("리뷰 수정 중 에러가 발생했습니다.", error);
    }
  };

  

  // 에러가 발생해도 유저 정보가 있으면 페이지를 로딩하고 유저 정보를 표시

  if (loading) return <div>로딩중입니다.....</div>
  if (error) return <div>에러가 발생했습니다.</div>
  if (!rdata) return null;

  if (loading1) return <div>로딩중입니다.....</div>
  if (error1) return <div>에러가 발생했습니다.</div>
  if (!pdata1) return null;

  // console.log(rdata);
  // console.log("pdata1 : ", pdata1);

  // if (error) {
  //   console.error("에러가 발생했습니다.", error);
  //   return <div>에러가 발생했습니다. 에러 콘솔을 확인해 주세요.</div>;
  // }

  // // 로딩 중이거나 데이터가 없는 경우 로딩 표시
  // if (loading || !rdata || !rdata[0] || !rdata[0].user) {
  //   return <div>로딩중입니다.....</div>;
  // }

  if (cookie) {
    return (
      <div>
        <div id="mypage-wrapper">
          <Userinfo id="style" rdata={rdata} />
          <Orderlist id="style" rdata={rdata} />
        </div>
        <div id="reviews_body">
          {pdata1.map((pdata) => (
            <div id="reviews_container" key={pdata.id}>
              <div id="review_img_div">
                {editMode[pdata.id] && (
                  // 이미지 수정 폼 및 미리 보기
                  <>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        setEditedImage({ ...editedImage, [pdata.id]: e.target.files[0] });

                        // 미리 보기 업데이트
                        const reader = new FileReader();
                        reader.onload = (event) => {
                          const previewUrl = event.target.result;
                          setPreviewImage({ ...previewImage, [pdata.id]: previewUrl });
                        };
                        reader.readAsDataURL(e.target.files[0]);
                      }}
                    />
                    {previewImage[pdata.id] && (
                      <img
                        id="preview_img"
                        src={previewImage[pdata.id]}
                        alt={`Preview-${pdata.id}`}
                      />
                    )}
                  </>
                )}

                {!editMode[pdata.id] && pdata.img_url && (
                  // 이미지 표시
                  <img id="review_img" src={pdata.img_url} alt={`Review-${pdata.id}`} />
                )}{!editMode[pdata.id] && pdata.img_url && (
                  // 이미지 표시
                  <img id="review_img" src={pdata.img_url} alt={`Review-${pdata.id}`} />
                )}
              </div>
              <div id="review_text_div">
                {editMode[pdata.id] ? (
                  // 텍스트 수정 폼
                  <textarea
                    className="mypg_textarea"
                    value={editedContent[pdata.id]}
                    onChange={(e) => setEditedContent({ ...editedContent, [pdata.id]: e.target.value })}
                  />
                ) : (
                  // 텍스트 표시
                  <p>{pdata.body}</p>
                )}
              </div>
              <div id="update_delete_btn">
                <div>
                  {editMode[pdata.id] ? (
                    <button
                      id="mypage_btn_style"
                      onClick={() => handleUpdateReview(pdata.id)}
                    >
                      완료
                    </button>
                  ) : (
                    <button
                      id="mypage_btn_style"
                      onClick={() => {
                        setEditMode({ ...editMode, [pdata.id]: true });
                        setEditedContent({ ...editedContent, [pdata.id]: pdata.body });
                        setEditedImage({ ...editedImage, [pdata.id]: pdata.img_url });
                      }}
                    >
                      수정
                    </button>
                  )}
                </div>
                <div><button id="mypage_btn_style" onClick={() => handelDeleteReview(pdata.id)}>삭제</button></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } else if (!cookie) {
    window.location.replace('/members/login');
  }
}