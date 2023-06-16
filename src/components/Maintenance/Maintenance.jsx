import React from "react";

import styles from "./Maintenance.module.css";

import { TbRoadOff } from "react-icons/tb";

const MaintenancePage = () => {
  return (
    <>
      <div className={styles.Maintenance}>
        <TbRoadOff />
        <p>Site em manutenção</p>
      </div>
    </>
  );
};

export default MaintenancePage;
