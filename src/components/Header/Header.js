import React, { useState } from "react";
// import Link from "next/link";
import styles from "./Header.module.scss";

import Image from "next/image";
// import hero from "../../../public/hero.png";
import arrowDown from "../../../public/arrowDown.png";
// import arrowDown2 from "../../../public/arrowDown2.png";

export default function Nav({ hero }) {
  // console.log(hero);
  return (
    <div className={styles.header}>
      <Image
        // width={1920}
        // height={1080}
        alt={hero.hero.altText}
        src={hero.hero.sourceUrl}
        layout="fill"
        objectFit="cover"
      />

      <div className={styles.headerContainer}>
        <div className={styles.headlinesContainer}>
          <h1>Begin your ADventure</h1>
          <h2>with AD Travel, your Iceland Specialist</h2>
        </div>
        <div className={styles.arrowDown}>
          <Image src={arrowDown} alt="Arrow down" width={50} height={50} />
        </div>
      </div>
    </div>
  );
}
