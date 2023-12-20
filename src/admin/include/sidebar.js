import React from "react";
import './sidebar.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PerosonOutlineIcon from '@mui/icons-material/PersonOutline'
import StoreFrontIceon from '@mui/icons-material/Storefront'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"><HomeWorkIcon />Home</li>
            <li className="sidebarListItem"><TrendingUpIcon />Analystics</li>
            <li className="sidebarListItem"><MonetizationOnIcon />Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">유저 및 메뉴관리</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"><PerosonOutlineIcon />유저</li>
            <li className="sidebarListItem"><StoreFrontIceon />메뉴</li>
            <li className="sidebarListItem"><MonetizationOnIcon />MD</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">제휴·제안</h3>
          <ul className="sidebarList">
            <a href="/administrator/suggestion">
              <li className="sidebarListItem"><PerosonOutlineIcon />제휴 및 제안</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}