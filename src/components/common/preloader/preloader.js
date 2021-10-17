import load from "../../../assets/img/load.svg";
import st from "../common.module.css";
import react from "react";

const Preloader = (props) => {
  return (
    <div className={st.loader}>
      <img className={st.loader__img} src={load} />
    </div>
  );
};

export default Preloader;
