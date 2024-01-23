import React from "react";
import { useRef } from "react";
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from 'nanoid';
import "./seller.css";
import { getCookie } from "../customer/cookies";
const cookie = getCookie('loginCookie');

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";
const customerKey = "YbX2HuSlsC9uVJW6NMRMj";

export default function Pay(props) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  

  
    const initPaymentWidget = async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);   
      paymentWidget.renderPaymentMethods("#payment-widget",props.Allprice);
      paymentWidgetRef.current = paymentWidget;
    };

    initPaymentWidget();
  

  const handlePayment = async () => {
    const paymentWidget = paymentWidgetRef.current;
    try { 
      await paymentWidget?.requestPayment({
        orderId: nanoid(),
        orderName: "패키지 상품 결제",
        customerEmail: "customer123@gmail.com",
        successUrl: `${window.location.origin}/seller/success/${cookie}?userid=${cookie}&id=${
          props.rdata.menuResult.id
        }&o_count=${props.count}&o_amount=${props.Allprice}&point=${props.Mpoint}&Ppoint=${props.Ppoint},`,
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
