import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Topbar from "./scenes/global/Topbar.jsx";
import Team from "./scenes/team/";
import Invoice from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import Calendar from "./scenes/calendar";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "invoices",
        element: <Invoice />,
      },
      {
        path: "form",
        element: <Form />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "bar",
        element: <Bar />,
      },
      {
        path: "pie",
        element: <Pie />,
      },
      {
        path: "line",
        element: <Line />,
      },
      {
        path: "geography",
        element: <Geography />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
