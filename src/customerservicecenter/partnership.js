import './partnership.css';
import Partnershipmemo from './partnershipmemo';
import Partnershipscroll from './partnershipscroll';
import React from 'react';

function Partnership() {
  
  return (
    <div id='parner_box'>
      <Partnershipscroll></Partnershipscroll>
      <Partnershipmemo></Partnershipmemo>
    </div>
  );
}

export default Partnership;
