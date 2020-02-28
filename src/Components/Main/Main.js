import React from 'react';
import s from './Main.module.css';
import CarouselSlider from '../Carousel/CarouselSlider';
import Produkte from '../Produkte/Produkte';
import UberUns from '../UberUns/UberUns';
import Sicherheit from '../Sicherheit/Sicherheit';
import scrollTo from 'scroll-to';
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();
  const scroling = () => {
    scrollTo(0, 0, {
      duration: 1500,
    });
  };
  return (
    <div className={s.Main}>
      <CarouselSlider />
      <h1 className={s.MainDescription}>
        {t('Main.MainDescriptionSpeichrBox')}
      </h1>
      <Produkte />
      <UberUns />
      <Sicherheit />
      <button onClick={scroling} className={s.ScrollBtn}>
        <span> &#8249; </span>
      </button>
    </div>
  );
};

export default Main;
