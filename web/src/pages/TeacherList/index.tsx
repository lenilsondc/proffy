import React from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

const TeacherList: React.FC = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="These are the available proffys">
      <form id="search-teachers">
        <Input name="subject" label="Subject" />
        <Input name="weekday" label="Weekday" />
        <Input name="time" label="Time" type="time" />
      </form>
    </PageHeader>

    <main>
      <TeacherItem />
      <TeacherItem />
      <TeacherItem />
    </main>
  </div>
);

export default TeacherList;
