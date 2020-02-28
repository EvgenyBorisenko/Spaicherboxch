import React from 'react';
import s from './BusinessDetails.module.css';
import BusinessImg from '../../img/business.jpg';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const BusinessDetails = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="bu" className={s.Wrapper}>
      {isOpen && <CustomPopUp />}
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('Business_details.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <img src={BusinessImg} alt="business-img" />
        <p className={s.Description}>{t('Business_details.text')}</p>

        <p className={s.Price}> {t('Business_details.price')}</p>
        <button onClick={openPopUp}>{t('Business_details.button')}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
