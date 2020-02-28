import React from 'react';
import Anleitungen from '../../img/icons/Anleitungen_def.png';
import Download from '../../img/icons/Download_def.png';
import Telefon from '../../img/icons/Telefon_def.png';
import Ticket from '../../img/icons/Ticket_def.png';
import s from './Support.module.css';
import { NavLink } from 'react-router-dom';

const Support = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.BgImg}>
        <div className={s.TittleBox}>
          <h1 className={s.Tittle}>Support</h1>
        </div>
      </div>
      <div className={s.Container}>
        <div className={s.ImgList}>
          <NavLink to="# " className={s.ImgItem}>
            <img src={Download} alt="download-icon" />
            <p>Download</p>
          </NavLink>
          <NavLink to="#" className={s.ImgItem}>
            <img src={Anleitungen} alt="anleitungen-icon" />
            <p>Anleitungen / FAQ</p>
          </NavLink>
          <NavLink to="#" className={s.ImgItem}>
            <img src={Ticket} alt="ticket-icon" />
            <p>Supportticket eröffnen</p>
          </NavLink>
          <NavLink to="#" className={s.ImgItem}>
            <img src={Telefon} alt="telefon-icon" />
            <p>Telefonsupport</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Support;

// class Support extends Component {
//   state = {};
//   componentDidMount = () => {
//     getProfile().then(function(res) {
//       console.log('RESPONSE', res);
//     });
//   };
//   render() {
