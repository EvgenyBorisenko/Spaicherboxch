import React, { useState } from 'react';
import visaIcon from '../../img/icons/visa-icon.png';
import mastercardIcon from '../../img/icons/mastercard-icon.png';
import payPalIcon from '../../img/icons/paypal-con.png';
import eFinanceIcon from '../../img/icons/post-e-finance-icon.png';
import postFinanceIcon from '../../img/icons/post-finance-icon.png';
import invoiceIcon from '../../img/icons/invoice-icon.png';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import s from './CustomPopUp.module.css';
import { createNewOrder } from '../../helpers/api';

const CustomPopUp = ({ closePopUp }) => {
  const [email, setEmail] = useState('');
  const [paymentNethod, setPaymentNethod] = useState('');
  const handleChange = e => setEmail(e.target.value);
  const handleRadio = e => setPaymentNethod(e.target.value);
  const handleSubmit = e => {
    const data = {
      package_type: 'MULTIUSER_STANDARD',
      payment_system: paymentNethod,
      email: email,
    };
    e.preventDefault();
    createNewOrder(data);
    closePopUp();
  };
  const closeOnBacking = e =>
    e.target.className === s.Backing ? closePopUp() : null;

  return (
    <div onClick={closeOnBacking} className={s.Backing}>
      <div className={s.Window}>
        <form className={s.Form} onSubmit={handleSubmit}>
          <h3>Auf Bestellung anwenden</h3>
          <div className={s.Label}>
            <label>E-mail</label>
          </div>

          <input
            className={s.EmailInput}
            required
            name="email"
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="Geben Sie Ihre E-Mail-Adresse ein"
          />

          <div className={s.Payments}>
            <div className={s.ItemsPay}>
              <img src={visaIcon} alt="visa-icon" />
              <input
                type="radio"
                value="VISA"
                checked={paymentNethod === 'VISA'}
                onChange={handleRadio}
              ></input>
            </div>
            <div className={s.ItemsPay}>
              <img src={mastercardIcon} alt="mastercard-icon" />
              <input
                type="radio"
                value="MASTERCARD"
                checked={paymentNethod === 'MASTERCARD'}
                onChange={handleRadio}
              ></input>
            </div>

            <div className={s.ItemsPay}>
              <img src={payPalIcon} alt="paypal-icon" />
              <input
                type="radio"
                value="PAYPALL"
                checked={paymentNethod === 'PAYPALL'}
                onChange={handleRadio}
              ></input>
            </div>

            <div className={s.ItemsPay}>
              <img src={postFinanceIcon} alt="postfinance-icon" />
              <input
                type="radio"
                value="POSTFINANCE_CARD"
                checked={paymentNethod === 'POSTFINANCE_CARD'}
                onChange={handleRadio}
              ></input>
            </div>

            <div className={s.ItemsPay}>
              <img src={eFinanceIcon} alt="e-finance-icon" />
              <input
                type="radio"
                value="POSTFINANCE_E"
                checked={paymentNethod === 'POSTFINANCE_E'}
                onChange={handleRadio}
              ></input>
            </div>

            <div className={s.ItemsPay}>
              <img src={invoiceIcon} alt="invoice-icon" />
              <input
                type="radio"
                value="INVOICE"
                checked={paymentNethod === 'INVOICE'}
                onChange={handleRadio}
              ></input>
            </div>
          </div>

          <button className={s.SubmitBtn}>Einreichen</button>
        </form>
        <button onClick={closePopUp} className={s.CloseBtn}>
          &#10006;
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isOpen: state.popUpReducer,
});

const mapDispatchToProps = dispatch => ({
  closePopUp: () => dispatch(popUpAction.closePopUp(false)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomPopUp);
