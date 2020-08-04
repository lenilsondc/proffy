import React from "react";

import "./styles.css";
import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem: React.FC = () => (
  <article className="teacher-item">
    <header>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/8/82/Professor_Girafales.jpg"
        alt="girafales"
      />
      <div>
        <strong>Girafales</strong>
        <span>Life</span>
      </div>
    </header>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi totam
      tempore consequuntur est quisquam enim natus doloremque ad, ex esse
      suscipit earum perspiciatis hic blanditiis sit? <br />
      <br />
      Quaerat expedita tempora asperiores.
    </p>

    <footer>
      <p>
        Hourly rate.<strong>$30 </strong>
      </p>
      <button>
        <img src={whatsAppIcon} alt="Whatsapp" />
        Contact
      </button>
    </footer>
  </article>
);

export default TeacherItem;
