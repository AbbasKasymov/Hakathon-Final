import React from "react";
import AdminContext from "./contexts/AdminContext";
import ClientContext from "./contexts/ClientContext";
import Navigation from "./Navigation";

const App = () => {
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
