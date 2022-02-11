import React from "react";
import Footer from "./components/Footer";
import Section from './components/Section'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {
  return (
    <React.StrictMode>
      <div>

        <Section />
        <Footer />

      </div>
    </React.StrictMode>
  );
}

export default App;
