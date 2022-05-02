import React from "react";
import Link from "next/link";
import styles from "./About.module.scss";

import { FaChevronDown, FaBus, FaCar, FaHiking, FaStar } from "react-icons/fa";

// import Image from "next/image";

export default function About({ menus, settings }) {
  return (
    <div id="about" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>{settings.title}</h1>
          <h3>{settings.description}</h3>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.content}>
            <h3>Who we are</h3>
            <p>
              We are an Icelandic family-owned incoming wholesale Tour Operator.
              We work exclusively as incoming operator for Travel Agencies and
              Tour Operators. Our international staff allows us to operate on
              numerous tourism markets across the World. We have more than 30
              years experience and deep ties within the Icelandic Travel
              Industry.
            </p>
            <br />
            <p>
              We are an Icelandic family-owned incoming wholesale Tour Operator.
              We work exclusively as incoming operator for Travel Agencies and
              Tour Operators. Our international staff allows us to operate on
              numerous tourism markets across the World. We have more than 30
              years experience and deep ties within the Icelandic Travel
              Industry.
            </p>
          </div>

          <div className={styles.offer}>
            <ul>
              <h3>What we offer</h3>
              <li>
                <h5>
                  <FaBus /> Guided tours
                </h5>
              </li>
              <li>
                <h5>
                  <FaHiking /> Hiking tours
                </h5>
              </li>
              <li>
                <h5>
                  <FaCar /> Self-drive tours
                </h5>
              </li>
              <li>
                <h5>
                  <FaStar /> Tailor-made services
                </h5>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <button className={styles.primaryButton}>Contact us</button>
        </div>
        <div className={styles.arrowDownGrid}>
          {menus.nodes.map((menu) => (
            <h4 key={menu.menuItems.edges[1].node.id}>
              {menu.menuItems.edges[1].node.label}
            </h4>
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
  );
}
