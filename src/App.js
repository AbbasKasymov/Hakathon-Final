import React, { useEffect } from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
    AOS.refresh();
  }, []);
  return (
    <div>
      <ClientContext>
        <AdminContext>
          <Navigation />
        </AdminContext>
      </ClientContext>
    </div>
  );
};

export default App;
