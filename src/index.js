import { createEmotionCache, MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from "./app/store";
import "./index.css";

const myCache = createEmotionCache({
  key: "mantine",
  prepend: false,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <MantineProvider
          emotionCache={myCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <NotificationsProvider>
            <App />
          </NotificationsProvider>
        </MantineProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
