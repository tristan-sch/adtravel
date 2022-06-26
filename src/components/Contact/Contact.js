import React from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";

import { FaChevronUp, FaMobile, FaEnvelope } from "react-icons/fa";

import Image from "next/image";

export default function Contact({ contact, menus }) {
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.bg} aria-hidden="true"></div>
      <div className={styles.container}>
        <div className={styles.headlines}>
          {menus.nodes.map((menu, index) => (
            <h1 key={index}>{menu.menuItems.edges[2].node.label}</h1>
          ))}
          <h2>{contact.contact.contactSubheadline}</h2>
        </div>
        <div className={styles.contentGrid}>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{
              __html: contact.contact.contactDescription,
            }}
          ></div>
          <div className={styles.buttonsContainer}>
            <div className={styles.button}>
              <button className={styles.primaryButton}>
                <Link href={contact.contact.emailUrl}>
                  <a>
                    <h6>
                      <FaEnvelope /> {"\u00a0\u00a0"}
                      {contact.contact.email}
                    </h6>
                  </a>
                </Link>
              </button>
            </div>
            <div className={styles.button}>
              <button className={styles.primaryButton}>
                <Link href={contact.contact.emailUrl}>
                  <a>
                    <h6>
                      <FaMobile /> {"\u00a0\u00a0"}
                      {contact.contact.phone}
                    </h6>
                  </a>
                </Link>
              </button>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.map}>
              <iframe
                src={contact.contact.iframeGoogleMaps}
                width="500"
                height="292"
                className={styles.iframe}
                loading="lazy"
              ></iframe>
              <Link href={contact.contact.adressUrl}>
                <a target="_blank">
                  <h6
                    dangerouslySetInnerHTML={{
                      __html: contact.contact.adress,
                    }}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.footerItem}>
            {"\u00a0\u00a0\u00a0"}
            <Image
              width={115}
              height={81}
              alt={contact.contact.logo1.altText}
              src={contact.contact.logo1.sourceUrl}
            />
          </div>
          <div className={styles.footerItem}>
            <Link href="/">
              <a>
                <FaChevronUp />
              </a>
            </Link>
          </div>

          <div className={styles.footerItem}>
            <Image
              width={115}
              height={115}
              alt={contact.contact.logo2.altText}
              src={contact.contact.logo2.sourceUrl}
              className={styles.image}
            />
            {"\u00a0\u00a0\u00a0"}
          </div>
        </footer>
      </div>
    </div>
  );
}
