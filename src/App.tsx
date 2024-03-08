import { RouterProvider } from "react-router-dom";
import AppRegister from "src/libraries/AppRegister";
import Router from "src/routes/router";

export default function App() {
  return (
    <AppRegister>
      <RouterProvider router={Router} fallbackElement={null} />
    </AppRegister>
  );
}
