import { Autocomplete, Flex, Select } from "@mantine/core";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = (props) => {
  return (
    <Flex>
      <Autocomplete
        placeholder="Search"
        searchable="true"
        rightSection={<FontAwesomeIcon icon={faSearch} />}
        data={[]}
        radius={"lg"}
        styles={{
          input: {
            padding: "1.75rem 2.5rem 1.75rem 1rem",
            fontSize: "1.6rem",
            background: props.color,
          },
          rightSection: { paddingRight: "1rem" },
        }}
        {...props}
      />
    </Flex>
  );
};

export default SearchBar;
