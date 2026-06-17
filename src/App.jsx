import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppLayout } from "./components/layout/AppLayout";
import { Error } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { UpcomingEvents } from "./pages/UpcomingEvents";
import { ReleasedEvents } from "./pages/ReleasedEvents";
import { Contact } from "./pages/Contact";
import { useEffect } from "react";
import { Brouchure } from "./pages/Brouchure";
import { UpPublications } from "./pages/UpPublications";
import { OldPublications } from "./pages/OldPublications";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "upcomingEvents",
            element: <UpcomingEvents />,
          },
          {
            path: "releasedEvents",
            element: <ReleasedEvents />,
          },

          {
            path: "upcomingPublications",
            element: <UpPublications />,
          },
          {
            path: "releasedPublications",
            element: <OldPublications />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.BASE_URL,
    },
  );
  return <RouterProvider router={router} />;
}

export default App;
