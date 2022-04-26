import React from "react";
import Link from "next/link";
import styles from "./Team.module.scss";

import Image from "next/image";
import arrowDownYellow from "../../../public/arrowDownYellow.png";

export default function Team({ menus, team }) {
  return (
    <div id="team" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>Meet our team</h1>
          <h2>Please fill out the form or contact us directly </h2>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.arrowContainer}>
            <h3>Arrow Left</h3>
          </div>

          <div className={styles.teamContainer}>
            <div className={styles.teamGrid}>
              {team.map(({ node }) => (
                <div key={node.id} className={styles.teamItem}>
                  <h3>{node.title}</h3>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.arrowContainer}>
            <h3>Arrow right</h3>
          </div>
        </div>
        {menus.nodes.map((menu, index) => (
          <div key={index} className={styles.ctaGrid}>
            <h3>{menu.menuItems.edges[2].node.label}</h3>
          </div>
        ))}
        <div className={styles.arrowDownGrid}>
          <Link href="#contact">
            <a>
              <Image
                src={arrowDownYellow}
                alt="Arrow down"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
