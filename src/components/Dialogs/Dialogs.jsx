import React from "react";
import st from "../Messages/messages.module.css";
import Dialog from "./Dialog";

const Dialogs = (props) => {
  let dialogs = props.dialogs.map((d) => (
    <Dialog id={d.id} title={d.title} img={d.img} />
  ));

  return <div className={st.dialogs}>{dialogs}</div>;
};

export default Dialogs;
