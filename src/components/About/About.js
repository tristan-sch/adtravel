import React from "react";
import Link from "next/link";
import styles from "./About.module.scss";

import Image from "next/image";
import arrowDownYellow from "../../../public/arrowDownYellow.png";

export default function About({ menus }) {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>AD Travel</h1>
          <h2>Your Icelandic Specialist</h2>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.content}>
            <h3>Who we are</h3>
            <p>
              We are an Icelandic family-owned incoming wholesale Tour Operator.
            </p>
            <p>
              We work exclusively as incoming operator for Travel Agencies and
              Tour Operators.
            </p>

            <p>
              Our international staff allows us to operate on numerous tourism
              markets across the World.{" "}
            </p>
            <p>
              We have more than 30 years experience and deep ties within the
              Icelandic Travel Industry.
            </p>
          </div>

          <div className={styles.content}>
            <h3>What we offer</h3>
            <p>Guided tours</p>
            <p>Hiking tours</p>
            <p>Self-drive tours</p>
            <p>Tailor-made services</p>
          </div>
        </div>
        {menus.nodes.map((menu, index) => (
          <div key={index} className={styles.ctaGrid}>
            <h3>{menu.menuItems.edges[1].node.label}</h3>
          </div>
        ))}
        <div className={styles.arrowDownGrid}>
          <Link href="#team">
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
