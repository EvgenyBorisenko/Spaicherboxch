import React from 'react';
import logo from '../../img/logo_Wuerfel_speicherbox_1_klein.png';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className={s.Footer}>
      <div className={s.Wrapper}>
        <div className="info">
          <h2>SpeicherBox.ch</h2>
          <p className={s.TextInfo}>{t('Footer.text_info')}</p>
        </div>

        <div className={s.Logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.Links}>
          <h2>{t('Footer.links_name')}</h2>
          <NavLink className={s.Link} to="#">
            {t('Footer.links_list.link1')}
          </NavLink>
          <NavLink className={s.Link} to="#">
            {t('Footer.links_list.link2')}
          </NavLink>
          <NavLink className={s.Link} to="#">
            {t('Footer.links_list.link3')}
          </NavLink>
          <NavLink className={s.Link} to="#">
            {t('Footer.links_list.link4')}
          </NavLink>
        </div>
        <div className={s.Kontakt}>
          <h2>{t('Footer.contacts')}</h2>
          <p>
            {' '}
            <span></span> +41 62 534 20 01
          </p>
          <p>
            Kirchplatz 8
            <br />
            4800 Zofingen
          </p>
          <p> info@speicherbox.ch</p>
          <p>www.speicherbox.ch</p>
        </div>
      </div>
      <p className={s.FooterRights}>
        2015 All rights reserved, Powered by Snappytheme
      </p>
    </div>
  );
};

export default Footer;
