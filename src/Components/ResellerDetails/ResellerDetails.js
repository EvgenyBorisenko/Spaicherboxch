import React from 'react';
import ResellerImg from '../../img/reseller.jpg';
import s from './ResellerDetails.module.css';
import { useTranslation } from 'react-i18next';

const ResellerDetails = () => {
  const { t } = useTranslation();
  return (
    <div id="re" className={s.Wrapper}>
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>{t('Reseller_details.tittle')}</h1>
        </div>
      </div>
      <div className={s.Container}>
        <img src={ResellerImg} alt="reseller-img" />
        <p className={s.Description}>{t('Reseller_details.text1')}</p>
        <p className={s.Description}>{t('Reseller_details.text2')}</p>
        <p className={s.Description}>{t('Reseller_details.text3')}</p>
        <p className={s.Description}>{t('Reseller_details.text4')}</p>

        <p className={s.Price}>{t('Reseller_details.price')}</p>
      </div>
    </div>
  );
};

export default ResellerDetails;
