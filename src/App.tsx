import React from 'react';
import MainRoutes from './Routes';
import './styles.css';
import Sidebar from './components/sidebar';
function App() {
  return (
    <div className="app">
      <Sidebar></Sidebar>
      <MainRoutes></MainRoutes>

    </div>
  );
}

export default App;
