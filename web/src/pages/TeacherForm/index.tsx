import React from "react";

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";

const TeacherForm: React.FC = () => (
  <div id="page-teacher-form">
    <PageHeader
      title="How amazing that you want to teach."
      subtitle="The first step is to fill out this registration form"
    />

    <main>
      <fieldset>
        <legend>Personal info</legend>

        <Input name="name" label="Fullname" />
        <Input name="avatar" label="Avatar" />
        <Input name="whatsapp" label="Whatsapp" />
        <Textarea name="bio" label="Bio" />
      </fieldset>

      <fieldset>
        <legend>Classes</legend>

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
        <Input name="hourly_rate" label="Hourly rate" />
      </fieldset>

      <fieldset>
        <legend>
          <span>Availability</span>
          <button type="button">+ Add Available Time</button>
        </legend>
        <div className="schedule-item">
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
          <Input name="from" label="From" type="time" />
          <Input name="to" label="To" type="time" />
        </div>
      </fieldset>

      <footer>
        <p>
          <img src={warningIcon} alt="Warning" />
          Warning! <br />
          Fill out all the required data.
        </p>

        <button type="button">Sign Up</button>
      </footer>
    </main>
  </div>
);

export default TeacherForm;
