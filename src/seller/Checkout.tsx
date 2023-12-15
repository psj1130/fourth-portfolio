import React from "react"
import { useEffect, useRef } from "react"
import { loadPaymentWidget, PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk"
// import { ANONYMOUS } from "@tosspayments/payment-widget-sdk"
import { nanoid } from 'nanoid'


import "./seller.css";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"
const customerKey = "YbX2HuSlsC9uVJW6NMRMj"

export default function Pay(props) {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null)
  const price = 0
  console.log(props.price);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey)

      paymentWidget.renderPaymentMethods("#payment-widget", props.price)

      paymentWidgetRef.current = paymentWidget
    })()
  }, [])

  return (
    <div className="reservation-pay">
      <div id="payment-widget" />
      <button
      id="appbutton"
      onClick={async () => {
        props.setseller();
        const paymentWidget = paymentWidgetRef.current
        try {
          await paymentWidget?.requestPayment({
          	orderId: nanoid(),
            orderName: "패키지 상품 결제",
            customerEmail: "customer123@gmail.com",
            successUrl: `${window.location.origin}/success`,
            failUrl: `${window.location.origin}/fail`,
        })
        } catch (err) {
          	console.log(err)
        }
      }}
      > <b>결제하기</b> </button>
    </div>
  )
}