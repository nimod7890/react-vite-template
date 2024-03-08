import { RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "src/routes/routePath";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    element: <>index page</>,
  },
  { path: "*", element: <>not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
