import React, { useState, FormEvent } from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

const TeacherList: React.FC = () => {
  const [subject, setSubject] = useState("");
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeacher] = useState<Teacher[]>([]);

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    const { data } = await api.get("classes", {
      params: { subject, weekday, time },
    });

    setTeacher(data);
  }
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available proffys">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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
            value={weekday}
            onChange={(e) => setWeekday(e.target.value)}
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
          <Input
            name="time"
            label="Time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher, idx) => (
          <TeacherItem teacher={teacher} key={idx} />
        ))}
      </main>
    </div>
  );
};

export default TeacherList;
