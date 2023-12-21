import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useAsync from '../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../config/serverurl';
import DeleteOutLine from '@mui/icons-material/DeleteOutline'
import { Link } from 'react-router-dom';
import MenuModal from './component/menumodal';




async function getMenu() {
  const res = await axios.get(`${API_URL}/product/menu`);
  console.log(res);
  return res.data;
}


const columns = [
  {
    field: 'type',
    headerName: 'Drink / Food',
    width: 100,
    editable: false,
  },
  {
    field: 'code',
    headerName: '메뉴 코드',
    width: 100,
    editable: false,
  },
  {
    field: 'seq',
    headerName: '순서',
    width:50,
    editable: true,
  },
  {
    field: 'name',
    headerName: '메뉴 이름',
    width: 150,
    editable: true,
  },
  {
    field: 'eng_name',
    headerName: '영어 이름',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: '가격',
    width: 100,
    editable: true,
  },
  {
    field: 'img_url',
    headerName: '이미지',
    width: 100,
    renderCell: (params) => {
      console.log(params.row.img_url);
      return(
        <div>
          <img className='menuImg' src={params.row.img_url} alt='' >
          </img>
        </div>
      )
    }
  },
  {
    field: 'ingredient_cal',
    headerName: '칼로리(kcal)',
    width: 120,
    editable: true,
  },
  {
    field: 'ingredient_sugar',
    headerName: '당류(g)',
    width: 90,
    editable: true,
  },
  {
    field: 'ingredient_protein',
    headerName: '단백질(g)',
    width: 90,
    editable: true,
  },
  {
    field: 'ingredient_sf',
    headerName: '포화지방(g)',
    width: 110,
    editable: true,
  },
  {
    field: 'ingredient_na',
    headerName: '나트륨(mg)',
    width: 100,
    editable: true,
  },
  {
    field: 'ingredient_caffein',
    headerName: '카페인(mg)',
    width: 90,
    editable: true,
  },
  {
    field: 'use_yn',
    headerName: '판매 여부',
    width: 80,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: '출시 날짜',
    width: 120,
    editable: false,
  },
  {
    field: 'modified_at',
    headerName: '수정 날짜',
    width: 120,
    editable: true,
  },
  {
    field: 'action',
    headerName: '수정/삭제',
    width: 100,
    renderCell: (params) => {
      return (
        <>
          <Link to={'/menu/' + params.row.id}>
            <button className='menuListEdit'>수정</button>
          </Link>
          <DeleteOutLine className='menuListDelete' onClick={async () => {
            let yn = window.confirm('정말 삭제하시겠습니까?');
              if(yn) {
                console.log(params.id);
              await axios.delete(`${API_URL}/menu/delete/${params.id}`)
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

export default function Ad_menu() {
  const [state] = useAsync(getMenu, []);
  const [isOpen, setOpen] = useState(false);

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
                  pageSize: 10,
                },
              },
            }}
            pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        <button type='click' onClick={() => {
          setOpen(true);
        }}>새 메뉴</button>
        {isOpen ? <MenuModal isOpen={setOpen} /> : null}
      </div>
    </div>
  );
}