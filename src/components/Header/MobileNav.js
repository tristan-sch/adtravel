import { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { css } from "styled-components/macro"; //eslint-disable-line

const MobileNavWrapper = styled.div`
  ${tw`sm:hidden`}
  .button {
    ${tw`ml-1 mr-1 h-8 w-8 rounded py-1`}
  }
`;
const CloseButtonWrapper = styled.div`
  ${tw`flex justify-end`}
  .button {
    ${tw`mr-16 mt-10 h-8 w-8 rounded py-6`}
  }
`;

const MobileLinksWrapper = styled.div`
  ${tw`fixed mt-20 h-full`}
  .navLinks {
    ${tw`px-20 py-4 font-nunito`}
    .link {
      ${tw`text-2xl font-bold tracking-widest text-gray-100 `}
    }
  }
`;

const MobileNav = ({ menus, header }) => {
  const [navShow, setNavShow] = useState(false);

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = "auto";
      } else {
        // Prevent scrolling
        document.body.style.overflow = "hidden";
      }
      return !status;
    });
  };

  return (
    <MobileNavWrapper>
      <button
        type="button"
        aria-label="Toggle Menu"
        className="button"
        onClick={onToggleNav}
      >
        <Image
          src={header.header.hamburgerIcon.sourceUrl}
          alt={header.header.hamburgerIcon.altText}
          width={50}
          height={50}
        />
      </button>
      <div
        css={[
          tw`fixed top-0 left-0 z-10 h-full w-full transform bg-primary-dark duration-300 ease-in-out h-160`,
          navShow ? tw`translate-x-0` : tw`translate-x-full`,
        ]}
      >
        <CloseButtonWrapper>
          <button
            type="button"
            aria-label="Toggle Menu"
            className="button"
            onClick={onToggleNav}
          >
            <Image
              src={header.header.closeIcon.sourceUrl}
              alt={header.header.closeIcon.altText}
              width={50}
              height={50}
            />
          </button>
        </CloseButtonWrapper>
        <MobileLinksWrapper>
          {menus.nodes.map((menu, i) => (
            <div key={i}>
              {menu.menuItems.edges.map(({ node }) => (
                <div key={node.id} className="navLinks">
                  <Link href={node.path} passHref>
                    <div className="link" onClick={onToggleNav}>
                      {node.label}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </MobileLinksWrapper>
      </div>
    </MobileNavWrapper>
  );
};

export default MobileNav;
