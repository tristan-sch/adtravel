import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";

import { FaChevronUp, FaFacebookSquare } from "react-icons/fa";

import Image from "next/image";
import logo from "../../../public/logo-white.png";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerItem}>
        <Link href="/">
          <a>
            <Image src={logo} alt="AD Travel Logo" width={98} height={69} />
          </a>
        </Link>
      </div>

      <div className={styles.footerItem}>
        <h6>© AD Travel 2022</h6>
      </div>
      <div className={styles.footerItem}>
        <Link href="/">
          <a>
            <FaChevronUp />
          </a>
        </Link>
      </div>
      <div className={styles.footerItem}>
        <h6>Connect with us on </h6>
      </div>
      <div className={styles.footerItem}>
        <Link href="/">
          <a>
            <FaFacebookSquare />
          </a>
        </Link>
      </div>
    </div>
  );
}
