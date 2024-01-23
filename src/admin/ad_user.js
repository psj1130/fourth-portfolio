import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import DeleteOutLine from '@mui/icons-material/DeleteOutline'
import { Link } from 'react-router-dom';




async function getUser() {
  const res = await axios.get(`${API_URL}/admin/user`);
  // console.log(res);
  return res.data;
}

const columns = [
  {
    field: 'name',
    headerName: '이름',
    width: 100,
    editable: false,
  },
  {
    field: 'id',
    headerName: '아이디',
    width: 100,
    editable: false,
  },
  {
    field: 'password',
    headerName: '비밀번호',
    width: 130,
    editable: false,
  },
  {
    field: 'email',
    headerName: '이메일',
    width:200,
    editable: true,
  },
  {
    field: 'phone',
    headerName: '핸드폰 번호',
    width: 150,
    editable: true,
  },
  {
    field: 'point',
    headerName: '누적 포인트',
    width: 150,
    editable: true,
  },
  {
    field: 'snsId',
    headerName: 'SNS가입 여부',
    width: 150,
    editable: true,
  },
  {
    field: 'provider',
    headerName: '가입한 SNS',
    width: 150,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: '가입 날짜',
    width: 200,
    renderCell: (params) => {
      return(
        <p>{new Date(params.row.createdAt).toLocaleString('ko-KR', {
          year: '2-digit',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit'
        })}</p>
      )
    }
  },
  {
    field: 'action',
    headerName: '삭제',
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <DeleteOutLine className='menuListDelete' onClick={async () => {
            let yn = window.confirm('정말 삭제하시겠습니까?');
              if(yn) {
                console.log(params.id);
              await axios.delete(`${API_URL}/user/delete/${params.id}`)
              .then(res => {
                console.log(res.data);
                window.location.reload();
              })
              .catch(err => {
                console.log(err);
              })
            }
          }}>
          </DeleteOutLine>
        </>
      );
    },
  },
];

export default function Ad_user() {
  const [state] = useAsync(getUser, []);

  const { loading, data: formData, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!formData) return null;

  return (
    <div id='ad_menu_container'>
      <div id='ad_menu_main'>
        <Box>
          <DataGrid
            rows={formData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 11  ,
                },
              },
            }}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}
