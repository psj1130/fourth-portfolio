import React from "react";
import MembersHeader from "./membersh";
import { Route, Routes } from "react-router";
import LoginPage from "../customer/login";
import './index.css'

function MembersPage() {

  return(
    <div id="members-main">
      <MembersHeader/>
        <div className="members-container">
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
        </div>
    </div>
  )
}

export default MembersPage;