import { createContext, useState } from 'react';
import SwitchButton from './components/SwitchButton/SwitchButton';
import './App.css';
import './styles/theme.css'


export const ThemeContext = createContext(null);

function App() {

  //Dark ve light theme arasınde geçiş yapmak için bir useState tanımlaması yapıyorum
  const [theme, setTheme] = useState("light")

  const ToogleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    //Provider içine alıyorum
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App" id={theme}>
        <header className="App-header">

          {/* Oluşturduğum switchButton componentini kullanıyorum */}
          <SwitchButton
            outerClass="Switch"
            switchButtonID="DarkTheme"
            inputClass=""
            onChange={ToogleTheme}
          />

          {theme === "dark" ? [
            <div className='text-s '>
              Dark mode aktif
            </div>
          ] : [
            <div className='text-s'>
              Light mode aktif
            </div>
          ]
          }

        </header>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
