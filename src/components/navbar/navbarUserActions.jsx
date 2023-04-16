import { Box, Flex } from "@mantine/core";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const NavbarUserActions = ({ color }) => {
  return (
    <Flex gap={"2rem"} sx={{ fontWeight: "500", color: color }}>
      <Flex gap={"1rem"} sx={{ alignItems: "center" }}>
        <FontAwesomeIcon icon={faUser} />
        ACCOUNT
      </Flex>
      <Flex gap={"1rem"} sx={{ alignItems: "center" }}>
        <FontAwesomeIcon icon={faCartShopping} />
        CART
      </Flex>
    </Flex>
  );
};

export default NavbarUserActions;
