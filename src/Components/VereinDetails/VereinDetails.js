import React from 'react';
import s from './VereinDetails.module.css';
import VereinImg from '../../img/vereine.jpg';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const VereinDetails = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="ver" className={s.Wrapper}>
      {isOpen && <CustomPopUp />}
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('Verein_details.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <img src={VereinImg} alt="verein-img" />
        <p className={s.Description}>{t('Verein_details.text')}</p>

        <p className={s.Price}>{t('Verein_details.price1')}</p>
        <p className={s.Price}>{t('Verein_details.price2')}</p>
        <button onClick={openPopUp}>{t('Verein_details.button')}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(VereinDetails);
