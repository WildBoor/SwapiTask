import { Routes, Route } from "react-router-dom";
import React from 'react';

import CommonPageLayout from "./components/common/CommonPageLayout";
import FilmsPage from './components/pages/films/FilmsPage';
import PeoplePage from './components/pages/people/PeoplePage';
import PlanetsPage from './components/pages/planets/PlanetsPage';
import PlanetInfoPage from './components/pages/planets/PlanetInfoPage';
import SpeciesPage from './components/pages/species/SpeciesPage';
import StarshipsPage from './components/pages/starships/StarshipsPage';
import VehiclesPage from './components/pages/vehicles/VehiclesPage';

function App() {

  const Home = <CommonPageLayout page={<></>} />
  const Planets = <CommonPageLayout page={<PlanetsPage />} />
  const PlanetInfo = <CommonPageLayout page={<PlanetInfoPage />} />
  const Films = <CommonPageLayout page={<FilmsPage />} />
  const People = <CommonPageLayout page={<PeoplePage />} />
  const Species = <CommonPageLayout page={<SpeciesPage />} />
  const Starships = <CommonPageLayout page={<StarshipsPage />} />
  const Vehicles = <CommonPageLayout page={<VehiclesPage />} />

  return (
    <Routes>
        <Route path='/' element={Home} />
        <Route path='/planets' element={Planets} />
        <Route path='/planets/?page=:pageNumber' element={Planets} />
        <Route path='/planets/:planetId' element={PlanetInfo} />
        <Route path='/films' element={Films} />
        <Route path='/people' element={People} />
        <Route path='/species' element={Species} />
        <Route path='/starships' element={Starships} />
        <Route path='/vehicles' element={Vehicles} />
    </Routes>
  );
}

export default App;
