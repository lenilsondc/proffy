import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";
import warningIcon from "../../assets/images/icons/warning.svg";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

interface ScheduleItem {
  weekday?: number;
  from?: string;
  to?: string;
}

const TeacherForm: React.FC = () => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [hourlyRate, setHourlyRate] = useState("");

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([{}]);

  const history = useHistory();

  function addScheduleItem() {
    setScheduleItems([...scheduleItems, {}]);
  }

  function setScheduleItemValue(idx: number, field: string, value: string) {
    const newScheduleItems = scheduleItems.map((item, itemIdx) => {
      if (itemIdx === idx) {
        return { ...item, [field]: value };
      }

      return scheduleItems[itemIdx];
    });

    setScheduleItems(newScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();
    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        hourly_rate: Number(hourlyRate),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Sign up sucess");
        history.push("/");
      })
      .catch(() => {
        alert("Sign up sucess");
      });
  }

  return (
    <div id="page-teacher-form">
      <PageHeader
        title="How amazing that you want to teach."
        subtitle="The first step is to fill out this registration form"
      />

      <main>
        <form onSubmit={handleCreateClass}>
          <fieldset>
            <legend>Personal info</legend>

            <Input
              name="name"
              label="Fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              name="whatsapp"
              label="Whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              name="hourly_rate"
              label="Hourly rate"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              <span>Availability</span>
              <button type="button" onClick={addScheduleItem}>
                + Add Available Time
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, idx) => (
              <div key={scheduleItem.weekday} className="schedule-item">
                <Select
                  name="weekday"
                  label="Weekday"
                  value={scheduleItem.weekday}
                  onChange={(e) =>
                    setScheduleItemValue(idx, "weekday", e.target.value)
                  }
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
                  name="from"
                  label="From"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) =>
                    setScheduleItemValue(idx, "from", e.target.value)
                  }
                />
                <Input
                  name="to"
                  label="To"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) =>
                    setScheduleItemValue(idx, "to", e.target.value)
                  }
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Warning" />
              Warning! <br />
              Fill out all the required data.
            </p>

            <button type="submit">Sign Up</button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
