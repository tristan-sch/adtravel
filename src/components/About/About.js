import React from "react";
import Link from "next/link";
import styles from "./About.module.scss";

import {
  FaChevronDown,
  FaBus,
  FaCar,
  FaHiking,
  FaStar,
  FaCircle,
  FaStack,
} from "react-icons/fa";

// import Image from "next/image";

export default function About({ menus, settings, about, services }) {
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
            {/* <h3>Who we are</h3> */}
            <p>{about.aboutDescription}</p>
          </div>

          <div className={styles.blocksContainer}>
            {services.map((service, index) => (
              <div className={styles.block} key={index}>
                <i className={styles.icon}>
                  <FaHiking />
                </i>
                <h5>{service.node.title}</h5>

                {/* <p dangerouslySetInnerHTML={{ __html: service.node.content }} /> */}
              </div>
            ))}
            {/* <div className={styles.block}>
              <i className={styles.icon}>
                <FaHiking />
              </i>
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.block}>
              <i className={styles.icon}>
                <FaHiking />
              </i>
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.block}>
              <i className={styles.icon}>
                <FaHiking />
              </i>
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.block}>
              <i className={styles.icon}>
                <FaHiking />
              </i>
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className={styles.block}>
              <i className={styles.icon}>
                <FaHiking />
              </i>
              <h5>Title</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div> */}
          </div>

          {/* CTA */}
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
