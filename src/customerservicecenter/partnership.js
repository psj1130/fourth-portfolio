import './partnership.css';
import Partnershipmemo from './partnershipmemo';
import Partnershipscroll from './partnershipscroll';
import React, { useState } from 'react';

function Partnership() {
  
  return (
    <div>
      <Partnershipscroll></Partnershipscroll>
      <Partnershipmemo></Partnershipmemo>
    </div>
  );
}

export default Partnership;
