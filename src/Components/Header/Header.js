import React, { useState } from 'react';
import logo from '../../img/logo_Wuerfel_speicherbox_1_klein.png';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import LanguagesBox from '../LanguagesBox/LanguagesBox';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import * as sessionSelectors from '../../redux/selectors/sessionSelectors';
import * as sessionActions from '../../redux/actions/sessionActions';

const Header = ({ authenticated, onLogout }) => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <BurgerBtn
        isOpen={isOpen}
        onChange={() => {
          setOpen(!isOpen);
        }}
      />
      {isOpen && (
        <BurgerMenu authenticated={authenticated} onLogout={onLogout} />
      )}
      <header className={s.Header}>
        <div className={s.Wrapper}>
          <div className={s.Logo}>
            <NavLink to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <LanguagesBox />
          <div className={s.MainNavigation}>
            <nav className={s.Navigation}>
              <NavLink className={s.Link} to="/">
                {t('Header.HOME')}
              </NavLink>

              <NavLink className={s.Link} to="/produkte">
                {t('Header.PRODUCTS')}
              </NavLink>

              <NavLink className={s.Link} to="/preise">
                {t('Header.PRICES')}
              </NavLink>

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
        </div>
      </header>
    </>
  );
};

const mapStateToProps = state => ({
  authenticated: sessionSelectors.getIsAuthrnticated(state),
});
const mapDispatchToProps = {
  onLogout: sessionActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
