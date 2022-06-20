import React from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";

import Footer from "../Footer/Footer";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Contact({ contact, menus }) {
  // console.log(contact);
  return (
    <div id="contact" className={styles.contact}>
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

          <div className={styles.contactContainer}>
            <div className={styles.map}>
              <iframe
                src={contact.contact.iframeGoogleMaps}
                width="500"
                height="292"
                className={styles.iframe}
                loading="lazy"
              ></iframe>
            </div>
            <div className={styles.contactGrid}>
              <div className={styles.headlinesGrid}>
                <div className={styles.headlinesItem}>
                  <Image
                    src={contact.contact.emailPicto.mediaItemUrl}
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.headlinesItem}>
                  <Image
                    src={contact.contact.phonePicto.mediaItemUrl}
                    alt=""
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.headlinesItem}>
                  <Image
                    src={contact.contact.adressPicto.mediaItemUrl}
                    alt=""
                    width={25}
                    height={25}
                  />
                </div>
              </div>
              <div className={styles.itemGrid}>
                <div className={styles.contactItem}>
                  <Link href={contact.contact.emailUrl}>
                    <a>
                      <h5>{contact.contact.email}</h5>
                    </a>
                  </Link>
                </div>
                <div className={styles.contactItem}>
                  <Link href={contact.contact.phoneUrl}>
                    <a>
                      <h5>{contact.contact.phone}</h5>
                    </a>
                  </Link>
                </div>
                <div className={styles.contactItem}>
                  <Link href={contact.contact.adressUrl}>
                    <a target="_blank">
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: contact.contact.adress,
                        }}
                      />
                    </a>
                  </Link>
                </div>
                <div className={styles.contactLogo}>
                  <Image
                    width={150}
                    height={150}
                    alt={contact.contact.logo2.altText}
                    src={contact.contact.logo2.sourceUrl}
                  />
                  <Image
                    width={163}
                    height={115}
                    alt={contact.contact.logo1.altText}
                    src={contact.contact.logo1.sourceUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.nav}>
          <Footer />
        </div>
      </div>
    </div>
  );
}
