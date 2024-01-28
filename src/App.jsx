import './App.css';
import ResponsiveAppBar from './components/Header';
import { Outlet } from 'react-router-dom';
// import Home from './pages/Home';
import SimpleBottomNavigation from './components/Footer';

function App() {
  return (
    <div className='bg-white'>
      <ResponsiveAppBar />
      <div>
        <Outlet />
      </div>
      
      <footer>
        <SimpleBottomNavigation />
      </footer>
    </div>
  );
}

export default App;
