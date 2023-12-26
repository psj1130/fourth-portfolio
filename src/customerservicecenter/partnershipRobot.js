import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const PartnershipRobot = () => {
  const [isVerified, setIsVerified] = useState(false);

  const handleRecaptchaChange = (value) => {
    setIsVerified(true);
    // 여기에서 reCAPTCHA 확인 후 실행할 로직을 추가합니다.
    // 예: console.log('reCAPTCHA 확인됨');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isVerified) {
      // reCAPTCHA가 성공적으로 확인되었을 때 폼 데이터 처리 로직을 추가합니다.
      // 예: console.log('폼 제출됨');
    } else {
      // reCAPTCHA 확인 실패 시 사용자에게 메시지를 표시합니다.
      alert('로봇이 아님을 확인해주세요!');
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
      <ReCAPTCHA
        sitekey="6LfDxCkpAAAAAMnQpYau7QlEUDh1PZ2L4xy0NbjB" 
        // reCAPTCHA 사이트 키 입력
        // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
        // 테스트용
        onChange={handleRecaptchaChange}
      />
      // <button type="submit">제출</button>
    // </form>
  );
};

export default PartnershipRobot;
