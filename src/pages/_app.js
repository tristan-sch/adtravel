import "../styles/globals.scss";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faHiking,
  faBus,
  faStar,
  faCar,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
library.add(fab, faHiking, faBus, faStar, faCar, faLocationDot);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
