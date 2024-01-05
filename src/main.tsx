import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import AppContextProvider from "./store";
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource/poppins/100-italic.css';
import '@fontsource/poppins/200-italic.css';
import '@fontsource/poppins/300-italic.css';
import '@fontsource/poppins/400-italic.css';
import '@fontsource/poppins/500-italic.css';
import '@fontsource/poppins/600-italic.css';
import '@fontsource/poppins/700-italic.css';
import '@fontsource/poppins/800-italic.css';
import '@fontsource/poppins/900-italic.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppContextProvider>
      <App/>
    </AppContextProvider>
  </BrowserRouter>
);
