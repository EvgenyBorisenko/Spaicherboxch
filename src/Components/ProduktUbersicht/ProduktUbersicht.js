import React from 'react';
import s from './ProduktUbersicht.module.css';
import Table from '../Table/Table';
import { useTranslation } from 'react-i18next';

const ProduktUbersicht = () => {
  const { t } = useTranslation();
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>{t('Main.Product_Overview.name')}</h1>
      <div className={s.ProduktübersichtText}>
        <p className={s.Description}>
          {t('Main.Product_Overview.description')}
        </p>
      </div>
      <Table />
    </div>
  );
};

export default ProduktUbersicht;
