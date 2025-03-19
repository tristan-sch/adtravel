import { FC, ReactNode, useState } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import {
  BannerTypes,
  FooterTypes,
  HeaderTypes,
  MenusTypes,
  SettingsTypes,
} from "types/queryTypes";

type PageProps = {
  children?: ReactNode;
  title?: string;
  displayBanner?: boolean;
  banner: BannerTypes;
  footer: FooterTypes;
  settings: SettingsTypes;
  menus: MenusTypes;
  header: HeaderTypes;
};

export const Layout: FC<PageProps> = ({
  children,
  title,
  banner,
  footer,
  settings,
  menus,
  header,
}) => {
  const [isBanner, setIsBanner] = useState(true);
  const isBannerActivated = banner.activate;

  const titleString = title
    ? `${title} | ${settings.title}`
    : `${settings.title}`;

  return (
    <>
      <Head>
        <title>{titleString}</title>
      </Head>
      {isBannerActivated && isBanner && (
        <Banner closeBanner={() => setIsBanner(false)} banner={banner} />
      )}
      <div className="font-oswald mx-auto max-w-7.5xl">
        <Header
          settings={settings}
          menus={menus}
          isBanner={isBanner}
          header={header}
        />
        <main>{children}</main>
        <Footer footer={footer} />
      </div>
    </>
  );
};
