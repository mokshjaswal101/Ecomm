import { Flex } from "@mantine/core";
import { NavLink } from "react-router-dom";

//data
import MenuItemsData from "./menuItemsData";

const NavbarMenuList = ({ color }) => {
  return (
    <Flex
      sx={{
        fontWeight: "500",
        gap: "2rem",
      }}
    >
      {MenuItemsData.map((el, index) => {
        return (
          <NavLink
            key={index}
            style={{
              textDecoration: "none",
              padding: "0 .5rem",
              hover: { display: "none" },
              fontWeight: 500,
              color,
            }}
          >
            {el.label.toUpperCase()}
          </NavLink>
        );
      })}
    </Flex>
  );
};

export default NavbarMenuList;
