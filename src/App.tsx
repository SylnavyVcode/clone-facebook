import { RouterProvider } from "react-router-dom";
import routeur from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={routeur} />
    </>
  );
}

export default App;
