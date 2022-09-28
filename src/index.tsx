import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { LogIn, SignUp } from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
    </Routes>
  </BrowserRouter>
);
