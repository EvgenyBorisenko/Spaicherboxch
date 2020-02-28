import React from 'react';
import s from './Preise.module.css';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';

const Preise = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();
  return (
    <div className={s.Wrapper}>
      {isOpen && <CustomPopUp />}
      <h1 className={s.Tittle}>{t('Price.name')}</h1>
      <div className={s.PreiseText}>
        <p>{t('Price.description.text1')}</p>
        <p>{t('Price.description.text2')}</p>
        <p>{t('Price.description.text3')}</p>
      </div>

      <ul className={s.PreiseList}>
        {/* ---------------------1----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>{t('Price.cards.card1.name')}</h2>
            <p>{t('Price.cards.card1.price')}</p>
          </div>
          <div className={s.PriseDescription}>
            <p>{t('Price.cards.card1.text1')}</p>
            <p>{t('Price.cards.card1.text2')}</p>
            <p>{t('Price.cards.card1.text3')}</p>
            <button onClick={openPopUp}>{t('Price.cards.card1.button')}</button>
            {/* <p>oder gratis Testen</p> */}
          </div>
        </li>
        {/* --------------------2------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>{t('Price.cards.card2.name')}</h2>
            <p>{t('Price.cards.card2.price')}</p>
          </div>
          <div className={s.PriseDescription}>
            <p>{t('Price.cards.card2.text1')}</p>
            <p>{t('Price.cards.card2.text2')}</p>
            <p>{t('Price.cards.card2.text3')}</p>
            <button onClick={openPopUp}>{t('Price.cards.card2.button')}</button>
            {/* <p>oder gratis Testen</p> */}
          </div>
        </li>
        {/* --------------------3------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>{t('Price.cards.card3.name')}</h2>
            <p>{t('Price.cards.card3.price')}</p>
          </div>
          <div className={s.PriseDescription}>
            <p>{t('Price.cards.card3.text1')}</p>
            <p>{t('Price.cards.card3.text2')}</p>
            <p>{t('Price.cards.card3.text3')}</p>
            <button onClick={openPopUp}>{t('Price.cards.card3.button')}</button>
            {/* <p>oder gratis Testen</p> */}
          </div>
        </li>
        {/* ---------------------4----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>{t('Price.cards.card4.name')}</h2>
            <p>{t('Price.cards.card4.price')}</p>
          </div>
          <div className={s.PriseDescription}>
            <p>{t('Price.cards.card4.text1')}</p>
            <p>{t('Price.cards.card4.text2')}</p>
            <p>{t('Price.cards.card4.text3')}</p>
            <button onClick={openPopUp}>{t('Price.cards.card4.button')}</button>
            {/* <p>oder gratis Testen</p> */}
          </div>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  isOpen: state.popUpReducer,
});

const mapDispatchToProps = dispatch => ({
  openPopUp: () => dispatch(popUpAction.openPopUp(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Preise);
