import React from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

const TeacherList: React.FC = () => (
  <div id="page-teacher-list" className="container">
    <PageHeader title="These are the available proffys">
      <form id="search-teachers">
        <div className="input-block">
          <label htmlFor="subject">Subject</label>
          <input type="text" id="subject" />
        </div>
        <div className="input-block">
          <label htmlFor="weekday">Weekday</label>
          <input type="text" id="weekday" />
        </div>
        <div className="input-block">
          <label htmlFor="time">Time</label>
          <input type="text" id="time" />
        </div>
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
