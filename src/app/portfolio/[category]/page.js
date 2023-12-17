import React from "react";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Page = ({ params }) => {
  console.log(params);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequatur dicta nam, assumenda hic porro? Nihil, neque facilis?
            Sed dolores ut eum vitae impedit nemo sapiente? Possimus tempora
            dolore illum quos quae harum magni fugit accusamus eligendi quod
            quis, vero ex repellat asperiores placeat iste molestias minus.
            Fugiat harum minus quibusdam praesentium blanditiis! Ipsam delectus,
            sapiente mollitia nulla ex officiis.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            consequatur dicta nam, assumenda hic porro? Nihil, neque facilis?
            Sed dolores ut eum vitae impedit nemo sapiente? Possimus tempora
            dolore illum quos quae harum magni fugit accusamus eligendi quod
            quis, vero ex repellat asperiores placeat iste molestias minus.
            Fugiat harum minus quibusdam praesentium blanditiis! Ipsam delectus,
            sapiente mollitia nulla ex officiis.
          </p>
          <Button text="See more" url="#" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
