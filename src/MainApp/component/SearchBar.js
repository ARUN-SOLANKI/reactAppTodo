import { Button, IconButton, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import React from "react";

function SearchBar() {
  return (
    <div className="SearchBar-Container">
      <input type="text" placeholder="serach items" className="SearchInput" />
      <IconButton>
        <Search />
      </IconButton>
    </div>
  );
}

export default SearchBar;
