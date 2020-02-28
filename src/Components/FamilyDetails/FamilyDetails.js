import React from 'react';
import s from './FamilyDetails.module.css';
import FamilyImg from '../../img/family.jpg';
import CustomPopUp from '../CustomPopUp/CustomPopUp';
import * as popUpAction from '../../redux/actions/popUpAction';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const FamilyDetails = ({ openPopUp, isOpen }) => {
  const { t } = useTranslation();
  return (
    <div id="fa" className={s.Wrapper}>
      {isOpen && <CustomPopUp />}
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('Family_details.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <img src={FamilyImg} alt="family-img" />
        <p className={s.Description}>{t('Family_details.text')}</p>

        <p className={s.Price}>{t('Family_details.price')}</p>
        <button onClick={openPopUp}>{t('Family_details.button')}</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(FamilyDetails);
