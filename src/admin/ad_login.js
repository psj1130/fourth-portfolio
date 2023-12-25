import React from "react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config/serverurl";
import { setCookie } from "../customer/cookies";

const LoginForm = (props) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [context, setContext] = useState(null);
  const id_css = useRef(document.getElementById('id'));
  const pw_css = useRef(document.getElementById('password'));
  const navigate = useNavigate();
  const setTime = 3600000; //1시간


  return(
    <div className="login-form-container">
      <div className="login-input-container">
        <p>
          <span>관리자 아이디</span>
        </p>
        <input ref={id_css} id='id' type="text" placeholder="아이디를 입력해 주세요." onChange={(e) => {
          setId(e.target.value);
        }}></input>
      </div>
      <div className="login-input-container">
        <p>
          <span>관리자 비밀번호</span>
        </p>
        <input ref={pw_css} id="password" type="text" placeholder="비밀번호를 입력해 주세요." onChange={(e) => {
          setPassword(e.target.value);
        }}></input>
      </div>
      <p id="fail-login">{context}</p>
      <div className="login-button" onClick={async () => {
        if(!id || !password) {
          id_css.current.style.setProperty('border', '1px solid red')
          pw_css.current.style.setProperty('border', '1px solid red')
          setContext('아이디 또는 비밀번호를 입력해주세요 !');
        }
        await axios.post(`${API_URL}/admin/login`, { id: id, password: password})
        .then((res) => {
          if(res.data == '1') {
            console.log('로그인 성공');
            setCookie('adminCookie', id, {
              path: '/',
              secure: '/',
              expires: new Date(Date.now() + setTime),
            });
            navigate('/administrator');
            document.location.reload(true);
          }else if(res.data == '2') {
            id_css.current.style.setProperty('border', '1px solid red')
            pw_css.current.style.setProperty('border', '1px solid red')
            setContext('아이디 또는 비밀번호를 다시 확인해주세요 !');
          }
        })
        .catch((err) => {
          console.log(err);
        })
      }}>로그인</div>
    </div>
  )
}

function Ad_login() {
  return (
    <div id="ad-login-page-wrapper">
      <div id="ad-login-page-container">
        <div id="ad-login-logo">
          <img src={process.env.PUBLIC_URL + '/images/logo/top_logo.gif'}></img>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default Ad_login;