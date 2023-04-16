import { useState, useEffect } from "react";
import { Button, Flex } from "@mantine/core";

//layout
import Overflow from "../../../components/Layout/overflow";

//components
import TitleSliderElement from "./titleSliderElement";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

//data
import TitleSliderData from "./titleSliderData";

const TitleSlideButton = ({ children, ...rest }) => {
  return (
    <Button
      bg={"transparent"}
      radius={"50%"}
      h={"auto"}
      p={"6rem"}
      sx={{ border: "1px solid rgba(255,255,255,0.4)", "&:hover": {} }}
      color="white"
      styles={{ root: { "&:hover": { background: "transparent" } } }}
      {...rest}
    >
      {children}
    </Button>
  );
};

const TitleSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Overflow bg={TitleSliderData[slideIndex]?.background}>
      <Flex
        h={"100vh"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          overflow: "hidden",
        }}
      >
        <Flex
          w={"110%"}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {/* Previous Button */}
          <TitleSlideButton
            onClick={() => {
              setSlideIndex(
                (slideIndex - 1 + TitleSliderData.length) %
                  TitleSliderData.length
              );
            }}
          >
            <FontAwesomeIcon icon={faLeftLong} />
          </TitleSlideButton>

          <TitleSliderElement slide={TitleSliderData[slideIndex]} />

          {/* Next Button */}
          <TitleSlideButton
            onClick={() => {
              setSlideIndex((slideIndex + 1) % TitleSliderData.length);
            }}
          >
            <FontAwesomeIcon icon={faRightLong} />
          </TitleSlideButton>
        </Flex>
      </Flex>
    </Overflow>
  );
};

export default TitleSlider;
