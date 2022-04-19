import React from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Nav({ allMenus }) {
  //   console.log(allMenus);
  return (
    <div className={styles.navBar}>
      <div className={styles.navLogo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="AD Travel Logo" width={114} height={80} />
          </a>
        </Link>
      </div>
      <div className={styles.navMenu}>
        {allMenus.nodes.map((menu) => (
          <ul className={styles.navMenu}>
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
