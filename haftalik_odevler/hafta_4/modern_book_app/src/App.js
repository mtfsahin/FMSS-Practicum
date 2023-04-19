import {Link, Outlet} from 'react-router-dom';

function App() {

  return (
    <div>
      <nav className="bg-gray-100 flex gap-4">
        <Link to="/"><span>Home Page</span></Link>
        <Link to="/Books"><span>Books Page</span></Link>
        <Link to="/About"><span>About Page</span></Link>
      </nav>
      {/* displays the content with Outlet */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
