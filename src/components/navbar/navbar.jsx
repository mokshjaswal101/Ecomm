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
    <Box sx={{ position: "absolute", width: "100%", zIndex: "1000" }}>
      <Overflow bg="transparent">
        <Flex
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
          gap={"2rem"}
          p={"2rem 0"}
        >
          <Logo />
          <NavbarMenuList color={"rgba(255,255,255,0.7)"} />
          <SearchBar w="300px" color={"rgba(255,255,255,0.7)"} />
          <NavbarUserActions color={"rgba(255,255,255,0.7)"} />
        </Flex>
      </Overflow>
    </Box>
  );
};

export default Navbar;
