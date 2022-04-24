import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import Image from "next/image";
import arrowDown from "../../../public/arrowDown.png";

export default function Nav({ header, menus }) {
  // console.log(header);
  // console.log(menus);
  return (
    <div id="header" className={styles.container}>
      <Image
        // width={1920}
        // height={1080}
        alt={header.header.heroImg.altText}
        src={header.header.heroImg.sourceUrl}
        layout="fill"
        objectFit="cover"
      />

      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>{header.header.headline}</h1>
        </div>
        {/* <div className={styles.ctaGrid}>
          <h3>Contact us</h3> */}
        {menus.nodes.map((menu, index) => (
          <div key={index} className={styles.ctaGrid}>
            <h3>{menu.menuItems.edges[0].node.label}</h3>
          </div>
        ))}
        {/* </div> */}
        <div className={styles.arrowDownGrid}>
          <Link href="#about">
            <a>
              <Image src={arrowDown} alt="Arrow down" width={50} height={50} />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
