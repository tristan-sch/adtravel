import React from "react";
import Link from "next/link";
import styles from "./About.module.scss";

import { FaChevronDown } from "react-icons/fa";

import Image from "next/image";

export default function About({ menus, about, services }) {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.bg} aria-hidden="true"></div>
      <div className={styles.container}>
        <div className={styles.headlines}>
          {menus.nodes.map((menu, index) => (
            <h1 key={index}>{menu.menuItems.edges[0].node.label}</h1>
          ))}
          <h2>{about.aboutSubheadline}</h2>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.content}>
            <div
              dangerouslySetInnerHTML={{ __html: about.aboutDescription }}
            ></div>
          </div>

          <div className={styles.blocksContainer}>
            {services.map((service, index) => (
              <div className={styles.block} key={index}>
                <div className={styles.icon}>
                  <Image
                    src={service.node.icon.icon.mediaItemUrl}
                    alt=""
                    width={20}
                    height={20}
                    color="red"
                  />
                </div>

                <h5>{service.node.title}</h5>

                <div
                  dangerouslySetInnerHTML={{ __html: service.node.content }}
                ></div>
              </div>
            ))}
          </div>

          {/* ARROW DOWN */}
          <div className={styles.arrowDownGrid}>
            {menus.nodes.map((menu) => (
              <h5 key={menu.menuItems.edges[1].node.id}>
                {menu.menuItems.edges[1].node.label}
              </h5>
            ))}
            {menus.nodes.map((menu) => (
              <Link
                key={menu.menuItems.edges[1].node.id}
                href={menu.menuItems.edges[1].node.path}
              >
                <a className={styles.arrow}>
                  <FaChevronDown />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
