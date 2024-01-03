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
          <h1 className={styles.title}>Who Am I ?</h1>
          <p className={styles.desc}>
            I am passionate about creating websites and applications that have a
            positive impact on people\s lives. I enjoy working on projects that
            require deep thinking and creative problem-solving. I am a big fan
            of modern web technologies such as React, Vue.js, and Node.js, and I
            am always looking for new trends and new ways to build amazing
            websites.
            <br />
            <br />
            As a self-taught web developer, I have gained extensive experience
            working on various projects. I have a strong background in both
            front-end and back-end development, as well as in designing
            databases and deploying websites. I am also comfortable with
            programming languages such as HTML, CSS, JavaScript, and PHP.
            <br />
            <br />I am passionate about learning and always looking for new
            challenges to improve myself. I am convinced that passion and
            commitment are the keys to succeeding as a web developer.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Nous offrons une gamme complète de services allant du marketing
            numérique au développement web. Ce quicomprend la mise en œuvre de
            stratégies de marketing en ligne, la création de sites web
            dynamiques, le développement d'applications web personnalisées,
            ainsi que la conception et la création d'applications mobiles.
            <br />
            <br /> - Digital Marketing
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Ecommerce - Web Apps - Mobile Apps
          </p>
          <Button text="Contact Us" url="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Page;
