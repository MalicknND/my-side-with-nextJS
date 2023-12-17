import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Button from "@/components/Button/Button";

const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgSubtitle}>Digital Storytellers</h1>
          <h1 className={styles.imgDesc}>
            Handcrafting award winning digital experiences
          </h1>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We ?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            blanditiis excepturi voluptatibus, corporis nobis facere
            necessitatibus aspernatur molestias quo illum, quidem eum molestiae
            iusto quas nulla laudantium quos eos voluptate.
            <br />
            <br />
            Distinctio error ipsum aspernatur fuga impedit cumque mollitia,
            tenetur placeat porro ullam, ducimus earum velit. Modi facilis
            mollitia in sapiente id aliquam, fugit maxime eligendi praesentium.
            Saepe voluptates explicabo dolorem.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            blanditiis excepturi voluptatibus, corporis nobis facere.
            <br />
            <br /> - Digital Marketing
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Ecommerce - Web Apps
            <br />
            <br /> - Mobile Apps
          </p>
          <Button text="Contact Us" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Page;
