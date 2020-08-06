import React from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

const TeacherList: React.FC = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="These are the available proffys">
      <form id="search-teachers">
        <Select
          name="subject"
          label="Subject"
          options={[
            { value: "Arts", label: "Arts" },
            { value: "Biology", label: "Biology" },
            { value: "Sciences", label: "Sciences" },
            { value: "Physical Education", label: "Physical Education" },
            { value: "Physics", label: "Physics" },
            { value: "Geography", label: "Geography" },
            { value: "History", label: "History" },
            { value: "English", label: "English" },
            { value: "Chemistry", label: "Chemistry" },
          ]}
        />

        <Select
          name="weekday"
          label="Weekday"
          options={[
            { value: "0", label: "Sunday" },
            { value: "1", label: "Monday" },
            { value: "2", label: "Tuesday" },
            { value: "3", label: "Wednesday" },
            { value: "4", label: "Thursday" },
            { value: "5", label: "Friday" },
            { value: "6", label: "Saturday" },
          ]}
        />
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
