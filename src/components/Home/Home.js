import React, { useState } from "react";
import { useSelector } from "react-redux";
import AddContact from "../AddContact/AddContact";
import AllContacts from "../AllContacts/AllContacts";
import FilterContacts from "../FilterContacts/FilterContacts";
import Alert from "../Alert/Alert";
import { CSSTransition } from "react-transition-group";

const Home = () => {
  const [showAlert, setShowAlert] = useState({ status: false, text: "" });

  const contacts = useSelector((state) => state.items);

  return (
    <div>
      <AddContact setShowAlert={setShowAlert} />
      {contacts.length >= 2 && <FilterContacts />}

      {contacts.length > 0 && <AllContacts />}

      <CSSTransition
        in={showAlert.status}
        timeout={250}
        classNames="alert"
        mountOnEnter
        unmountOnExit
      >
        <Alert showAlert={showAlert.text} />
      </CSSTransition>
    </div>
  );
};

export default Home;
