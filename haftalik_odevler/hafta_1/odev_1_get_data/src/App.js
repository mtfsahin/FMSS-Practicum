import { createContext, useState, useEffect } from 'react';
import SwitchButton from './components/SwitchButton/SwitchButton';
import './App.css';
import getUserData from "./utils/getData";


export const ThemeContext = createContext(null);

function App() {

  //Dark ve light theme arasınde geçiş yapmak için bir useState tanımlaması yapıyorum
  const [theme, setTheme] = useState("light")
  //Dataları set etmek için data ve setData tanımlıyorum
  const [data, setData] = useState(null);

  const [output, setOutput] = useState('');


  useEffect(() => {
    async function fetchData() {
      const result = await getUserData(1); // Örneğin id = 1 olan kullanıcının verilerini alıyoruz
      setData(result);
      setOutput(JSON.stringify(result, null, 2));
    }
    fetchData();
  }, []);

  //Datalar yüklebirken loading ekranı
  if (!data) {
    return <div>Loading...</div>;
  }

  const ToogleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    //Provider içine alıyorum
    <ThemeContext.Provider value={{ theme, setTheme }} >
      <div id={theme}>

        <SwitchButton
          outerClass="Switch"
          switchButtonID="DarkTheme"
          inputClass=""
          onChange={ToogleTheme}
        />

        {/*<pre style={{fontSize:10}}>{JSON.stringify(data, null, 2)}</pre>*/}

        <div className="terminal-window">
          {output.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
      </div>

    </ThemeContext.Provider>
  );
}

export default App;
