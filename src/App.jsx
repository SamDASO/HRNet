import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/home";
import Create from "./pages/Create/create";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },

    {
      path: "create",
      element: <Create/>
    }
  ]);

  return (
      <RouterProvider router={router} />
  );
}

export default App;



