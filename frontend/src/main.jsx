import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScopedCssBaseline>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ScopedCssBaseline>
  </React.StrictMode>
);
