import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "./Context";
import { SpeechProvider } from "@speechly/react-client";

import App from "./App";

ReactDOM.render(
  <SpeechProvider appId='0a67f781-1140-49c6-bf47-c63362d2bd93' language='en-US' >
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
