import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const Page = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>{data.body}</p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Malick</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            width={500}
            height={250}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sit
          impedit beatae perspiciatis exercitationem maiores dolorem, unde, nisi
          laborum et nesciunt explicabo nostrum minima placeat ab fuga
          voluptatibus ipsum cupiditate. Sint eaque omnis placeat amet ab,
          perferendis mollitia esse cupiditate. Autem in earum quibusdam
          voluptate sit deserunt a architecto, ducimus pariatur dignissimos illo
          nemo laboriosam sint quia sunt fugiat deleniti. Dicta culpa sequi
          commodi ratione nemo! Rem nulla esse velit architecto impedit, aliquam
          eveniet facere blanditiis vero laboriosam eaque odit in commodi
          doloribus provident ipsum incidunt illum minus explicabo temporibus
          nobis rerum quia eligendi. Iusto tempora ratione beatae quasi,
          pariatur voluptates quisquam asperiores quae libero et cumque laborum,
          illo totam commodi dolores nam tempore placeat enim quam. Velit dolore
          magnam accusamus iusto asperiores, nihil fugit corporis tempore iste
          impedit itaque illum blanditiis repellat sed aliquid alias nulla odit
          quam recusandae. Quisquam iusto voluptatibus repellendus id minus
          consectetur nemo. Pariatur, vitae reiciendis! Distinctio voluptate
          dolores, repudiandae ducimus, perspiciatis assumenda voluptatem
          eligendi optio maxime unde earum enim fuga consequuntur officiis eum
          accusantium? Iure itaque voluptates suscipit minus dolores optio iste
          temporibus. Nostrum consequuntur temporibus laboriosam nemo ipsam
          vitae sit quaerat. Dolor reiciendis qui explicabo temporibus sed
          velit. Veniam, magnam ratione, hic, porro expedita dolor quae
          blanditiis officiis odio molestias cupiditate corrupti provident
          officia aspernatur minima quos consequuntur saepe! Incidunt deserunt
          quae veritatis eaque exercitationem quibusdam, beatae quis tempora,
          placeat provident eligendi ad qui error quisquam eos? Corporis
          possimus rerum velit obcaecati magnam assumenda? Quo amet maiores
          expedita deleniti labore sapiente reiciendis eius. Commodi nesciunt
          recusandae quae quidem minima laudantium, voluptatibus eaque adipisci,
          blanditiis, praesentium dolorum animi cum reiciendis! Cumque
          reiciendis sint mollitia voluptate, commodi quidem officiis
          voluptatibus veniam earum minus ullam pariatur dolorum, perferendis
          eum beatae, officia doloremque suscipit ipsa fugiat possimus magnam.
          Pariatur vero ex est saepe iusto alias facere architecto. Doloremque,
          nobis.
        </p>
      </div>
    </div>
  );
};

export default Page;
