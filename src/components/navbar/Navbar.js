"use client";
import Link from "next/link";
import React from "react";
import styles from "./navbar.module.scss";
import DarkMode from "../DarkMode/DarkMode";
import { signOut, useSession } from "next-auth/react";

const links = [
  // {
  //   id: 1,
  //   title: "Home",
  //   url: "/",
  // },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();
  return (
    <header className={styles.wrapper}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          {" "}
          &lt; MSN /&gt;
        </Link>
        <div className={styles.links}>
          <DarkMode />
          {links.map((link) => (
            <Link key={link.id} href={link.url} className={styles.link}>
              {link.title}
            </Link>
          ))}
          {session.status === "authenticated" && (
            <button className={styles.logout} onClick={signOut}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
