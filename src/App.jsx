//  import { useState } from 'react'
// import { HeaderComponents } from './components/HeaderComponents';
// import { FooterComponents } from './components/FooterComponents';
// import ContantComponents from './components/ContantComponents';
// import { MapDemo2 } from './components/MapDemo2';
// import { MapDemo1 } from './components/MapDemo1';
// import { MapDemo3 } from './components/MapDemo3';
// import { MapDemo4 } from './components/MapDemo4';
// import { MapDemo5 } from './components/MapDemo5';
// import { MapDemo6 } from './components/MapDemo6';
// import { MapDemo7 } from './components/MapDemo7';
// import { MapDemo8 } from './components/MapDemo8';
// import { MapDemo9 } from './components/MapDemo9';
// import { MapDemo10 } from './components/MapDemo10';
// import { Routes, Route } from "react-router-dom";
// import { Iplteams } from "./components/Iplteams";
// import { TeamDetails } from "./components/TeamDetails";



import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { FunctionDemo1 } from "./components/FunctionDemo1";
import { Employees } from "./components/Employees";
import { InputDemo1 } from "./components/InputDemo1";
import { Students } from "./components/Students";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/usestatedemo1" element={<UseStateDemo1 />} />
        <Route path="/usestatedemo2" element={<UseStateDemo2 />} />
        <Route path="/usestatedemo3" element={<UseStateDemo3 />} />
        <Route path="/fundemo1" element={<FunctionDemo1 />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/inputdemo1" element={<InputDemo1 />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </div>
  );
}

export default App;
