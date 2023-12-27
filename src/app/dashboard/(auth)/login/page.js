"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import styles from "./page.module.scss";
const Page = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Page;
