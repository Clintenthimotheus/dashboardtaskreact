
import './App.css';
import Side from './Components/Side';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Dashboard from './Components/Dashboard';
import { useState } from 'react';
function App() {
  const [activeDashboard, setActiveDashboard] = useState(0);

  const handleDashboardSelect = (index) => {
    setActiveDashboard(index);
  };

  return (
    <div className="App">
      <div className='AppGlass'>
        <Side activeDashboard={activeDashboard} handleDashboardSelect={handleDashboardSelect}/>
        <div className='components'>
          <Header/>
          {activeDashboard === 0 && <Dashboard />} {/* Only render Dashboard when activeDashboard is 0 */}
          <Footer/>
        </div>
      </div>
    </div>
  );
}
export default App;
