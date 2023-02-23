import { motion } from "framer-motion";
import Heart from "../../img/Quiz/heart.png";

const InitialTransition = () => {
  <motion.div
    animate={{
      y: [-10, 10],
      rotate: [0, 20, -20, 0],
      scale: [1, 1.2, 1, 1.2, 1],
    }}
    transition={{ duration: 1, ease: "easeInOut", loop: Infinity }}
    style={{ display: "inline-block", marginRight: "8px" }}
  >
    <img src={Heart} alt="" />
  </motion.div>;
};

export default InitialTransition;
