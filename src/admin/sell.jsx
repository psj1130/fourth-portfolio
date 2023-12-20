import { Link, useParams,useSearchParams} from "react-router-dom";
import { API_URL } from "../config/contansts";
// import { getCookie } from "../loginpage/cookies";
import * as react from 'react'; 
import axios from "axios";
import useAsync from "../customHook/useAsync";
import { useState, useEffect, useRef } from 'react'
import styled from "styled-components";
import "./sell.css";
import {DataGrid} from '@mui/x-data-grid'
import {DeleteOutline} from '@mui/icons-material'


async function getseller(id) {
  const res = await axios.get(`${API_URL}/admin/sell`);
  console.log(res);
  return res.data;
}


function Sell() {
    
    const handleDelete=(id) =>{
   
     
    }
    const columns=[
      {field: 'id', headerName:'ID', width:70},
      {field: 'count', headerName:'Count',width:200},
      {field: 'amount', headerName:'amount',width:200},
      {
        field:'status',
        headerName:'Status',
        width:90,
      },
      {
        field: 'transaction',
        headerName:'Transaction',
        width:130,
      },
      {
        field: 'action',
        headerName:'Action',
        width:150,
        renderCell:(params)=>{
          return(
            <>
            <Link to={'/admin/sell/'+params.row.id}>
            <button className="userListEdit" >Edit</button>
            </Link>
            <DeleteOutline 
            className="userListDelete"
            onClick={()=>handleDelete(params.row.id)}
            />
            </>
          )
        },
      },
    ]
    const { id} = useParams();
    const [state] = useAsync(() => getseller(id), [id]);
    const { loading, data: rdata, error } = state;
    // const cookie = getCookie('loginCookie');

    if (loading) return <div>로딩중입니다.....</div>;
    if (error) return <div>에러가 발생했습니다.</div>;
    if (!rdata) return null;

  
    console.log(rdata.orderResult);
  return (
    <div className="sell">
      <DataGrid
      rows={ rdata.orderResult.map((a)=>({
        id:a.id,
        count:a.o_count,
        amount:a.o_amount
      }))}
      columns={columns}
      pageSize={5}
      rowsPerPageoptions={[5]}
      checkboxSelection
      />
    </div>
  );
}
export default Sell;