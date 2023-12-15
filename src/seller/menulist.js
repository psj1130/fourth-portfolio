import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";
import "./menulist.css";
const StyledDiv = styled.div`

  top:0px;
  display:flex;
  justify-content: center;
  width:1020px;
`;
 

const MenuList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <StyledDiv>
      <div className="div-container">
        {[{ to: 'a', label: '상세정보' }, { to: 'b', label: '리뷰.length' }, { to: 'c', label: 'Q&A.length' }, { to: 'd', label: '반품/교환정보' }].map((item, index) => (
          <Link
            key={index}
            to={item.to}
            spy={true}
            smooth={true}
            onClick={() => handleClick(index)}
            className={`nav-link ${activeIndex === index ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </StyledDiv>
  );
};
export default MenuList;
