"use client";
import React, { useContext } from "react";
import styles from "./darkMode.module.scss";
import { ThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div
        className={styles.ball}
        style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkMode;
