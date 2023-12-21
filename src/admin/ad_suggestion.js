// import * as React from 'react';
// import './ad_suggestion.css';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import useAsync from '../customHook/useAsync';
// import axios from 'axios';
// import { API_URL } from '../config/serverurl';


// async function deleteSuggestion(id) {
//   try {
//     const res = await axios.delete(`${API_URL}/suggestion/${id}`);
//     console.log(res);
//   } catch (error) {
//     console.error('Error deleting suggestion:', error);
//   }
// }

// async function getSuggestion() {
//   const res = await axios.get(`${API_URL}/suggestion`);
//   console.log(res);
//   return res.data;
// }


// const columns = [
//   {
//     field: 'type',
//     headerName: '제휴/제안',
//     width: 120,
//     editable: true,
//   },
//   {
//     field: 'user',
//     headerName: 'user name',
//     width: 120,
//     editable: true,
//   },
//   {
//     field: 'phone',
//     headerName: 'Phone',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 150,
//     valueGetter: (params) => `${params.row.phone}`,
//   },
//   {
//     field: 'email',
//     headerName: 'email',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'title',
//     headerName: 'title',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'body',
//     headerName: 'detail',
//     width: 200,
//     editable: true,
//   },
//   {
//     field: 'file_dir',
//     headerName: 'file_dir',
//     width: 100,
//     editable: true,
//   },
//   {
//     field: 'action',
//     headerName: 'Action',
//     width: 80,
//     renderCell: (params) => {
//       const handleDelete = () => {
//         deleteSuggestion(params.id); 
//       };

//       return (
//         <>
//           <button className='userListDelete' onClick={async () => {
//             console.log(params.id);
//             await axios.delete(`${API_URL}/suggestion/delete/${params.id}`)
//             .then(res => {
//               console.log(res.data);
//               window.location.reload();
//             })
//             .catch(err => {
//               console.log(err);
//             })
//           }}>
//             삭제
//           </button>
//         </>
//       );
//     },
//   },
// ];

// export default function Ad_suggestion() {
//   const [state] = useAsync(getSuggestion, []);

//   const { loading, data: formData, error } = state;

//   if (loading) return <div>로딩중입니다.....</div>;
//   if (error) return <div>에러가 발생했습니다.</div>;
//   if (!formData) return null;

//   return (
//     <div id='ad_suggestion_container'>
//       <div id='ad_suggestion_main'>
//         <Box>
//           <DataGrid
//             rows={formData}
//             columns={columns}
//             initialState={{
//               pagination: {
//                 paginationModel: {
//                   pageSize: 10,
//                 },
//               },
//             }}
//             pageSizeOptions={[5]}
//             checkboxSelection
//             disableRowSelectionOnClick
//           />
//         </Box>
//       </div>
//     </div>
//   );
// }
