import { useState } from "react";
import tw from "twin.macro";
import Link from "next/link";
import Image from "next/image";

const MobileNavWrapper = tw.div`sm:hidden`;
const OpenButton = tw.button`ml-1 mr-1 h-8 w-8 rounded py-1`;
const CloseButtonWrapper = tw.div`flex justify-end`;
const CloseButton = tw.button`mr-16 mt-10 h-8 w-8 rounded py-6`;
const MobileLinksWrapper = tw.div`fixed mt-20 h-full`;
const NavLinks = tw.div`px-20 py-4 font-nunito`;
const NavlinkItem = tw.div`text-2xl font-bold tracking-widest text-gray-100`;

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
      <OpenButton
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
      </OpenButton>
      <div
        css={[
          tw`fixed top-0 left-0 z-10 h-full w-full transform bg-primary-dark duration-300 ease-in-out h-160`,
          navShow ? tw`translate-x-0` : tw`translate-x-full`,
        ]}
      >
        <CloseButtonWrapper>
          <CloseButton
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
          </CloseButton>
        </CloseButtonWrapper>
        <MobileLinksWrapper>
          {menus.nodes.map((menu, i) => (
            <div key={i}>
              {menu.menuItems.edges.map(({ node }) => (
                <NavLinks key={node.id}>
                  <Link href={node.path} passHref>
                    <NavlinkItem onClick={onToggleNav}>
                      {node.label}
                    </NavlinkItem>
                  </Link>
                </NavLinks>
              ))}
            </div>
          ))}
        </MobileLinksWrapper>
      </div>
    </MobileNavWrapper>
  );
};

export default MobileNav;
