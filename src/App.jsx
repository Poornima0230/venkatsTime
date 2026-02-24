import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { AppLayout } from "./components/layout/AppLayout";
import { Error } from "./pages/ErrorPage";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Upcoming } from "./pages/Upcoming";
import { Released } from "./pages/Released";
import { Contact } from "./pages/Contact";
import { useEffect } from "react";
import { Brouchure } from "./pages/Brouchure";

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
            path: "events",
            element: <Events />,
          },
          {
            path: "upcoming",
            element: <Upcoming />,
          },
          {
            path: "released",
            element: <Released />,
          },
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "brochure",
            element: <Brouchure />,
          },
        ],
      },
    ],
    {
      basename: import.meta.env.MODE === "production" ? "/venkatsTime/" : "/",
    }
  );
  return <RouterProvider router={router} />;
}

export default App;
