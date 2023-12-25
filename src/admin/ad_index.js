import React from "react";
import axios from "axios";
import { API_URL } from "../config/serverurl";
import useAsync from '../customHook/useAsync';
import FeaturedInfo from "./component/featuredinfo";

const getOrder = async () => {
  const result = await axios.get(`${API_URL}/order/order`);
  console.log(result.data);
  return result.data;
}

function Ad_home(){
  const [state] = useAsync(getOrder, []);

  const { loading, data: formData, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!formData) return null;

  return(
    <div id="ad_home_main">
      <FeaturedInfo data={formData} />
    </div>
  )
}

export default Ad_home;