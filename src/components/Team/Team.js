import React, { useState } from "react";
import Link from "next/link";
import styles from "./Team.module.scss";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

import Image from "next/image";
import arrowDownYellow from "../../../public/arrowDownYellow.png";

export default function Team({ menus, team }) {
  const [current, setCurrent] = useState(0);
  const length = team.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div id="team" className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.headlinesGrid}>
          <h1>Meet our team</h1>
          <h3>Please fill out the form or contact us directly </h3>
        </div>
        <div className={styles.contentGrid}>
          <div className={styles.arrowContainer}>
            <FaChevronLeft className="leftArrow" onClick={prevSlide} />
          </div>

          <div className={styles.teamContainer}>
            <div className={styles.teamGrid}>
              {team.map((node, index) => {
                let i = index;
                if (index > team.length - 3) i = team.length - 3;
                return (
                  <div key={index}>
                    {index === current && (
                      <Image
                        className={styles.teamImage}
                        width={200}
                        height={200}
                        alt={team[i].node.featuredImage.node.altText}
                        src={team[i].node.featuredImage.node.sourceUrl}
                      />
                    )}
                    {index === current && <h4>{team[i].node.title}</h4>}
                    {index === current && (
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: team[i].node.content,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.teamGrid}>
              {team.map((node, index) => {
                let i = index;
                if (index > team.length - 3) i = team.length - 3;
                return (
                  <div key={index}>
                    {index === current && (
                      <Image
                        className={styles.teamImage}
                        width={200}
                        height={200}
                        alt={team[i + 1].node.featuredImage.node.altText}
                        src={team[i + 1].node.featuredImage.node.sourceUrl}
                      />
                    )}
                    {index === current && <h4>{team[i + 1].node.title}</h4>}
                    {index === current && (
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: team[i + 1].node.content,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className={styles.teamGrid}>
              {team.map((node, index) => {
                let i = index;
                if (index > team.length - 3) i = team.length - 3;
                return (
                  <div key={index}>
                    {index === current && (
                      <Image
                        className={styles.teamImage}
                        width={200}
                        height={200}
                        alt={team[i + 2].node.featuredImage.node.altText}
                        src={team[i + 2].node.featuredImage.node.sourceUrl}
                      />
                    )}
                    {index === current && <h4>{team[i + 2].node.title}</h4>}
                    {index === current && (
                      <h5
                        dangerouslySetInnerHTML={{
                          __html: team[i + 2].node.content,
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.arrowContainer}>
            <FaChevronRight className="rightArrow" onClick={nextSlide} />
          </div>
        </div>
        {menus.nodes.map((menu, index) => (
          <div key={index} className={styles.ctaGrid}>
            <h3>{menu.menuItems.edges[2].node.label}</h3>
          </div>
        ))}
        <div className={styles.arrowDownGrid}>
          <Link href="#contact">
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
