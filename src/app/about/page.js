import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
        />
      </div>
      <div className={styles.textContainer}></div>
    </div>
  );
};

export default Page;
