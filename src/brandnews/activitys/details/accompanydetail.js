import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../../../config/serverurl';
import useAsync from '../../../config/useAsync';

async function getsocial(id) {
  try {
    const SocialDetaildata = await axios.get(`${API_URL}/social/${id}`);
    console.log('socialDetaildata로 받아온 데이터', SocialDetaildata);
    return SocialDetaildata.data;
  }
  catch(err) {
    console.error('에러 발생:', err);
  }
}

function Accompanydetail() {
  const { id } = useParams();
  const [SocialDetailstate] = useAsync(() => getsocial(id), [id]);
  const { loading, data: SocialDetaildata, error } = SocialDetailstate;

  console.log('EventDetaildata:', SocialDetaildata);

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!SocialDetaildata) return null;

  console.log('EventDetaildata:', SocialDetaildata);

  return (
    <div>
      <h1>{SocialDetaildata.title}</h1>
    </div>
  );
}

export default Accompanydetail;