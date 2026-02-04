// import { useState } from 'react'
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

import { Routes, Route } from "react-router-dom";
import { Iplteams } from "./components/Iplteams";
import { TeamDetails } from "./components/TeamDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Iplteams />} />
        <Route path="/team/:name" element={<TeamDetails />} />
      </Routes>
    </div>
  );
}

export default App;

