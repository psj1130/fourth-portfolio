import React, { useState } from 'react';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
  Link as MuiLink,
} from '@mui/material';
import axios from 'axios';
import { API_URL } from '../../config/contansts';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import PartnershipRobot from '../../customerservicecenter/partnershipRobot';

const productInterestOptions = ['스틱커피', '커피', 'TEA', '병음료', '파우더', '선물세트'];

const B2bdetail = () => {
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
  const [type, setType] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fileDir, setFileDir] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contactInfo = `${firstNumber}-${middleNumber}-${lastNumber}`;
    const email = `${emailId}@${selectedDomain}`;

    const data = {
      user: name,
      phone: contactInfo,
      email: email,
      company: company,
      file_dir: fileDir,
      region: country,
      Productinterest: city,
      type: type,
      title: title,
      body: content,
    };

    try {
      await axios.post(`${API_URL}/b2b`, data);
      alert('신청 성공!');
    } catch (err) {
      console.log(err);
      alert('신청 실패!');
    }
  };

  const emailDomains = ['naver.com', 'gmail.com', 'daum.com', 'nate.com'];

  return (
    <div id='trans_body'>
      <div id='trans_title'>
        <h3>상담 신청자 정보</h3>
        <p>표시 항목은 필수 입력항목입니다. 최대한 상세히 내용 기재해주시면 보다 정확한 상담이 가능합니다.</p>
      </div>
      <form id='partnershipmemo_main' encType='multipart/form-data' onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} id='name'>
            <TextField
              label='성함'
              variant='outlined'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='phone'>
            <TextField
              id='phone1'
              label='연락처'
              variant='outlined'
              fullWidth
              value={firstNumber}
              onChange={(e) => setFirstNumber(e.target.value)}
            />
            <span>-</span>
            <TextField
              id='phone2'
              variant='outlined'
              fullWidth
              value={middleNumber}
              onChange={(e) => setMiddleNumber(e.target.value)}
            />
            <span>-</span>
            <TextField
              id='phone3'
              variant='outlined'
              fullWidth
              value={lastNumber}
              onChange={(e) => setLastNumber(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='email'>
            <TextField
              id='email_first'
              label='E-Mail'
              variant='outlined'
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />
            <span>@</span>
            <FormControl variant='outlined' id='email_second'>
              <InputLabel>이메일 선택</InputLabel>
              <Select
                value={selectedDomain}
                onChange={(e) => setSelectedDomain(e.target.value)}
                label='이메일 선택'
              >
                <MenuItem value=''>이메일 선택</MenuItem>
                {emailDomains.map((domain, index) => (
                  <MenuItem key={index} value={domain}>
                    {domain}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='회사명'
              variant='outlined'
              fullWidth
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='국가'
              variant='outlined'
              fullWidth
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='도시'
              variant='outlined'
              fullWidth
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel>관심 제품 선택</InputLabel>
              <Select
                value={interestProduct}
                onChange={(e) => setInterestProduct(e.target.value)}
                label='관심 제품 선택'
              >
                <MenuItem value=''>관심 제품 선택</MenuItem>
                {productInterestOptions.map((option, index) => (
                  <MenuItem key={index} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl variant='outlined' fullWidth>
              <InputLabel>구분 선택</InputLabel>
              <Select
                value={type}
                onChange={(e) => setType(e.target.value)}
                label='구분 선택'
              >
                <MenuItem value=''>구분 선택</MenuItem>
                <MenuItem value='b2b'>B2B</MenuItem>
                <MenuItem value='special'>특판</MenuItem>
                <MenuItem value='agency'>대리점</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='제목'
              variant='outlined'
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} id='memo'>
            <TextField
              label='내용'
              variant='outlined'
              fullWidth
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label='사업자 등록부'
              variant='outlined'
              fullWidth
              value={fileDir}
              onChange={(e) => setFileDir(e.target.value)}
            />
          </Grid>
          <div id='b2b_robot'>
            <PartnershipRobot/>
          </div>
          <Grid item xs={12} id='trs_btns'>
            <Link to='/searchstore'>
              <Button variant='outlined' color='secondary'>
                취소
              </Button>
              <Button type='submit' variant='contained' color='primary'>
                등록
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default B2bdetail;
