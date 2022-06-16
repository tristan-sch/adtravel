import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import { FaBars, FaChevronDown } from "react-icons/fa";

import Image from "next/image";
import logo from "../../../public/logo-white.png";

export default function Nav({ header, menus, settings }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header id="header" className={styles.container}>
      {/* Nav */}
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <Link href="/">
            <a>
              <Image
                className={styles.logoImage}
                src={logo}
                alt="AD Travel Logo"
                width={133}
                height={94}
                // layout="responsive"
              />
            </a>
          </Link>
        </div>
        <button
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaBars />
        </button>

        <div
          className={isNavExpanded ? styles.navMenuExpended : styles.navMenu}
        >
          {menus.nodes.map((menu, index) => (
            <ul key={index} className={styles.navMenuItems}>
              {menu.menuItems.edges.map(({ node }) => (
                <li key={node.id}>
                  <Link href={node.path} passHref>
                    <h5>
                      <a>{node.label}</a>
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </nav>

      {/* Header */}
      <div className={styles.header}>
        <Image
          alt={header.header.heroImg.altText}
          src={header.header.heroImg.sourceUrl}
          layout="fill"
          objectFit="cover"
          className={styles.test}
        />

        <div className={styles.headline}>
          <h1>{settings.title}</h1>
          <h2>{settings.description}</h2>
          {/* <div className={styles.buttonContainer}>
              <button className={styles.primaryButton}>
                <p>Contact</p>
              </button>
            </div> */}
        </div>
        <div className={styles.goDown}>
          {menus.nodes.map((menu) => (
            <h5 key={menu.menuItems.edges[0].node.id}>
              {menu.menuItems.edges[0].node.label}
            </h5>
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
    </header>
  );
}
