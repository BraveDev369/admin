import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import List from "./List";
import Add from "./Add";
import Edite from "./Edite";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edite/:id" element={<Edite />} />
    </Routes>
  );
}
