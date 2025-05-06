import { Route, Routes } from "react-router-dom";
import List from "./List";
import Add from "./Add";
import Details from "./Details";
import Edite from "./Edite";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/add" element={<Add />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/edite/:id" element={<Edite />} />
    </Routes>
  );
}
