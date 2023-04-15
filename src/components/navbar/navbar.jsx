import { Flex, Box } from "@mantine/core";

//layout
import Overflow from "../Layout/overflow";

//components
import Logo from "../logo/logo";
import SearchBar from "../searchBar/searchBar";
import NavbarMenuList from "./navbarMenuList";
import NavbarUserActions from "./navbarUserActions";

const Navbar = () => {
  return (
    <Box sx={{ position: "fixed", width: "100%", zIndex: "1000" }}>
      <Overflow>
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
          gap={"2rem"}
          p={"2rem 0"}
        >
          <Logo />
          <NavbarMenuList />
          <SearchBar w="300px" />
          <NavbarUserActions />
        </Flex>
      </Overflow>
    </Box>
  );
};

export default Navbar;
