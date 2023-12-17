import React from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            vero pariatur ratione error dicta. Eligendi, hic commodi delectus
            voluptas voluptates labore excepturi rem perferendis modi
            perspiciatis vitae, iusto blanditiis. Unde quidem perspiciatis nobis
            quis veniam eveniet ad officia nostrum dolore, provident obcaecati.
            Expedita, corporis doloremque magni, nesciunt recusandae, officiis
            maxime neque laborum nostrum accusamus mollitia consequuntur. Ab
            nemo soluta debitis architecto placeat alias corrupti enim quibusdam
            vitae, qui suscipit dolor dolore dignissimos, cum saepe! Eius
            doloribus omnis doloremque porro consectetur corporis iure libero
            similique blanditiis ipsam dolorum iusto suscipit et unde
            accusantium commodi ea, aspernatur velit alias animi. Sed, totam.
          </p>
        </div>
      </Link>
      <Link href="/blog/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
      <Link href="/testId" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Page;
