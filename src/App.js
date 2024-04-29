import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/dashboard/Dashboard";


function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login/>,
      },
      {
        path: "/dashboard",
        element: <Dashboard title='Dashboard' dashboard navText='Dashboard'/>,
      },
      {
        path: "/upload",
        element: <Dashboard title="Upload" navText='Upload CSV' upload/>,
      },
      {
        path: "/invoice", 
        element: <Dashboard title="Invoice" navText='invoice' invoice/>,
      },
      {
        path: "/schedule",
        element: <Dashboard title="Schedule" navText='schedule' schedule/>,
      },
      {
        path: "/calendar",
        element: <Dashboard title="Calendar" navText='calendar' calendar/>,
      },
      {
        path: "/notification",
        element: <Dashboard title="Notification" navText='notification' notification/>,
      },
      {
        path: "/settings",
        element: <Dashboard title="Settings" navText='settings' settings/>,
      },
     
    ],
    {
      redirectTo: "/",
    }
  );
  return (
  <>
  <RouterProvider router={router}></RouterProvider>
 </>
  )
}

export default App;
