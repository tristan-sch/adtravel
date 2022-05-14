import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

import { FaBars, FaChevronDown } from "react-icons/fa";

import Image from "next/image";
import logo from "../../../public/logo-white.png";

export default function Nav({ header, menus }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <>
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

          <div
            className={
              isNavExpanded ? styles.navMobileExpended : styles.navMobile
            }
          >
            <div className={styles.navMenu}>
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
                  <li
                    className={styles.hamburger}
                    onClick={() => {
                      setIsNavExpanded(!isNavExpanded);
                    }}
                  >
                    {" "}
                    <FaBars />
                  </li>
                </ul>
              ))}
            </div>
          </div>
          {/* <div
            className={styles.hamburger}
            onClick={() => {
              setIsNavExpanded(!isNavExpanded);
            }}
          >
            <FaBars />
          </div> */}
        </nav>

        {/* Header */}
        <div className={styles.header}>
          <Image
            alt={header.header.heroImg.altText}
            src={header.header.heroImg.sourceUrl}
            layout="fill"
            objectFit="cover"
          />

          <div className={styles.headline}>
            <h1>{header.header.headline}</h1>
          </div>
          <div className={styles.arrowDown}>
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
      </header>
    </>
  );
}
