import { Outlet, } from 'react-router-dom';
import Routers from './routes/Routers';
import Navbar from './routes/Navbar';

function App() {

  return (
    <div>
      <Navbar/>
      {/* displays the content with Outlet using react router dom */}
      <Outlet />
      {/* created the routers I created as a component because I wanted it to look less complicated       */}
      <Routers />
    </div>
  );
}

export default App;
