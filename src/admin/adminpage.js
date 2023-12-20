import React from 'react';

function AdminPage() {
  document.title = "EDIYA COFFEE - 관리자 페이지";

  return(
    <div id='admin'>
      <header>
        <div className='admin-header-logo'>
          {/* <img src='images/logo/top_logo.gif'></img> */}
        </div>
      </header>
    </div>
  )
}

export default AdminPage;