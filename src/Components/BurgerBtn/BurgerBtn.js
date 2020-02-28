import React from 'react';
import s from './BurgerBtn.module.css';

const BurgerBtn = ({ onChange, isOpen }) => {
  return (
    <div className={s.BurgerButton}>
      <input onChange={onChange} checked={isOpen} type="checkbox" />
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default BurgerBtn;
