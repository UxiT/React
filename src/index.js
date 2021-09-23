import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/state";

let renderPage = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store._state}
        addPost={store.addPost}
        editPostText={store.editPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderPage(store._state);
store.subscribe(renderPage); // Pattern Observer // publisher-subscriber

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
