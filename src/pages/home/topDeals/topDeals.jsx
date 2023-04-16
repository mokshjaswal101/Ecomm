import { SimpleGrid, Title } from "@mantine/core";

//layout
import Overflow from "../../../components/Layout/overflow";
import Section from "../../../components/Layout/section";

//components
import ProductCard from "../../../components/productCard/productCard";

//data
import Data from "../../../data/data.js";

const TopDeals = () => {
  return (
    <Overflow>
      <Section>
        <Title variant="sectionHeading">Top Deals For You</Title>
        <SimpleGrid cols={4} spacing={"2rem"} p={"0 0 5rem 0"}>
          {Data.map((product, index) => {
            return <ProductCard product={product} key={index} />;
          })}
        </SimpleGrid>
      </Section>
    </Overflow>
  );
};

export default TopDeals;
