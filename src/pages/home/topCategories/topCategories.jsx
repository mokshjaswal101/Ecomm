import { Flex, Title, Box, SimpleGrid } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

//data
import categories from "../../../data/categories";

//layout
import Overflow from "../../../components/Layout/overflow";
import Section from "../../../components/Layout/section";

//components
import CategoryCard from "./categoryCard";

const TopCategories = () => {
  return (
    <Overflow>
      <Section>
        <Title variant="sectionHeading">Our Top Categories</Title>

        <SimpleGrid spacing={"2rem"} cols={4} w={"100%"}>
          {categories.map((category, index) => {
            return <CategoryCard category={category} key={index} />;
          })}
        </SimpleGrid>
      </Section>
    </Overflow>
  );
};
export default TopCategories;
