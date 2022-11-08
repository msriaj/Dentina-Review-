import { RouterProvider } from "react-router-dom";
import { routes } from "./Components/Routes/Routes";

function App() {
  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
