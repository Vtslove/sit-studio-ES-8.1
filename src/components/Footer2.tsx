import { FunctionComponent } from "react";
import styles from "./styles/Footer2.module.css";

const Footer2: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.moscowStBolotnikovskaya}>
        117638, Moscow, st. Bolotnikovskaya, 30 sq. 24
      </div>
      <div className={styles.sitStudioWrapper}>
        <h1 className={styles.sitStudio}>sit studio</h1>
      </div>
      <div className={styles.catalogParent}>
        <div className={styles.catalog}>Catalog</div>
        <div className={styles.eswtParent}>
          <div className={styles.eswt}>ESWT</div>
          <div className={styles.hilt}>HILT</div>
          <div className={styles.skinIq}>Skin IQ</div>
          <div className={styles.rehabSimulators}>Rehab Simulators</div>
          <div className={styles.eecp}>EECP</div>
        </div>
      </div>
      <div className={styles.servicesParent}>
        <div className={styles.services}>Services</div>
        <div className={styles.orderDesign}>
          <div className={styles.orderDesign1}>Order Design</div>
          <div className={styles.consultation}>Consultation</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.about}>About</div>
        <div className={styles.aboutUsParent}>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.news}>News</div>
        </div>
      </div>
      <button className={styles.orderDesignAbout}>
        <div className={styles.getInTouch}>Get In Touch</div>
      </button>
      <div className={styles.socials}>
        <button className={styles.icons8Tiktok1Wrapper}>
          <img
            className={styles.icons8Tiktok1}
            alt=""
            src="/icons8tiktok-1.svg"
          />
        </button>
        <button className={styles.icons8Youtube1Wrapper}>
          <img
            className={styles.icons8Youtube1}
            alt=""
            src="/icons8youtube-1.svg"
          />
        </button>
      </div>
      <div className={styles.contacts}>
        <div className={styles.contactsChild} />
        <div className={styles.div}>+7 (999) 400 67 10</div>
        <div className={styles.sitstudiomailgmailcom}>
          sitstudiomail@gmail.com
        </div>
      </div>
      <div className={styles.sitStudioAllContainer}>
        <p className={styles.sitStudio1}>© 2024 — sit studio</p>
        <p className={styles.allRightsReserved}>All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer2;
