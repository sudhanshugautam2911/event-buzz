import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import CompListPage from "./Pages/CompListPage";
import CompDetailsPage from "./Pages/CompDetailsPage";
import EventListPage from "./Pages/EventListPage";
import NoticePage from "./Pages/NoticePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <EventListPage />,
  },
  {
    path: "/competition",
    element: <CompListPage />,
  },
  {
    path: "/competition/:id",
    element: <CompDetailsPage />,
  },
  {
    path: "/notices",
    element: <NoticePage />,
  },
]);


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
