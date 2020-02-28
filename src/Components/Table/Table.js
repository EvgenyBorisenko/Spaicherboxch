import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import s from './Table.module.css';

const Table = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.ColorBox}>
        <div className={s.BlueBox}>Privatanwender</div>
        <div className={s.GreenBox}>Vereine und Firmen</div>
      </div>
      <table className={s.Table}>
        <thead>
          <tr className={s.Thead}>
            <th className={s.DeskTd}></th>
            <th>Privat</th>
            <th>Familien</th>
            <th>Verein/Verband</th>
            <th>Unternehmen</th>
          </tr>
          <tr>
            <th className={s.DeskTd}></th>
            <th>
              <p className={s.PriceTable}>
                <span> ab CHF </span>
                <span className={s.Red}> 59 </span>
              </p>
              <p className={s.AboutText}>pro Jahr</p>
              <div className={s.LinksBox}>
                <NavLink className={s.BuyButton} to="/bestellen/home#cardshome">
                  KAUFEN
                </NavLink>
              </div>
            </th>
            <th>
              <p className={s.PriceTable}>
                <span>ab CHF</span>
                <span className={s.Red}> 5.50 </span>
              </p>
              <p className={s.AboutText}>pro Benutzer</p>
              <div className={s.LinksBox}>
                <NavLink
                  className={s.BuyButton}
                  to="/bestellen/multiuser#cardsmulti"
                >
                  KAUFEN
                </NavLink>
              </div>
            </th>
            <th>
              <p className={s.PriceTable}>
                <span> ab CHF</span>
                <span className={s.Red}> 5.50 </span>
              </p>
              <p className={s.AboutText}>pro Benutzer</p>
              <div className={s.LinksBox}>
                <NavLink
                  className={s.BuyButton}
                  to="/bestellen/multiuser#cardsmulti"
                >
                  KAUFEN
                </NavLink>
              </div>
            </th>
            <th>
              <p className={s.PriceTable}>
                <span> ab CHF</span>
                <span className={s.Red}> 11</span>
              </p>
              <p className={s.AboutText}>pro Benutzer</p>
              <div className={s.LinksBox}>
                <NavLink
                  className={s.BuyButton}
                  to="/bestellen/multiuser#cardsmulti"
                >
                  KAUFEN
                </NavLink>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Verschlüsselte Speicherung aller Daten
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>Verschlüsselte Speicherung aller Daten</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* ------------------------------------------------------ */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Dateiverschlüsselung
            </td>
          </tr>
          <tr className={s.MobileGrayRow}>
            <td className={s.DeskTd}>Dateiverschlüsselung</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* ---------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              End-zu-End Verschlüsselung
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>End-zu-End Verschlüsselung</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Verschlüsselter Datentransfer
            </td>
          </tr>
          <tr className={s.MobileGrayRow}>
            <td className={s.DeskTd}>Verschlüsselter Datentransfer</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Mehrere Geräte pro Benutzer
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>Mehrere Geräte pro Benutzer</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Client für Windows, Linux und Mac
            </td>
          </tr>
          <tr className={s.MobileGrayRow}>
            <td className={s.DeskTd}>Client für Windows, Linux und Mac</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              iOS und Android
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>iOS und Android</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Daten öffentlich per Link teilen
            </td>
          </tr>
          <tr className={s.MobileGrayRow}>
            <td className={s.DeskTd}>Daten öffentlich per Link teilen</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Mehrere Benutzer möglich
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>Mehrere Benutzer möglich</td>
            <td>
              <span className={s.BlueCheck}></span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Zentrale Verwaltungskonsole
            </td>
          </tr>
          <tr className={s.MobileGrayRow}>
            <td className={s.DeskTd}>Zentrale Verwaltungskonsole</td>
            <td>
              <span className={s.BlueCheck}></span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Support per E-Mail
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>Support per E-Mail</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Speicherplatz
            </td>
          </tr>
          <tr className={s.MobileGrayRow}>
            <td className={s.DeskTd}>Speicherplatz</td>
            <td>
              <span className={s.BlueText}>100GB / 500GB / 1TB</span>
            </td>
            <td>
              <span className={s.BlueText}>500GB pro Benutzer</span>
            </td>
            <td>
              <span className={s.GreenText}>500GB pro Benutzer</span>
            </td>
            <td>
              <span className={s.GreenText}>500GB pro Benutzer</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.MobTd}>
            <td colSpan="4" align="center">
              Anzahl Benutzer
            </td>
          </tr>
          <tr className={s.GrayRow}>
            <td className={s.DeskTd}>Anzahl Benutzer</td>
            <td>
              <span className={s.BlueText}>1</span>
            </td>
            <td>
              <span className={s.BlueText}>individuell</span>
            </td>
            <td>
              <span className={s.GreenText}>individuell</span>
            </td>
            <td>
              <span className={s.GreenText}>individuell</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
