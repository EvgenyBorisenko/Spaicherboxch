import React from 'react';
import s from './HomeDetails.module.css';
import Home from '../../img/home.jpg';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const HomeDetails = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="ho" className={s.Wrapper}>
      {isOpen && <CustomPopUp />}
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('Home_details.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <img src={Home} alt="home-img" />
        <p className={s.Description}>{t('Home_details.text1')}</p>
        <p className={s.Description}>{t('Home_details.text2')}</p>
        <p className={s.Description}>{t('Home_details.text3')}</p>
        <p className={s.Price}>{t('Home_details.price')}</p>
        <button onClick={openPopUp}>{t('Home_details.button')}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeDetails);
