import { Box, Flex } from "@mantine/core";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const NavbarUserActions = () => {
  return (
    <Flex gap={"2rem"} sx={{ fontWeight: "500" }}>
      <Flex gap={"1rem"} sx={{ alignItems: "center" }}>
        <FontAwesomeIcon icon={faUser} />
        Account
      </Flex>
      <Flex gap={"1rem"} sx={{ alignItems: "center" }}>
        <FontAwesomeIcon icon={faCartShopping} />
        Cart
      </Flex>
    </Flex>
  );
};

export default NavbarUserActions;
