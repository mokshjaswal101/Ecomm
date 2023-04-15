import { Flex, Image, Title } from "@mantine/core";

const CategoryCard = ({ category }) => {
  return (
    <Flex
      radius="md"
      sx={{
        cursor: "pointer",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <Image
        // height={"400px"}
        src={category?.image}
        sx={{
          objectFit: "cover",
          transform: "scale(1.1)",
          filter: "brightness(40%)",
          transition: "all 0.3s ease-in-out",
        }}
      />

      <Title
        sx={{
          color: "white",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
        variant={"headingCard"}
      >
        {category?.label.toUpperCase()}
      </Title>
    </Flex>
  );
};

export default CategoryCard;
