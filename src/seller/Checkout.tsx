import React, { useEffect, useRef } from "react";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from 'nanoid';
import "./seller.css";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function Pay(props) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  console.log(props.price);

  // useEffect(() => {
    const handlePaymentResult = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const paymentStatus = urlParams.get("paymentStatus");
      console.log("스테이터스",paymentStatus);
      
      if (paymentStatus === 'success') {
        console.log('성공');
        props.setseller(props.price);  // 결제 성공 시 호출
      } else if (paymentStatus === 'fail') {
        console.log('실패');
      }
    };

    // 컴포넌트가 마운트될 때 결제 결과 확인
    // handlePaymentResult();
  // }, [props.price, props.setseller]);

  useEffect(() => {
    const initPaymentWidget = async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      paymentWidget.renderPaymentMethods("#payment-widget", props.price);
      paymentWidgetRef.current = paymentWidget;
    };

    initPaymentWidget();
  }, [props.price]);

  // props.setseller를 의존성 배열에 추가

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;
    
    try {
      
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "패키지 상품 결제",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/seller/success?set=${props.setseller}`,
        failUrl: `${window.location.origin}/seller/fail?paymentStatus=${'fail'}`,
      });    
      handlePaymentResult();
    } catch (err) {
      console.log(err);
    }
  };
  console.log("성공결과4");

  return (
    <div className="reservation-pay">
      <div id="payment-widget" />
      <button id="appbutton" onClick={handlePayment}>
        <b>결제하기</b>
      </button>
    </div>
  );
}
