import React from "react";
import { Link } from 'react-router-dom'
import './sidebar.css';
import HomeWorkIcon from '@mui/icons-material/HomeWork'
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn'
import PerosonOutlineIcon from '@mui/icons-material/PersonOutline'
import StoreFrontIceon from '@mui/icons-material/Storefront'

//공지관련 아이콘
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CampaignIcon from '@mui/icons-material/Campaign';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Diversity1Icon from '@mui/icons-material/Diversity1';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to='/administrator'>
              <li className="sidebarListItem"><HomeWorkIcon />Home</li>
            </Link>
            {/* <li className="sidebarListItem"><TrendingUpIcon />Analystics</li> */}
            <Link to='/administrator/sales'>
              <li className="sidebarListItem"><MonetizationOnIcon />Sales</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">유저 및 메뉴관리</h3>
          <ul className="sidebarList">
            <Link to='/administrator/user'>
              <li className="sidebarListItem"><PerosonOutlineIcon />유저</li>
            </Link>
            <Link to='/administrator/menu'>
              <li className="sidebarListItem"><StoreFrontIceon />메뉴</li>
            </Link>
            <Link to={'/administrator/md'}>
              <li className="sidebarListItem"><MonetizationOnIcon />MD</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">유통 제품</h3>
          <ul className="sidebarList">
            <Link to="/administrator/suggestion">
              <li className="sidebarListItem"><PerosonOutlineIcon />제휴 및 제안</li>
            </Link>
            <Link to="/administrator/transaction">
              <li className="sidebarListItem"><PerosonOutlineIcon />수출 입거래</li>
            </Link>
            <Link to="/administrator/b2b">
              <li className="sidebarListItem"><PerosonOutlineIcon />B2B/특판</li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">공지사항 관리</h3>
          <ul className="sidebarList">
              <Link to='/administrator/qna'>
                <li className="sidebarListItem"><QuestionAnswerIcon />
                  QnA
                </li>
              </Link>
              <Link to='/administrator/notice'>
                <li className="sidebarListItem"><CampaignIcon />
                  공지사항
                </li>
              </Link><Link to='/administrator/event'>
                <li className="sidebarListItem"><CelebrationIcon />
                  이벤트
                </li>
              </Link><Link to='/administrator/social'>
                <li className="sidebarListItem"><Diversity1Icon />
                  사회공헌 활동
                </li>
              </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}