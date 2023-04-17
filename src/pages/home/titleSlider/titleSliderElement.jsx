import { Title } from "@mantine/core";
import { motion } from "framer-motion";

const TitleSliderElement = ({ slide }) => {
  return (
    <motion.div
      initial={{ x: "100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      // exit={{ x: "-100vw", opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Title sx={{ fontSize: "10rem" }}>{slide?.label.toUpperCase()}</Title>
    </motion.div>
  );
};

export default TitleSliderElement;
