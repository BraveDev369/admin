import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/user/Dashboard";
import RouterPeople from "./components/people/Router";
import RouterPosts from "./components/posts/Router";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/people/*" element={<RouterPeople />} />
      <Route path="/posts/*" element={<RouterPosts />} />
    </Routes>
  );
}
