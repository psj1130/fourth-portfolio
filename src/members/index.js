import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../customer/login";
import './index.css'
import SignUpPage from "../customer/signup";

import MembersHeader from "./membersh";
import MembersFooter from "./membersf";
import Members_main from "./members_main/members_main";
import Members_guide from "./members_guide/members_guide";
import Service_guide from "./service_guide/service_guide";


function MembersPage() {
  return(
    <div id="members-main">
      <MembersHeader/>
        <div className="members-container">
          <Routes>
          <Route path='/' element={<Members_main/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path='/members_guide' element={<Members_guide/>}/>
            <Route path='/service_guide' element={<Service_guide/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
          </Routes>
        </div>
        <MembersFooter/>
    </div>
  )
}

export default MembersPage;