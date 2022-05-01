import React, { useState } from "react";
import Link from "next/link";
import styles from "./Team.module.scss";

import { FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa";

import Image from "next/image";

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
          <h3>Dedicated to you</h3>
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
                        width={150}
                        height={150}
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
                    {index === current && (
                      <h5>
                        <button className={styles.teamButton}>
                          Send email
                        </button>
                      </h5>
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
                        width={150}
                        height={150}
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
                    {index === current && (
                      <h5>
                        <button className={styles.teamButton}>
                          Send email
                        </button>
                      </h5>
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
                        width={150}
                        height={150}
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
                    {index === current && (
                      <h5>
                        <button className={styles.teamButton}>
                          Send email
                        </button>
                      </h5>
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
        <div className={styles.arrowDownGrid}>
          {menus.nodes.map((menu) => (
            <h4 key={menu.menuItems.edges[2].node.id}>
              {menu.menuItems.edges[2].node.label}
            </h4>
          ))}
          {menus.nodes.map((menu) => (
            <Link
              key={menu.menuItems.edges[2].node.id}
              href={menu.menuItems.edges[2].node.path}
            >
              <a className={styles.arrow}>
                <FaChevronDown />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
