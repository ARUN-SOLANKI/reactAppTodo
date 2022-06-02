import { Button, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useContext } from "react";
import { MyContext } from "../contextApi/MyContextApi";

function SearchBar() {
  const { handleSearch } = useContext(MyContext);
  return (
    <div className="SearchBar-Container">
      <input
        type="text"
        placeholder="serach items"
        className="SearchInput"
        onChange={handleSearch}
      />
      <IconButton>
        <Search />
      </IconButton>
    </div>
  );
}

export default SearchBar;
