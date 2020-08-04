import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Lading from "./pages/Landing";
import TeacherList from "./pages/TeacherList";
import TeacherForm from "./pages/TeacherForm";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Lading} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/teach" component={TeacherForm} />
    </BrowserRouter>
  );
}
