import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../config/contansts';

async function getB2b() {
  const res = await axios.get(`${API_URL}/b2b`);
  console.log(res);
  return res.data;
}
const columns = [
  {
    field: 'user',
    headerName: '성함',
    width: 120,
    editable: true,
  },
  {
    field: 'phone',
    headerName: '핸드폰 번호',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) => `${params.row.phone}`,
  },
  {
    field: 'email',
    headerName: '이메일',
    width: 120,
    editable: true,
  },
  
  {
    field: 'company',
    headerName: '회사명',
    width: 200,
    editable: true,
  },
  {
    field: 'file_dir',
    headerName: '사업자 등록부',
    width: 150,
    editable: true,
  },
  {
    field: 'region',
    headerName: '지역',
    width: 200,
    editable: true,
  },
  {
    field: 'Productinterest',
    headerName: '관심 제품',
    width: 100,
    editable: true,
  },
  {
    field: 'type',
    headerName: '구분',
    width: 100,
    editable: true,
  },
  {
    field: 'title',
    headerName: '제목',
    width: 100,
    editable: true,
  },
  {
    field: 'body',
    headerName: '내용',
    width: 100,
    editable: true,
  },
  {
    field: 'action',
    headerName: '삭제',
    width: 80,
    renderCell: (params) => {
      return (
        <>
          <button className='userListDelete' onClick={async () => {
            console.log(params.id);
            await axios.delete(`${API_URL}/transaction/delete/${params.id}`)
            .then(res => {
              console.log(res.data);
              window.location.reload();
            })
            .catch(err => {
              console.log(err);
            })
          }}>
            삭제
          </button>
        </>
      );
    },
  },
];

export default function Ad_b2b() {
  const [state] = useAsync(getB2b, []);

  const { loading, data: formData, error } = state;
  console.log(formData);
  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!formData) return null;

  return (
    <div id='ad_b2b_container'>
      <div id='ad_b2b_main'>
        <Box>
          <DataGrid
            rows={formData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </div>
  );
}
