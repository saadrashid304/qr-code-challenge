import React from "react";
import styles from "./QrCodeCard.module.css";
import qrCode from "./qrCode.png";

const QrCodeCard = () => {
  return (
    <div className={styles.cardMainContainer}>
      <div className={styles.cardSubContainer}>
        <img src={qrCode} alt="QR Code" className={styles.qrImage} />
        <div className={styles.titleBold}>
          Improve your front-end skills by building projects
        </div>
        <div className={styles.desccription}>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </div>
      </div>
    </div>
  );
};

export default QrCodeCard;
