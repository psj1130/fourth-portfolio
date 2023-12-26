import React, { useEffect, useRef } from "react";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from 'nanoid';
import "./seller.css";
import { getCookie } from "../customer/cookies";
const cookie = getCookie('loginCookie');

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function Pay(props) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  console.log(props.price);

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
    console.log("0");
    
    try {
      console.log("-1");
      
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "패키지 상품 결제",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/seller/success/${cookie}?id=${
          props.rdata.menuResult.id
        }&o_count=${props.count}&o_amount=${props.price}`,
        failUrl: `${window.location.origin}/seller/fail`,
      })

    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <div className="reservation-pay">
      <div id="payment-widget" />
      <button id="appbutton" onClick={handlePayment}>
        <b>결제하기</b>
      </button>
    </div>
  );
}
