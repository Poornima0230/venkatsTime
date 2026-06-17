import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollToTop } from "../ui/ScrollToTop";

export const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main
      // className="main-content"
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
