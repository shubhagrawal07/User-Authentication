import { Box, Button, Tooltip, Text, Menu, MenuButton } from "@chakra-ui/react";
import React, { useState } from "react";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState();

  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="#F0F8FF"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i class="fa fa-search" aria-hidden="true"></i>
            <Text d={{ base: "none", md: "flex" }} px={"4"}>
              Search Users
            </Text>
          </Button>
        </Tooltip>
        <Text
          fontSize="2xl"
          fontFamily={"cursive"}
          float={"right"}
          color={"#72A0C1"}
        >
          VAARTALAAP
        </Text>
        <Menu>
          <MenuButton p={"10px"}></MenuButton>
        </Menu>
      </Box>
    </>
  );
};

export default SideDrawer;
