//  import { useState } from 'react'
import { Routes, Route } from "react-router-dom";

import { HeaderComponents } from './components/HeaderComponents';
import { FooterComponents } from './components/FooterComponents';
import ContantComponents from './components/ContantComponents';

import { NetflixHome } from "./components/NetflixHome";
import { NetflixMovies } from "./components/NetflixMovies";
import { NetflixShows } from "./components/NetflixShows";
import { Register } from "./components/Register";
import { Search } from "./components/Search";
import { Watch } from "./components/Watch";
import { WatchLater } from "./components/WatchLater";
import { History } from "./components/History";
import { PageNotFound } from "./components/PageNotFound";

import { MapDemo1 } from './components/MapDemo1';
import { MapDemo2 } from './components/MapDemo2';
import { MapDemo3 } from './components/MapDemo3';
import { MapDemo4 } from './components/MapDemo4';
import { MapDemo5 } from './components/MapDemo5';
import { MapDemo6 } from './components/MapDemo6';
import { MapDemo7 } from './components/MapDemo7';
import { MapDemo8 } from './components/MapDemo8';
import { MapDemo9 } from './components/MapDemo9';
import { MapDemo10 } from './components/MapDemo10';
import { Iplteams } from "./components/Iplteams";
import { TeamDetails } from "./components/TeamDetails";

import { Navbar } from "./components/Navbar";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { FunctionDemo1 } from "./components/FunctionDemo1";

import { Employees } from "./components/Employees";
import { Students } from "./components/Students";

import { InputDemo1 } from "./components/input/InputDemo1";
import { InputDemo2 } from "./components/input/InputDemo2";

import { FormDemo1 } from "./components/forms/FormDemo1";
import { FormDemo2 } from "./components/forms/FormDemo2";
import { FormDemo3 } from "./components/forms/FormDemo3";
import { FormDemo4 } from "./components/forms/FormDemo4";
import { FormDemo5 } from "./components/forms/FormDemo5";
import { FormDemo6 } from "./components/forms/FormDemo6";
import { DependentDropdown } from "./components/forms/DependentDropdown";

import { ApiDemo1 } from "./components/api/ApiDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { ApiDemo3 } from "./components/api/ApiDemo3";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<><HeaderComponents /><ContantComponents /><FooterComponents /></>}/>
        <Route path="/NetflixHome" element={<NetflixHome />} />
        <Route path="/NetflixMovies" element={<NetflixMovies />} />
        <Route path="/NetflixShows" element={<NetflixShows />} />
        <Route path="/history" element={<History />} />
        <Route path="/search" element={<Search />} />
        <Route path="/watch/:name" element={<Watch />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/register" element={<Register />} />

        <Route path="/mapdemo1" element={<MapDemo1 />} />
        <Route path="/mapdemo2" element={<MapDemo2 />} />
        <Route path="/mapdemo3" element={<MapDemo3 />} />
        <Route path="/mapdemo4" element={<MapDemo4 />} />
        <Route path="/mapdemo5" element={<MapDemo5 />} />
        <Route path="/mapdemo6" element={<MapDemo6 />} />
        <Route path="/mapdemo7" element={<MapDemo7 />} />
        <Route path="/mapdemo8" element={<MapDemo8 />} />
        <Route path="/mapdemo9" element={<MapDemo9 />} />
        <Route path="/mapdemo10" element={<MapDemo10 />} />

        <Route path="/usestatedemo1" element={<UseStateDemo1 />} />
        <Route path="/usestatedemo2" element={<UseStateDemo2 />} />
        <Route path="/usestatedemo3" element={<UseStateDemo3 />} />
        <Route path="/fundemo1" element={<FunctionDemo1 />} />
        
        <Route path="/iplteams" element={<Iplteams />} />
        <Route path="/team/:name" element={<TeamDetails />} />

        <Route path="/employees" element={<Employees />} />
        <Route path="/students" element={<Students />} />

        <Route path="/inputdemo1" element={<InputDemo1 />} />
        <Route path="/inputdemo2" element={<InputDemo2 />} />
        
        <Route path="/formdemo1" element={<FormDemo1 />} />
        <Route path="/formdemo2" element={<FormDemo2 />} />
        <Route path="/formdemo3" element={<FormDemo3 />} />
        <Route path="/formdemo4" element={<FormDemo4 />} />
        <Route path="/formdemo5" element={<FormDemo5 />} />
        <Route path="/formdemo6" element={<FormDemo6 />} />
        <Route path="/dependentdropdown" element={<DependentDropdown />}/>

        <Route path="/apidemo1" element={<ApiDemo1 />} />
        <Route path="/apidemo2" element={<ApiDemo2 />} />
        <Route path="/apidemo3" element={<ApiDemo3 />} />
        
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
