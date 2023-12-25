async function getEdit() {
  const res = await axios.get(`${API_URL}/admin/sell/id`);
  console.log(res);
  return res.data;
}

function selledit(){
const { id} = useParams();
const [state] = useAsync(() => getseller(id), [id]);
const { loading, data: rdata, error } = state;
// const cookie = getCookie('loginCookie');

if (loading) return <div>로딩중입니다.....</div>;
if (error) return <div>에러가 발생했습니다.</div>;
if (!rdata) return null;

return(
<div>

</div>
)
}
export default selledit;

