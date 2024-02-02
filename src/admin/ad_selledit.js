import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import useAsync from '../customHook/useAsync';

async function getEdit(id) {
  const res = await axios.get(`${API_URL}/order/order`);
  // console.log(res);
  return res.data;
}

function Selledit() {
  const { id } = useParams();
  const [state, refetch] = useAsync(() => getEdit(id), [id]);
  const { loading, data: rdata, error } = state;

  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (!loading && rdata) {
      // API 응답이 필요한 필드를 포함한 객체 배열로 가정합니다.
      setRows(
        rdata.map((item) => ({
          id: item.id,
          count: item.o_count,
          amount: item.o_amount,
          createdAt: new Date(item.createdAt).toLocaleDateString('ko-KR', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
          }),
          userid: item.userid,
          menuid: item.menu.name,
        }))
      );
    }
  }, [loading, rdata]);

  const columns = [
    { field: 'id', headerName: '주문번호', width: 70 },
    { field: 'userid', headerName: '구매자', width: 70 },
    { field: 'menuid', headerName: '상품', width: 70 },
    { field: 'count', headerName: '갯수', width: 70, editable: true },
    { field: 'amount', headerName: '총가격', width: 100 },
    { field: 'createdAt', headerName: '주문날짜', width: 200 },
    {
      field: 'edit',
      headerName: '수정',
      width: 70,
      renderCell: (params) => (
        <button
          onClick={() => handleEditClick(params.row.id, params.row.count)}
          style={{ cursor: 'pointer' }}
        >
          수정
        </button>
      ),
    },
  ];

  const [editingRowId, setEditingRowId] = useState(null);
  const [editedCount, setEditedCount] = useState('');

  const handleEditClick = (id, initialCount) => {
    setEditingRowId(id);
    setEditedCount(initialCount);
  };

  const handleSaveClick = async () => {
    const updatedRows = rows.map((row) => {
      if (row.id === editingRowId) {
        return { ...row, count: editedCount };
      }
      return row;
    });

    setRows(updatedRows);
    setEditingRowId(null);
    setEditedCount('');

    // 서버에 수정된 데이터 전송
    // const updatedData = {
    //   id: editingRowId,
    //   count: editedCount,
    // };

    try {
      // const response = await axios.put(`${API_URL}/order/update`, updatedData);
      // console.log(response.data);
      // 성공적으로 업데이트되면 서버에서 데이터를 다시 불러옵니다.
      refetch();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  if (loading) return <div>로딩중입니다.....</div>;
  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div className="sell">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />

      {editingRowId && (
        <div>
          <p>수정 중인 행: {editingRowId}</p>
          <input
            type="text"
            value={editedCount}
            onChange={(e) => setEditedCount(e.target.value)}
          />
          <button onClick={handleSaveClick}>저장</button>
        </div>
      )}
    </div>
  );
}

export default Selledit;
