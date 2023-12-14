import React from "react";
import './login.css'
import { Link } from "react-router-dom";

const LoginForm = () => {
  return(
    <div className="login-form-container">
      <div className="login-input-container">
        <p>
          <span>이메일 아이디</span>
        </p>
        <input id='id' type="text" placeholder="이메일을 입력해 주세요."></input>
      </div>
      <div className="login-input-container">
        <p>
          <span>비밀번호</span>
        </p>
        <input id="password" type="text" placeholder="비밀번호를 입력해 주세요."></input>
      </div>
      <div className="login-button">로그인</div>
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
          <span>카카오 1초 회원가입/로그인</span>
        </div>
        <div className="naver-login login-button">
          <span>네이버 1초 회원가입/로그인</span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;