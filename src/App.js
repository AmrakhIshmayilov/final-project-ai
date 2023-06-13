import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//{} Obyektin Parcalanmasi--Object Decomposition
// import react from 'react';
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction.jsx";
import TrustedByCompanies from "./components/TrustedByCompanies";
import Apply from "./components/Apply";
// import Award from './components/Award';
import AwardsContanier from "./components/AwardsContanier";
import WhatAboutClients from "./components/WhatAboutClients";
// Komponentlerin daxil edildiyi yer (END) //
function App() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Introduction />
        <TrustedByCompanies />
        <Apply />
        <AwardsContanier />
        <WhatAboutClients />
      </div>
    </>
  );
}

export default App;
