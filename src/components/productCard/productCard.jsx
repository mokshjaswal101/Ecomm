import { Button, Card, Flex, Image, Title, Box } from "@mantine/core";
import React from "react";

//dummy image
import watch from "../../assets/images/categories/watches.jpg";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <Card padding={"lg"} shadow="md" withBorder>
      <Card.Section>
        <Image src={watch} />
      </Card.Section>

      <Title m={"1rem 0"} sx={{ fontSize: "1.6rem", fontWeight: "500" }}>
        {product?.name?.length <= 70
          ? product.name
          : product.name.slice(0, 70) + " ..."}
      </Title>

      <Flex justify={"space-between"}>
        <Flex gap={"1rem"}>
          <Box fw="700">{product.price}</Box>
          <Box fw="200" sx={{ textDecoration: "line-through" }}>
            {product.oldPrice}
          </Box>
        </Flex>
        <Button>
          <FontAwesomeIcon icon={faBagShopping} />
        </Button>
      </Flex>
    </Card>
  );
};

export default ProductCard;
