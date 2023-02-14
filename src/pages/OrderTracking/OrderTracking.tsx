import './orderTracking.scss';
import Banner from '../../components/Banner/Banner';
import React, { useState } from 'react';
import bannerBg from '../../assets/images/bannerBg.jpg';

export default function OrderTracking() {
  const [errorMsg, setErrorMsg] = useState(false);
  let errorTitle: string =
    'Sorry, the order could not be found. Please contact us if you are having difficulty finding your order details.';
  const checkError = () => {
    setErrorMsg(true);
  };

  return (
    <>
      <Banner title="Order Tracking" pageName="Order Tracking" coverPhoto={bannerBg} sliderExist={false} />
      <div className="order-tracking-field">
        <div className="order-tracking-container">
          <div className="order-tracking-contents">
            <div className="order-tracking-content">
              <div
                className={
                  errorMsg ? 'order-tracking-content-error error-open' : 'order-tracking-content-error'
                }
              >
                <p>{errorTitle}</p>
              </div>
              <div className="order-tracking-content-title">
                To track your order please enter your Order ID in the box below and press the "Track" button.
                This was given to you on your receipt and in the confirmation email you should have received.
              </div>
              <div className="order-tracking-content-inputs">
                <p className="input-orderid">
                  <label>
                    <span>Order ID</span>
                    <input type="text" name="orderid" required />
                  </label>
                </p>
                <p className="input-orderid">
                  <label>
                    <span>Billing email</span>
                    <input type="email" name="orderid" id="emailInput" required />
                  </label>
                </p>
              </div>
              <div className="order-tracking-content-button">
                <button onClick={checkError}>TRACK</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
