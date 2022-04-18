import React from "react";
import Link from "next/link";
import styles from "./Nav.module.scss";

import { getAllMenusForHome } from "../../lib/api";

export default function Nav({ allMenus }) {
  console.log(allMenus);
  return (
    <>
      {/* <div>
        {allMenus.edges.map(({ node, index }) => (
          <h1 key={index} className={styles.title}>
            {node.name}
          </h1>
        ))}
      </div> */}

      <div className={styles.navBar}>
        <ul className={styles.navMenu}>
          <li>
            <Link href="/" passHref>
              <h5>
                <a>About</a>
              </h5>
            </Link>
          </li>
          <li>
            <Link href="/" passHref>
              <h5>
                <a>Content</a>
              </h5>
            </Link>
          </li>

          <li className={styles.navSubMenu}>
            <Link href="https://horsemern.xyz/">
              <a target="_blank" rel="noreferrer">
                <button className={styles.button}>Login</button>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allMenus = await getAllMenusForHome();

  return {
    props: { allMenus },
  };
}
