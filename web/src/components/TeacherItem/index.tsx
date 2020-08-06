import React from "react";

import "./styles.css";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import api from "../../services/api";

export interface Teacher {
  id: number;
  subject: string;
  hourly_rate: number;
  user_id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}
const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function handleCreateNewConnection() {
    api.post("connections", { user_id: teacher.id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Hourly rate.<strong>{teacher.hourly_rate} </strong>
        </p>
        <a
          onClick={handleCreateNewConnection}
          target="_blank"
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsAppIcon} alt="Whatsapp" />
          Contact
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
