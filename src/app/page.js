import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero4.svg";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Malick Siguy NDIAYE</h1>
        <h3 className={styles.title1}>Web developer</h3>
        <p className={styles.description}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text="See My Works." url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
