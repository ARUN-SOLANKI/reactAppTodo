import React, { useContext } from "react";
import { Button, Box } from "@mui/material";

import List from "../component/List";
import { MyContext } from "../contextApi/MyContextApi";
import MyModal from "../component/MyModal";
import SearchBar from "../component/SearchBar";

function Home() {
  const { addContent, handleOpen, searchText, searchContent } =
    useContext(MyContext);
  return (
    <Box className="HomeContainer">
      <SearchBar />
      {searchText ? (
        <Box>
          {searchContent.map((item) => {
            return (
              <List
                key={item.id}
                title={item.title}
                image={item.avtar}
                id={item.id}
                checked={item.checked}
              />
            );
          })}
        </Box>
      ) : (
        <Box>
          {addContent.map((item) => {
            return (
              <List
                key={item.id}
                title={item.title}
                image={item.avtar}
                id={item.id}
                checked={item.checked}
              />
            );
          })}
        </Box>
      )}
      <button onClick={handleOpen} className="AddBtn">
        Add Item
      </button>
      <MyModal />
    </Box>
  );
}

export default Home;
