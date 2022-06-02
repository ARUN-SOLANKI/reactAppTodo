import { Avatar, Box, Typography, IconButton } from "@mui/material";
import { DeleteIcon, CheckCircle } from "@mui/icons-material";
import React, { useState, useContext } from "react";

import { MyContext } from "../contextApi/MyContextApi";

function List({ title, image, id, checked }) {
  const { handleCheck } = useContext(MyContext);
  return (
    <Box className="ListContainer">
      <Box className="InnerListContainer">
        <Avatar src={image} className="ListAvtar" />

        <Box className="ListContent">
          <Typography variant="h6" className="ListTitle">
            {title}
          </Typography>
          <IconButton
            aria-label="delete"
            color="warning"
            onClick={() => handleCheck(id)}
            className="checkBoxBtn"
            size="medium"
          >
            <CheckCircle color={checked ? "primary" : "secondary"} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default List;
