import { useState } from "react";
import Link from "next/link";
import styles from "./Team.module.scss";
import Image from "next/image";

import Slider from "react-slick";

import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
} from "react-icons/fa";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export default function Team({ team, menus }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section id="team" className={styles.team}>
      {/* Headlines */}
      <div className={styles.container}>
        <div className={styles.headlines}>
          <h1>Title</h1>
          <h2>Description</h2>
        </div>
        {/* Slider */}
        <div className={styles.contentGrid}>
          <div className={styles.arrowContainer} onClick={sliderRef?.slickPrev}>
            <FaChevronLeft />
          </div>
          <div className={styles.sliderContainer}>
            <link
              rel="stylesheet"
              type="text/css"
              charset="UTF-8"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
            />
            <link
              rel="stylesheet"
              type="text/css"
              href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
            />

            <Slider {...settings} ref={setSliderRef}>
              {team.map((staff, index) => (
                <div key={index}>
                  <div className={styles.slide}>
                    <div className={styles.imageContainer}>
                      <Image
                        className={styles.staffImage}
                        src={staff.node.featuredImage.node.sourceUrl}
                        alt={staff.node.featuredImage.node.altText}
                        width={150}
                        height={150}
                        // layout="responsive"
                      />
                    </div>
                    <h5 className={styles.title}>{staff.node.title}</h5>
                    <h6
                      dangerouslySetInnerHTML={{ __html: staff.node.content }}
                    />

                    {/* <div className={styles.buttonContainer}>
                      <button className={styles.teamButton}>Contact</button>
                      <FaEnvelope />
                    </div> */}
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.arrowContainer} onClick={sliderRef?.slickNext}>
            {" "}
            <FaChevronRight />
          </div>
        </div>
        {/* CTA */}
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
    </section>
  );
}
