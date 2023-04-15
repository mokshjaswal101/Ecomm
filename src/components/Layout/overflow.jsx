import { Flex, Box } from "@mantine/core";

const Overflow = ({ bg = "white", children, maxw = "1300px" }) => {
  return (
    <Flex w={"100%"} bg={bg} display={"flex"} sx={{ justifyContent: "center" }}>
      <Box w={`min(${maxw}, 100%)`} p={"0 2rem "}>
        {children}
      </Box>
    </Flex>
  );
};

export default Overflow;
