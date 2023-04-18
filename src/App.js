import React from "react";
import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container">
        <TaskList title="Pendente" />
        <TaskList title="Fazendo" />
        <TaskList title="Completo" />
        
        </div>

      

    </div>
      
    
  );
}

export default App;
