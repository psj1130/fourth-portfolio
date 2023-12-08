import React from 'react';
import './index.css';
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import ImageSlide from '../components/imageslide';
import useAsync from '../config/useAsync';

async function getImages() {
  const res = await axios.get(`${API_URL}/mainimage`);
  console.log(res);
  return res.data;
}

function MainPage() {
  const [ state ] = useAsync(getImages, []);
  const { loading, data:images, error} = state;

  if(loading) return <div>로딩중입니다.....</div>
  if(error) return <div>에러가 발생했습니다.</div>
  if(!images) return null;

  return(
    <div id='mainpage-wrapper'>
      <div id='mainpage-slidebox'>
        <ImageSlide images={images}></ImageSlide>
      </div>
    </div>
  )
}

export default MainPage;