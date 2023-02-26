import Navber from "../components/home/Navber";
import BigCalender from "../components/home/BigCalender";
import FooterButton from "../components/home/FooterButton";
import Warming from "../components/home/Warming";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Toast from "../components/home/Toast";
function Home() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence
        exitBeforeEnter
        key={location.pathname}
        location={location}
      >
        <Toast />
        <Navber />
        <BigCalender />
        <FooterButton />
        <Warming />
      </AnimatePresence>
    </>
  );
}

export default Home;
