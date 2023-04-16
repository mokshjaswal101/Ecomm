import { Title } from "@mantine/core";

const TitleSliderElement = ({ slide }) => {
  return <Title sx={{ fontSize: "10rem" }}>{slide?.label.toUpperCase()}</Title>;
};

export default TitleSliderElement;
