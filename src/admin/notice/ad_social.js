import React, {useState, useRef, useEffect} from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import useAsync from '../../customHook/useAsync';
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import './notice.css';
import DeleteOutLine from '@mui/icons-material/DeleteOutline'

import Integratedpopup from "./modal/integratedpopup";
import Createmodal from "./modal/socialcreatemodal";
import Button from '@mui/material/Button';
import Updatemodal from "./modal/socialupdatemodal";

export default function Ad_social() {

    //모달 부분
    const [isOpen, setOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef(null);
    const [selectedlist, setSelectedlist] = useState(null);
    const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    //내용 팝업 모달 열기
    const popupclick = () => {
      setOpen(true);
    };
    //모달닫기
    const handleCloseModal = () => {
      setOpen(false);
    };
    //수정모달 열기
    const UpdateClick = (postId) => {
      setUpdateId(postId);
      setUpdateModalOpen(true);
    };
  
  
    useEffect(() => {
      const OutsideClick = (event) => {
        if (isOpen && !modalRef.current?.contains(event.target)) {
          handleCloseModal();
        }
      };
    
      document.addEventListener("mousedown", OutsideClick);
    
      return () => document.removeEventListener("mousedown", OutsideClick);
    }, [isOpen]);

  //데이터 전체 조회부분
  async function getSocial() {
    const res = await axios.get(`${API_URL}/social`);
    console.log(res);
    return res.data;
  };
 //데이터 삭제 부분
  async function deleteSocial(id) {
    try {
      const res = await axios.delete(`${API_URL}/social/${id}`);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  //수정 하기위한 id값 데이터 전체 modal전달하는 함


  const [state] = useAsync(getSocial, []);

  const { loading, data: formData, error } = state;

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!formData) return null;

  
  
  //각 열 이름 및 데이터 설정
  const columns = [
    {
      field: 'id',
      headerName: '사회공헌활동',
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
      renderCell: (params) => {
        const bodydetail = params.row.body;
          return (
            <>
            <div className='data-box-list' ref={modalRef}>
            <p
              className='data-box'
              src={params.row.body}
              onClick={() => {
              setSelectedlist(params.row.id); // 또는 다른 고유한 식별자
              popupclick(true);
            }}
          >{bodydetail.length > 100 ? bodydetail.substring(0, 10) + '...' : bodydetail}</p>
              {isOpen && selectedlist === params.row.id && (
                <Integratedpopup bodydetail={bodydetail} isOpen={isOpen} />
              )}
          </div>
          </>
        );
      },  
    },
    {
      field: 'createdAt',
      headerName: '등록 시간',
      width: 200,
      editable: false,
      valueGetter: (params) => {
        // 'createdAt' 필드의 값은 여기서 변환됩니다.
        const dates = new Date(params.row.createdAt);
        return dates.toLocaleString('ko-KR', {
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
      headerName: '수정시간',
      width: 200,
      editable: false,
      valueGetter: (params) => {
        // 'createdAt' 필드의 값은 여기서 변환됩니다.
        const dates = new Date(params.row.updatedAt);
        //받아온 데이터 컬럼 값으로 바꿔야함
        return dates.toLocaleString('ko-KR', {
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
            <DeleteOutLine
            style={{ cursor: 'pointer' }}
             className='userListDelete' onClick={async () => {
              console.log(params.id);
              await axios.delete(`${API_URL}/social/delete/${params.id}`)
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
            </DeleteOutLine>
          </>
        );
      },
    },
    {
      field: "update",
      headerName: "수정",
      width: 80,
      renderCell: (params) => {
        return (
          <>
            <button
              className="update-btn"
              onClick={() => UpdateClick(params.row.id)}
            >
              수정
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
          <div className="create_title">
            <button
              className="create-btn"
              onClick={() => setModalOpen(true)}>
            새로 만들기</button>
            <Createmodal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          </div>
          <Updatemodal
            isOpen={isUpdateModalOpen}
            onClose={() => setUpdateModalOpen(false)}
            updateId={updateId}
          />
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
