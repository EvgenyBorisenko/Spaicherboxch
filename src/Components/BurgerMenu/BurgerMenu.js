import React from 'react';
import logo from '../../img/logo_Wuerfel_speicherbox_1_klein.png';
import s from './BurgerMenu.module.css';
import { NavLink } from 'react-router-dom';
import LanguagesBox from '../LanguagesBox/LanguagesBox';
import { useTranslation } from 'react-i18next';

const BurgerMenu = ({ authenticated, onLogout }) => {
  const { t } = useTranslation();
  return (
    <div className={s.BurgerNavigation}>
      <nav className={s.Menu}>
        <LanguagesBox />
        <NavLink className={s.Link} to="/">
          {t('Header.HOME')}
        </NavLink>

        <NavLink className={s.Link} to="/produkte">
          {t('Header.PRODUCTS')}
        </NavLink>

        <NavLink className={s.Link} to="/preise">
          {t('Header.PRICES')}
        </NavLink>

        <div className={s.Logo}>
          <NavLink to="/" name="Главная">
            <img src={logo} alt="logo" />
          </NavLink>
        </div>

        <NavLink className={s.Link} to="/uberuns">
          {t('Header.ABOUT_US')}
        </NavLink>

        <NavLink className={s.Link} to="/sicherheit">
          {t('Header.SAFETY')}
        </NavLink>

        <NavLink className={s.Link} to="/support">
          {t('Header.SUPPORT')}
        </NavLink>
        {!authenticated ? (
          <NavLink className={s.Link} to="/login">
            LOGIN
          </NavLink>
        ) : (
          <NavLink onClick={onLogout} to="/" className={s.Link}>
            LOGOUT
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default BurgerMenu;
