import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import { FaChevronDown } from "react-icons/fa";

import Image from "next/image";

export default function Nav({ header, menus }) {
  return (
    <div id="header" className={styles.container}>
      <Image
        alt={header.header.heroImg.altText}
        src={header.header.heroImg.sourceUrl}
        layout="fill"
        objectFit="cover"
      />

      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>{header.header.headline}</h1>
        </div>
        <div className={styles.arrowDownGrid}>
          {menus.nodes.map((menu) => (
            <h4 key={menu.menuItems.edges[0].node.id}>
              {menu.menuItems.edges[0].node.label}
            </h4>
          ))}
          {menus.nodes.map((menu) => (
            <Link
              key={menu.menuItems.edges[0].node.id}
              href={menu.menuItems.edges[0].node.path}
            >
              <a className={styles.arrow}>
                <FaChevronDown />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
