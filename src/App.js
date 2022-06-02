import React from "react";
import MyContextApi from "./MainApp/contextApi/MyContextApi";
import Home from "./MainApp/screens/Home";
import "./MainApp/styles/HomeStyles.css";
import "./MainApp/styles/MyModalStyles.css";

function App() {
  return (
    <MyContextApi>
      <Home />
    </MyContextApi>
  );
}

export default App;
