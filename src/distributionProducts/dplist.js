import './dplist.css';

function Dplist() {
  return (
    <div id='dp_list'>
      <button id='dp_list_btn'><a href="/dp">스틱커피(비니스트)</a></button>
      <button id='dp_list_btn'><a href="/dp/coffeemix">커피믹스</a></button>
      <button id='dp_list_btn'><a href="/dp/capsule">캡슐커피</a></button>
      <button id='dp_list_btn'><a href="/dp/cup">컵커피</a></button>
      <button id='dp_list_btn'><a href="/dp/transaction">수출입거래</a></button>
      <button id='dp_list_btn'><a href="/dp/b2b">B2B/특판/대리점 거래</a></button>
  </div>
  );
}

export default Dplist;
