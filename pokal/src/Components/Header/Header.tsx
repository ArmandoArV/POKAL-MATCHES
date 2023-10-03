"use client";
import React, { useState } from "react";
import { headerItems } from "@/constants";
import styles from "./Header.module.css";
import Link from "next/link";
import { StaticImageData } from "next/image";
// Router from next

interface HeaderProps {
  headerLogo: StaticImageData;
}

// ...
export default function Header({ headerLogo }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    // Check if the screen width is below a certain threshold (e.g., 767px)
    const isMobile = window.innerWidth <= 767;
  
    return (
      <header className={styles.headerContainer}>
        <div className={styles.headerLogo}>
          <Link href="/">
            <img src={headerLogo.src} alt="logo" />
          </Link>
        </div>
        {isMobile ? ( // Render inside hamburger menu on mobile
          <div className={styles.hamburgerMenu} onClick={toggleMenu}>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}
            ></div>
            <div
              className={`${styles.bar} ${isMenuOpen ? styles.active : ""}`}
            ></div>
          </div>
        ) : (
          // Render outside hamburger menu on large devices
          <div className={styles.headerItems}>
            <ul className={styles.headerItemsList}>
              {headerItems.map((item) => (
                <li key={item.id}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className={`${styles.MenuDesplegable} ${isMenuOpen ? styles.open : ""}`}>
          <ul className={`${styles.headerItemsList} ${isMenuOpen ? styles.open : ""}`}>
            {headerItems.map((item) => (
              <li key={item.id}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    );
  }
  