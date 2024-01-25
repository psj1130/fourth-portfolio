import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { API_URL } from '../../config/serverurl';
import PartnershipRobot from '../../customerservicecenter/partnershipRobot';

const productInterestOptions = ['스틱커피', '커피', 'TEA', '병음료', '파우더', '선물세트'];

const TransactionDetail = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [firstNumber, setFirstNumber] = useState('');
  const [middleNumber, setMiddleNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');
  const [emailId, setEmailId] = useState('');
  const [selectedDomain, setSelectedDomain] = useState('');
  const [company, setCompany] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [interestProduct, setInterestProduct] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactInfo = `${firstNumber}-${middleNumber}-${lastNumber}`;
    const email = `${emailId}@${selectedDomain}`;

    const data = {
      user: name,
      phone: contactInfo,
      email: email,
      company: company,
      nation: country,
      city: city,
      type: interestProduct,
      title: title,
      body: content,
    };

    try {
      await axios.post(`${API_URL}/transaction`, data);
      alert('신청 성공!');
      navigate('/');
    } catch (error) {
      console.error('서버 오류:', error);
    }
    
  };

  const emailDomains = ['naver.com', 'gmail.com', 'daum.com', 'nate.com'];

  return (
    <div id='trans_body'>
      <div id='trans_title'>
        <h3>상담 신청자 정보</h3>
        <p>표시 항목은 필수 입력항목입니다. 최대한 상세히 내용 기재해주시면 보다 정확한 상담이 가능합니다.</p>
      </div>
      <form  id="partnershipmemo_main" encType='multipart/form-data'>
        <Grid container spacing={2}  >
          <Grid item xs={12} id='name'>
            <TextField
              label="이름"
              variant="outlined"
              id='name_detail'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='phone'>
            <TextField
              id='phone1'
              label="연락처"
              variant="outlined"
              fullWidth
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
            <span>-</span>
            <TextField
              id='phone2'
              variant="outlined"
              fullWidth
              value={middleNumber}
              onChange={(e) => setMiddleNumber(e.target.value)}
            />
            <span>-</span>
            <TextField
              id='phone3'
              variant="outlined"
              fullWidth
              value={lastNumber}
              onChange={(e) => setLastNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='email'>
            <TextField
              id='email_first'
              label="E-Mail"
              variant="outlined"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <span>@</span>
            <FormControl variant="outlined"
              id='email_second'>
              <InputLabel>이메일 선택</InputLabel>
              <Select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                label="이메일 선택"
              >
                <MenuItem value="">이메일 선택</MenuItem>
                {emailDomains.map((domain, index) => (
                  <MenuItem key={index} value={domain}>
                    {domain}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} id='public'>
            <TextField
              label="회사명"
              variant="outlined"
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='public'>
            <TextField
              label="국가"
              variant="outlined"
              fullWidth
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='public'>
            <TextField
              label="도시"
              variant="outlined"
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='public'>
            <FormControl variant="outlined" fullWidth>
              <InputLabel>관심 제품 선택</InputLabel>
              <Select
                value={interestProduct}
                onChange={(e) => setInterestProduct(e.target.value)}
                label="관심 제품 선택"
              >
                <MenuItem value="">관심 제품 선택</MenuItem>
                {productInterestOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} id='public'>
            <TextField
              label="제목"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='memo'>
            <TextField
              label="내용"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <div id='trans_robot'>
            <PartnershipRobot/>
          </div>
          <Grid item xs={12} id='trs_btns'>
            <Link to="/searchstore">
              <Button variant="outlined" color="secondary">
                취소
              </Button>
              <Button type="click" onClick={handleSubmit} variant="contained" color="primary">
                등록
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default TransactionDetail;
