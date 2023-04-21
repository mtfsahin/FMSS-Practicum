import { Link, Outlet, } from 'react-router-dom';
import SearchBox from './components/SearchBox';
import Booklar from './components/booklar';
import Routers from './routes/Routers';

function App() {

  return (
    <div>
      {/* create nav using react router dom Link property */}
      <nav className="bg-gray-100 flex gap-4 p-5">
        <Link to="/"><span>Home</span></Link>
        <Link to="/books"><span>Books</span></Link>
        <Link to="/about"><span>About</span></Link>
      </nav>
      
      {/* displays the content with Outlet using react router dom */}
      <Outlet/>
      {/* created the routers I created as a component because I wanted it to look less complicated       */}
      <Routers />
      <SearchBox onSearch={(searchTerm) => console.log(searchTerm)} />
      <Booklar />
    </div>
  );
}

export default App;
