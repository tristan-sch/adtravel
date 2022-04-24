import React from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";

import Image from "next/image";
import arrowDownYellow from "../../../public/arrowDownYellow.png";

export default function Contact({ contact }) {
  // console.log(contact);
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>Get in touch</h1>
          <h2>blablabla</h2>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.content}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6965.7873132882605!2d-21.788769!3d64.120958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d8773a71586fbab!2sAD%20TRAVEL!5e0!3m2!1sfr!2sis!4v1650798119859!5m2!1sfr!2sis"
              width="600"
              height="450"
              className={styles.iframe}
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.headlinesGrid}>
              <div className={styles.headlinesItem}>
                <h3>Email</h3>
              </div>
              <div className={styles.headlinesItem}>
                <h3>Phone</h3>
              </div>
              <div className={styles.headlinesItem}>
                <h3>Adress</h3>
              </div>
            </div>
            <div className={styles.itemGrid}>
              <div className={styles.contactItem}>
                <h3>{contact.contact.email}</h3>
              </div>
              <div className={styles.contactItem}>
                <h3>{contact.contact.phone}</h3>
              </div>
              <div className={styles.contactItem}>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: contact.contact.adress,
                  }}
                />
              </div>
              <div className={styles.contactItem}>
                <Image
                  width={100}
                  height={100}
                  alt={contact.contact.logo1.altText}
                  src={contact.contact.logo1.sourceUrl}
                  // layout="fill"
                  // objectFit="cover"
                />
                <Image
                  width={100}
                  height={100}
                  alt={contact.contact.logo2.altText}
                  src={contact.contact.logo2.sourceUrl}
                  // layout="fill"
                  // objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowDownGrid}>
          <Link href="#header">
            <a>
              <Image
                src={arrowDownYellow}
                alt="Arrow down"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
