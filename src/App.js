import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/Login";
import Users from "./component/Users";
import Chat from "./component/Chat";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/chat/:username" component={Chat} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
