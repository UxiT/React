import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store, {editPostTextActionCreator} from "./redux/state";

let renderPage = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch = {store.dispatch.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderPage(store.getState());
store.subscribe(renderPage); // Pattern Observer // publisher-subscriber

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
