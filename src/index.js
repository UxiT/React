import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import StoreContext from './redux/StoreContext';

let renderPage = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App />
        </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

renderPage(store.getState());
store.subscribe(() => {
  renderPage(store.getState());
}); // Pattern Observer // publisher-subscriber

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
