import React, { createContext, useState } from "react";
import downloadImg from "../assets/Images/download.jpg";

export const MyContext = createContext();
function MyContextApi({ children }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [imgInfo, setImgInfo] = useState("");
  const [addContent, setAddContent] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    setImgInfo(fileUploaded);
  };

  const addTask = () => {
    if (title && imgInfo) {
      const src = URL.createObjectURL(imgInfo);
      const newObj = {
        title: title,
        id: addContent.length,
        avtar: src,
        checked: false,
      };
      setAddContent([...addContent, newObj]);
    }
    setImgInfo("");
    setOpen(false);
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCheck = (id) => {
    const newArr = addContent.map((item) => {
      if (item.id == id) {
        item.checked = !item.checked;
        return item;
      } else {
        return item;
      }
    });
    setAddContent(newArr);
  };

  return (
    <MyContext.Provider
      value={{
        addContent: addContent,
        setAddContent: setAddContent,
        open: open,
        imgInfo: imgInfo,
        handleOpen: handleOpen,
        handleClose: handleClose,
        handleChange: handleChange,
        addTask: addTask,
        handleTitle: handleTitle,
        handleCheck: handleCheck,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

export default MyContextApi;
