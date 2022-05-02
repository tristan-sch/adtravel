import { useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

import { FaBars } from "react-icons/fa";

import Image from "next/image";
import logo from "../../../public/logo-white.png";

export default function Nav({ menus }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <div className={styles.nav}>
      <div className={styles.grid}>
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
            isNavExpanded ? styles.navMenuGridExpended : styles.navMenuGrid
          }
        >
          <div className={styles.navMenu}>
            {menus.nodes.map((menu, index) => (
              <ul key={index} className={styles.navMenu}>
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
        </div>
        <div
          className={styles.hamburger}
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          <FaBars />
        </div>
      </div>
    </div>
  );
}
