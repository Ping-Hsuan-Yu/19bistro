import Navber from "../components/home/Navber";
import BigCalender from "../components/home/BigCalender";
import FooterButton from "../components/home/FooterButton";
import Warming from "../components/home/Warming";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function Home() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        key={location.pathname}
        location={location}
      >
        <Navber />
        <BigCalender />
        <FooterButton />
        <Warming />
      </AnimatePresence>
    </>
  );
}

export default Home;
