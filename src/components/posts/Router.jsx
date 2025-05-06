import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import List from "./List";
import Add from "./Add";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/add" element={<Add />} />
    </Routes>
  );
}
