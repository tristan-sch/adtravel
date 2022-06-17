import React from "react";
import Link from "next/link";
import styles from "./Contact.module.scss";

import Footer from "../Footer/Footer";

import Image from "next/image";
import logo from "../../../public/logo.png";

export default function Contact({ contact }) {
  // console.log(contact);
  return (
    <div id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.headlines}>
          <h1>Title</h1>
          <h2>Subtitle</h2>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.content}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6965.7873132882605!2d-21.788769!3d64.120958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d8773a71586fbab!2sAD%20TRAVEL!5e0!3m2!1sfr!2sis!4v1650798119859!5m2!1sfr!2sis"
              width="600"
              height="350"
              className={styles.iframe}
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // allowFullScreen=""
              // aria-hidden="false"
              // tabIndex="0"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className={styles.contactGrid}>
            <div className={styles.headlinesGrid}>
              <div className={styles.headlinesItem}>
                <h5>Email</h5>
              </div>
              <div className={styles.headlinesItem}>
                <h5>Phone</h5>
              </div>
              <div className={styles.headlinesItem}>
                <h5>Adress</h5>
              </div>
            </div>
            <div className={styles.itemGrid}>
              <div className={styles.contactItem}>
                <h5>{contact.contact.email}</h5>
              </div>
              <div className={styles.contactItem}>
                <h5>{contact.contact.phone}</h5>
              </div>
              <div className={styles.contactItem}>
                <h5
                  dangerouslySetInnerHTML={{
                    __html: contact.contact.adress,
                  }}
                />
              </div>
              <div className={styles.contactLogo}>
                <Image
                  width={163}
                  height={115}
                  alt={contact.contact.logo1.altText}
                  src={contact.contact.logo1.sourceUrl}
                />
                <Image
                  width={115}
                  height={115}
                  alt={contact.contact.logo2.altText}
                  src={contact.contact.logo2.sourceUrl}
                />
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
