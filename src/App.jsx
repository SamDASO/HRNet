import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
import Employees from "./pages/employees/Employees"

function App() {
  
  const tableData = useSelector((state) => state.userProfile.userData);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "employees",
      element: <Employees userData={tableData}/>
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;



