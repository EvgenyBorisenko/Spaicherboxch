import React from 'react';
import s from './MultiuserSpeicherbox.module.css';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const MultiuserSpeicherbox = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();

  return (
    <div id="cardsmulti" className={s.Wrapper}>
      {isOpen && <CustomPopUp />}

      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('MultiUser_cards.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <ul className={s.PreiseList}>
          {/* ---------------------1----------------------- */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('MultiUser_cards.cards_list.card1.name')}</h2>
              <h3>{t('MultiUser_cards.cards_list.card1.type')}</h3>
              <p>{t('MultiUser_cards.cards_list.card1.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('MultiUser_cards.cards_list.card1.period')}</p>
              <p>{t('MultiUser_cards.cards_list.card1.size')}</p>
              <p>{t('MultiUser_cards.cards_list.card1.user')}</p>
              <button type="button" onClick={openPopUp}>
                {t('MultiUser_cards.cards_list.card2.button')}
              </button>
            </div>
          </li>
          {/* --------------------2------------------------ */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('MultiUser_cards.cards_list.card2.name')}</h2>
              <h3>{t('MultiUser_cards.cards_list.card2.type')}</h3>
              <p>{t('MultiUser_cards.cards_list.card2.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('MultiUser_cards.cards_list.card2.period')}</p>
              <p>{t('MultiUser_cards.cards_list.card2.size')}</p>
              <p>{t('MultiUser_cards.cards_list.card2.user')}</p>
              <button type="button" onClick={openPopUp}>
                {t('MultiUser_cards.cards_list.card2.button')}
              </button>
            </div>
          </li>
          {/* --------------------3------------------------ */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('MultiUser_cards.cards_list.card3.name')}</h2>
              <h3>{t('MultiUser_cards.cards_list.card3.type')}</h3>
              <p>{t('MultiUser_cards.cards_list.card3.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('MultiUser_cards.cards_list.card3.period')}</p>
              <p>{t('MultiUser_cards.cards_list.card3.size')}</p>
              <p>{t('MultiUser_cards.cards_list.card3.user')}</p>
              <button type="button" onClick={openPopUp}>
                {t('MultiUser_cards.cards_list.card2.button')}
              </button>
            </div>
          </li>
          {/* ---------------------4----------------------- */}
          <li className={s.PreiseItem}>
            <div className={s.ListName}>
              <h2>{t('MultiUser_cards.cards_list.card4.name')}</h2>
              <h3>{t('MultiUser_cards.cards_list.card4.type')}</h3>
              <p>{t('MultiUser_cards.cards_list.card4.price')}</p>
            </div>
            <div className={s.PriseDescription}>
              <p>{t('MultiUser_cards.cards_list.card4.period')}</p>
              <p>{t('MultiUser_cards.cards_list.card4.size')}</p>
              <p>{t('MultiUser_cards.cards_list.card4.user')}</p>
              <button type="button" onClick={openPopUp}>
                {t('MultiUser_cards.cards_list.card2.button')}
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MultiuserSpeicherbox);
