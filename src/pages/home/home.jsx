import { Flex } from "@mantine/core";

//components
import TitleSlider from "./titleSlider/titleSlider";
import TopCategories from "./topCategories/topCategories";
import TopDeals from "./topDeals/topDeals";

const HomePage = () => {
  return (
    <Flex direction={"column"} mih={"100vh"}>
      <TitleSlider />
      <TopCategories />
      <TopDeals />
    </Flex>
  );
};

export default HomePage;
