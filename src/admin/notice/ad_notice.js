import React, {useState} from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useAsync from '../../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import './ad_notice.css';
import Popup from "./modal/popup";

export default function Ad_notice() {

    //모달 부분
  const [isOpen, setOpen] = useState(false);

  const popupclick = () => {
  setOpen(true);
  };

  //데이터 전체 조회부분
  async function getSuggestion() {
    const res = await axios.get(`${API_URL}/notice`);
    console.log(res);
    return res.data;
  };

  const [state] = useAsync(getSuggestion, []);

  const { loading, data: formData, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!formData) return null;
  
  //각 열 이름 및 데이터 설정
  const columns = [
    {
      field: 'id',
      headerName: '공지사항',
      width: 120,
      editable: false,
    },
    {
      field: 'title',
      headerName: '제목',
      width: 200,
      editable: false,
    },
    {
      field: 'body',
      headerName: '내용',
      width: 200,
      editable: false,
    },
    {
      field: 'img_url',
      headerName: '사진',
      width: 120,
      editable: false,
      renderCell: (params) => {
      const imgUrl = params.row.img_url;
        return (
          <>
            <div className='notice-img-box'>
              <img className='notice-img' src={params.row.img_url}
              onClick={popupclick}/>
                {isOpen ? <Popup imgUrl={imgUrl} isOpen={setOpen} /> : null}
            </div>
          </>
        );
      },
    },
    {
      field: 'createdAt',
      headerName: '작성 시간',
      width: 200,
      editable: false,
      valueGetter: (params) => {
        // 'createdAt' 필드의 값은 여기서 변환됩니다.
        const date = new Date(params.row.createdAt);
        return date.toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
      },
    },
    {
      field: 'updatedAt',
      headerName: '수정 시간',
      width: 200,
      editable: false,
      valueGetter: (params) => {
        // 'createdAt' 필드의 값은 여기서 변환됩니다.
        const date = new Date(params.row.createdAt);
        return date.toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
        });
      },
    },
    {
      field: 'action',
      headerName: '삭제',
      width: 80,
      //그리드 컬럼 설정하는데 여기서 return값을 주고 삭제 요청을 보낼수있음
      renderCell: (params) => {
        return (
          <>
            <button className='userListDelete' onClick={async () => {
              console.log(params.id);
              await axios.delete(`${API_URL}/qna/delete/${params.id}`)
              //qnaroute에서 delete만들고 요청하면 됨
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

  return (
    <div id='ad_suggestion_container'>
      <div id='ad_suggestion_main'>
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
