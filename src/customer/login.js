import React, { useState, useRef } from "react";
import './login.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../config/serverurl";

const LoginForm = () => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();

  const id_css = useRef(document.getElementById('id'));
  const pw_css = useRef(document.getElementById('password'));

  return(
    <div className="login-form-container">
      <div className="login-input-container">
        <p>
          <span>이메일 아이디</span>
        </p>
        <input id='id' type="text" placeholder="이메일을 입력해 주세요." onChange={(e) => {
          setId(e.target.value);
        }}></input>
      </div>
      <div className="login-input-container">
        <p>
          <span>비밀번호</span>
        </p>
        <input id="password" type="text" placeholder="비밀번호를 입력해 주세요." onChange={(e) => {
          setPassword(e.target.value);
        }}></input>
      </div>
      <div className="login-button" onClick={async () => {
        if(!id || !password) {
          id_css.current.style.setProperty('border', '1px solid red')
        }
        await axios.post(`${API_URL}/login`, { id: id, password: password})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
      }}>로그인</div>
    </div>
  )
}

function LoginPage() {
  return (
    <div id="login-page-wrapper">
      <div id="login-page-container">
        <div className="login-h1">
          <h1>로그인</h1>
        </div>
        <LoginForm/>
        <div className="other-container">
          <Link to='/login'>아이디/비밀번호 찾기</Link>
          <Link to='/login'>이메일로 회원가입</Link>
        </div>
        <div className="kakao-login login-button">
          <p></p>
          <span>카카오 1초 회원가입/로그인</span>
        </div>
        <div className="naver-login login-button">
          <p></p>
          <span>네이버 1초 회원가입/로그인</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;