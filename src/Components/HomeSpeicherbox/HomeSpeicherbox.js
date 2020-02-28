import React from 'react';
import s from './HomeSpeicherbox.module.css';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const HomeSpeicherbox = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="cardshome" className={s.Wrapper}>
      {isOpen && <CustomPopUp />}
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('Home_cards.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <ul className={s.PreiseList}>
          {/* ---------------------1----------------------- */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('Home_cards.cards_list.card1.name')}</h2>
              <p>{t('Home_cards.cards_list.card1.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('Home_cards.cards_list.card1.size')}</p>

              <button onClick={openPopUp}>
                {t('Home_cards.cards_list.card1.button')}
              </button>
            </div>
          </li>
          {/* --------------------2------------------------ */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('Home_cards.cards_list.card2.name')}</h2>
              <p>{t('Home_cards.cards_list.card2.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('Home_cards.cards_list.card2.size')}</p>

              <button onClick={openPopUp}>
                {t('Home_cards.cards_list.card1.button')}
              </button>
            </div>
          </li>
          {/* --------------------3------------------------ */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('Home_cards.cards_list.card3.name')}</h2>
              <p>{t('Home_cards.cards_list.card3.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('Home_cards.cards_list.card3.size')}</p>

              <button onClick={openPopUp}>
                {t('Home_cards.cards_list.card1.button')}
              </button>
            </div>
          </li>
          {/* ---------------------4----------------------- */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('Home_cards.cards_list.card4.name')}</h2>
              <p>{t('Home_cards.cards_list.card4.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('Home_cards.cards_list.card4.size')}</p>

              <button onClick={openPopUp}>
                {t('Home_cards.cards_list.card1.button')}
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isOpen: state.popUpReducer,
});

const mapDispatchToProps = dispatch => ({
  openPopUp: () => dispatch(popUpAction.openPopUp(true)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeSpeicherbox);
