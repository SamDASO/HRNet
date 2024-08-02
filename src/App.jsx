import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/home";
import Employees from "./pages/Employees/employees"

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "employees",
      element: <Employees/>
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;



