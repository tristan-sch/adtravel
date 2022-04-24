import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.navLogo}>
        <Link href="/">
          <a>
            <Image src={logo} alt="AD Travel Logo" width={133} height={94} />
          </a>
        </Link>
        <div className={styles.navDescription}>
          <h5>Description</h5>
        </div>
      </div>
      <div className={styles.navMenu}>
        <h5>Item</h5>
      </div>
    </div>
  );
}
