import React from "react";
import styles from "./Notification.module.scss";

const Notification = ({type, message}) => {
  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <p className="p p_small">{message}</p>
    </div>
  );
}

export default Notification;