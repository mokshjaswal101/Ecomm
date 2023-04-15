import { Button, Flex, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

//layout
import Overflow from "../../../components/Layout/overflow";

//components
import TitleSliderElement from "./titleSliderElement";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const TitleSlider = () => {
  return (
    <Overflow bg="linear-gradient(to right top, #120814, #A759E9)">
      <Flex
        h={"100vh"}
        sx={{
          flex: "1",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {/* Left Button */}
        <Carousel w="100%" loop slideSize={"100%"} slideGap={"md"}>
          <Carousel.Slide>
            <Title
              sx={{
                textAlign: "center",
                fontSize: "10rem",
                letterSpacing: "1rem",
              }}
            >
              GROCERIES
            </Title>
          </Carousel.Slide>
          <Carousel.Slide>
            <Title
              sx={{
                textAlign: "center",
                fontSize: "10rem",
                letterSpacing: "1rem",
              }}
            >
              GROCERIES
            </Title>
          </Carousel.Slide>
        </Carousel>
      </Flex>
    </Overflow>
  );
};

export default TitleSlider;
