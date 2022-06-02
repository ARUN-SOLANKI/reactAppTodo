import React, { useContext, useState, useRef } from "react";
import { MyContext } from "../contextApi/MyContextApi";

import { PhotoAlbum, Check } from "@mui/icons-material";

import { Button, Modal, Typography, Box } from "@mui/material";

function MyModal() {
  const { open, handleClose, handleChange, imgInfo, handleTitle, addTask } =
    useContext(MyContext);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <Box>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box className="modalContainer">
          <input
            type="text"
            placeholder="write Something here"
            className="ModalInput"
            onChange={handleTitle}
          />
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleChange}
            style={{ display: "none" }}
          />

          <div style={{ display: "flex", marginTop: 10 }}>
            <Button
              onClick={handleClick}
              style={{
                display: "flex",
                border: "1px solid #ccc",
                background: "#fff",
                justifyContent: "space-between",
                alignItems: "center",
                width: imgInfo.name ? "60%" : "100%",
                padding: "2px 5px",
                color: "blue",
              }}
            >
              <p>Upload a ScreenShot</p> <PhotoAlbum size={20} />
            </Button>
            {imgInfo.name && (
              <Button
                onClick={handleClick}
                style={{
                  display: "flex",
                  border: "1px solid #ccc",
                  background: "#fff",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "40%",
                  padding: "2px 5px",
                  color: "green",
                }}
              >
                <p style={{ overflow: "hidden" }}>{imgInfo.name}</p>{" "}
                <Check size={15} />
              </Button>
            )}
          </div>

          <button className="AddBtn" onClick={addTask}>
            Add Task
          </button>
        </Box>
      </Modal>
    </Box>
  );
}

export default MyModal;
