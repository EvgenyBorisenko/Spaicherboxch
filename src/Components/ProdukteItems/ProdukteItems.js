import React from 'react';
import BusinessIMG from '../../img/business_small.jpg';
import FamilyIMG from '../../img/family_small.jpg';
import HomeIMG from '../../img/home_small.jpg';
import RessellerIMG from '../../img/reseller_small.jpg';
import VereinIMG from '../../img/verein_small.jpg';
import s from './ProdukteItems.module.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';

const ProdukteItems = () => {
  const { t } = useTranslation();
  return (
    <ul className={s.Products}>
      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={HomeIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>{t('Main.Product_items.Item1.Name')}</h2>
          <hr className={s.Line} />
          <p>{t('Main.Product_items.Item1.Description')}</p>
          <p>{t('Main.Product_items.Item1.price')}</p>
          <NavLink className={s.Button} to="/bestellen/home#cardshome">
            {t('Main.Product_items.Item1.button')}
          </NavLink>
          <NavLink className={s.Link} to="/home#ho">
            {t('Main.Product_items.Item1.info')}
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={FamilyIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>{t('Main.Product_items.Item2.Name')}</h2>
          <hr className={s.Line} />
          <p>{t('Main.Product_items.Item2.Description')}</p>
          <p>{t('Main.Product_items.Item2.price')}</p>
          <NavLink className={s.Button} to="/bestellen/multiuser#cardsmulti">
            {t('Main.Product_items.Item1.button')}
          </NavLink>
          <NavLink className={s.Link} to="/family#fa">
            {t('Main.Product_items.Item1.info')}
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={VereinIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>{t('Main.Product_items.Item3.Name')}</h2>
          <hr className={s.Line} />
          <p>{t('Main.Product_items.Item3.Description')}</p>
          <p>{t('Main.Product_items.Item3.price')}</p>
          <NavLink className={s.Button} to="/bestellen/multiuser#cardsmulti">
            {t('Main.Product_items.Item1.button')}
          </NavLink>
          <NavLink className={s.Link} to="/verein#ver">
            {t('Main.Product_items.Item1.info')}
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={BusinessIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>{t('Main.Product_items.Item4.Name')}</h2>
          <hr className={s.Line} />
          <p>{t('Main.Product_items.Item4.Description')}</p>
          <p>{t('Main.Product_items.Item4.price')}</p>
          <NavLink className={s.Button} to="/bestellen/multiuser#cardsmulti">
            {t('Main.Product_items.Item1.button')}
          </NavLink>
          <NavLink className={s.Link} to="/business#bu">
            {t('Main.Product_items.Item1.info')}
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={RessellerIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>{t('Main.Product_items.Item4.Name')}</h2>
          <hr className={s.Line} />
          <p>{t('Main.Product_items.Item4.Description')}</p>
          <p>{t('Main.Product_items.Item4.price')}</p>
          <NavLink className={s.Link} to="/reseller#re">
            {t('Main.Product_items.Item1.info')}
          </NavLink>
        </div>
      </li>
    </ul>
  );
};

export default ProdukteItems;
