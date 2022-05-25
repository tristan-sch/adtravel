import React, { useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import styles from "./Team.module.scss";
import { FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

export default function Team({ menus, team }) {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <section id="team" className={styles.team}>
      <div className={styles.container}>
        <div className={styles.headlines}>
          <h1>Meet our team</h1>
          <h2>Dedicated to you</h2>
        </div>

        <div className={styles.contentGrid}>
          <Slider
            {...settings}
            arrows={false}
            ref={setSliderRef}
            className={styles.slider}
          >
            {listTestimoni.map((listTestimonis, index) => (
              <div className="px-3 flex items-stretch" key={index}>
                <div className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col">
                  <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                    <div className="flex order-2 xl:order-1">
                      <Image
                        src={listTestimonis.image}
                        height={50}
                        width={50}
                        alt="Icon People"
                      />
                      <div className="flex flex-col ml-5 text-left">
                        <p className="text-lg text-black-600 capitalize">
                          {listTestimonis.name}
                        </p>
                        <p className="text-sm text-black-500 capitalize">
                          {listTestimonis.city},{listTestimonis.country}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-none items-center ml-auto order-1 xl:order-2">
                      <p className="text-sm">{listTestimonis.rating}</p>
                      <span className="flex ml-4">
                        <Stars className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                  <p className="mt-5 text-left">
                    “{listTestimonis.testimoni}”.
                  </p>
                </div>
              </div>
            ))}
          </Slider>
          <div className="flex w-full items-center justify-end">
            <div className="flex flex-none justify-between w-auto mt-14">
              <div
                className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={sliderRef?.slickPrev}
              >
                <ArrowBack className="h-6 w-6 " />
              </div>
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-500 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-500 cursor-pointer"
                onClick={sliderRef?.slickNext}
              >
                <ArrowNext className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// export default function Team({ menus, team }) {
//   const [current, setCurrent] = useState(0);
//   const length = team.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   return (
//     <div id="team" className={styles.container}>
//       <div className={styles.grid}>
//         <div className={styles.headlinesGrid}>
//           <h1>Meet our team</h1>
//           <h3>Dedicated to you</h3>
//         </div>
//         <div className={styles.contentGrid}>
//           <div className={styles.arrowContainer}>
//             <FaChevronLeft className="leftArrow" onClick={prevSlide} />
//           </div>

//           <div className={styles.teamContainer}>
//             <div className={styles.teamGrid}>
//               {team.map((node, index) => {
//                 let i = index;
//                 if (index > team.length - 3) i = team.length - 3;
//                 return (
//                   <div key={index}>
//                     {index === current && (
//                       <Image
//                         className={styles.teamImage}
//                         width={150}
//                         height={150}
//                         alt={team[i].node.featuredImage.node.altText}
//                         src={team[i].node.featuredImage.node.sourceUrl}
//                       />
//                     )}
//                     {index === current && <h4>{team[i].node.title}</h4>}
//                     {index === current && (
//                       <h5
//                         dangerouslySetInnerHTML={{
//                           __html: team[i].node.content,
//                         }}
//                       />
//                     )}
//                     {index === current && (
//                       <h5>
//                         <button className={styles.teamButton}>
//                           Send email
//                         </button>
//                       </h5>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className={styles.teamGrid}>
//               {team.map((node, index) => {
//                 let i = index;
//                 if (index > team.length - 3) i = team.length - 3;
//                 return (
//                   <div key={index}>
//                     {index === current && (
//                       <Image
//                         className={styles.teamImage}
//                         width={150}
//                         height={150}
//                         alt={team[i + 1].node.featuredImage.node.altText}
//                         src={team[i + 1].node.featuredImage.node.sourceUrl}
//                       />
//                     )}
//                     {index === current && <h4>{team[i + 1].node.title}</h4>}
//                     {index === current && (
//                       <h5
//                         dangerouslySetInnerHTML={{
//                           __html: team[i + 1].node.content,
//                         }}
//                       />
//                     )}
//                     {index === current && (
//                       <h5>
//                         <button className={styles.teamButton}>
//                           Send email
//                         </button>
//                       </h5>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//             <div className={styles.teamGrid}>
//               {team.map((node, index) => {
//                 let i = index;
//                 if (index > team.length - 3) i = team.length - 3;
//                 return (
//                   <div key={index}>
//                     {index === current && (
//                       <Image
//                         className={styles.teamImage}
//                         width={150}
//                         height={150}
//                         alt={team[i + 2].node.featuredImage.node.altText}
//                         src={team[i + 2].node.featuredImage.node.sourceUrl}
//                       />
//                     )}
//                     {index === current && <h4>{team[i + 2].node.title}</h4>}
//                     {index === current && (
//                       <h5
//                         dangerouslySetInnerHTML={{
//                           __html: team[i + 2].node.content,
//                         }}
//                       />
//                     )}
//                     {index === current && (
//                       <h5>
//                         <button className={styles.teamButton}>
//                           Send email
//                         </button>
//                       </h5>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className={styles.arrowContainer}>
//             <FaChevronRight className="rightArrow" onClick={nextSlide} />
//           </div>
//         </div>
//         <div className={styles.arrowDownGrid}>
//           {menus.nodes.map((menu) => (
//             <h4 key={menu.menuItems.edges[2].node.id}>
//               {menu.menuItems.edges[2].node.label}
//             </h4>
//           ))}
//           {menus.nodes.map((menu) => (
//             <Link
//               key={menu.menuItems.edges[2].node.id}
//               href={menu.menuItems.edges[2].node.path}
//             >
//               <a className={styles.arrow}>
//                 <FaChevronDown />
//               </a>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
