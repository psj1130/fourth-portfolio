import { Link, useParams,useSearchParams} from "react-router-dom";
import { API_URL } from "../config/contansts";
import { getCookie } from "../customer/cookies";
import * as react from 'react'; 
import axios from "axios";
import useAsync from "../customHook/useAsync";
import "./sell.css";
import {DataGrid} from '@mui/x-data-grid'

async function getseller(id) {
  const res = await axios.get(`${API_URL}/order/order`);
  // console.log(res);
  return res.data;
}


function Ad_sell() {
    
    const handleDelete=(id) =>{
   
     
    }
    const columns=[
      {field: 'id', headerName:'주문번호', width:70,},
      {field: 'userid', headerName:'구매자', width:110,},
      {field: 'menuid', headerName:'상품', width:250,},
      {field: 'count', headerName:'갯수',width:70,},
      {field: 'amount', headerName:'총가격',width:100,},
      {
        field:'createdAt',
        headerName:'주문날짜',
        width:200,
      },
    
  
  
    ]
    const { id} = useParams();
    const [state] = useAsync(() => getseller(id), [id]);
    const { loading, data: rdata, error } = state;
    // const cookie = getCookie('loginCookie');

    if (loading) return <div>로딩중입니다.....</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!rdata) return null;

  
    // console.log(rdata.orderResult);
  return (
    <div className="sell">
      <DataGrid
      rows={ rdata.map((a)=>({
        id:a.id,
        count:a.o_count,
        amount:a.o_amount,
        createdAt:new Date(a.createdAt).toLocaleDateString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
        }),
        userid:a.userid,
        menuid:a.menu.name
        
      }))}
      columns={columns}
      pageSize={5}
      rowsPerPageoptions={[5]}
      checkboxSelection
      />
    </div>
  );
}
export default Ad_sell;