import React from "react";
//Images
import Visa from "../../assets/images/payment-methods/visa-icon.svg";
import MasterCard from "../../assets/images/payment-methods/mastercard-icon.svg";
import ApplePay from "../../assets/images/payment-methods/applepay-icon.svg";
import GooglePay from "../../assets/images/payment-methods/googlepay-icon.svg";

export default class FooterContact extends React.Component {
  render() {
    return (
      <section className="footer-contact  flex-container flex-column">
        <h3>Have questions?</h3>
        <div>
          <p>+1 (516) 713-3832</p>
        </div>
        <div>
          <p>alexochamorro@gmail.com</p>
        </div>
        <div>
          <p>8:00am - 9:00pm</p>
        </div>
        <section className="accepted-payments">
          <img src={Visa} alt="visa icon" />
          <img src={MasterCard} alt="mastercard icon" />
          <img src={ApplePay} alt="applepay icon" />
          <img className="googlepay" src={GooglePay} alt="googlepay icon" />
        </section>
      </section>
    );
  }
}
