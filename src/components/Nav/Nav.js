import React from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Nav({ menus, settings }) {
  //   console.log(menus);
  return (
    <div className={styles.nav}>
      <div className={styles.navLogo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="AD Travel Logo" width={133} height={94} />
          </a>
        </Link>
        <div className={styles.navDescription}>
          <h5>{settings.description}</h5>
        </div>
      </div>
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
  );
}
