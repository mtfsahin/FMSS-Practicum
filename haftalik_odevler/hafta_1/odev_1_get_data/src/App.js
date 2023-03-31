import { createContext, useState, useEffect } from 'react';
import SwitchButton from './components/SwitchButton/SwitchButton';
import './App.css';
import getUserData from "./utils/getData";

export const ThemeContext = createContext(null);

function App() {

  //Default tema ayarını light bırakıyorum ve değiştirebilmek için useState kullanıyorum
  const [theme, setTheme] = useState("light")
  //
  const [data, setData] = useState(null);
  const [output, setOutput] = useState('');
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await getUserData(1);
      setData(result);
      setOutput(JSON.stringify(result, null, 2));
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  //renk modları arası geçiş dark ise light , light ise dark ı set ediyorum
  const ToogleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

    //kullanıcıdan rakam alıp sonrasında rakamı data ya set ediyorum ardından fonksiyondan cevabı bekliyorum
  const handleSubmit = (e) => {
    e.preventDefault();
    //sadece tek haneli rakam 1-9 arası alması için sınırlıyorum 0 da da uyarı verecektir 
    if (!/^\d{1}$/.test(inputValue)) {
      setError("Lütfen sadece 1-9 arası rakam giriniz.");
      return;
    }

    getUserData(inputValue)
      .then((result) => {
        setData(result);
        setOutput(JSON.stringify(result, null, 2));
        setError(null);
      })
      .catch((error) => console.log("getUserData'da bir hata gerçekleşti.",error));
  };

  //inputValueye girilen değeri set ediyorum
  const handleChange = (e) => {
    setInputValue(e.target.value);
    setError(null);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }} >
      <div id={theme}>

        <div className="terminal-container">
          <div className="terminal-window">
            <form className="terminal-form" onSubmit={handleSubmit}>

              <div className="terminal-input-container">
                <label htmlFor="terminal-input" className="terminal-label">
                  User ID :
                </label>
                <input
                  type="text"
                  id="terminal-input"
                  className="terminal-input"
                  value={inputValue}
                  onChange={handleChange}
                  placeholder='#Enter User ID / User ID giriniz'
                />
                <button className="button">Gönder</button>
                <div className="switch-container">
                  <label type="text" className='colorChangeText'>Renk Modunu Değiştir</label>
                  {/* SwitchButton componentimi çağırdım */}
                  <SwitchButton
                    outerClass="Switch"
                    switchButtonID="DarkTheme"
                    inputClass=""
                    onChange={ToogleTheme}
                  />
                </div>
              </div>

              {error && <div className="error-message">{error}</div>}

              <div className="terminal-grid">
                <div className="terminal-item">
                  <div className="terminal-window-mini">
                    {/* datayı termial görüntüsünde mapliyorum */}
                    {output.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </div>
                <div className="terminal-window-mini">
                {/* Data içeriğini daha düzgün bir formatta yazdırdım  */}
                  <h1>Name: {data.name}</h1>
                  <p>Email: {data.email}</p>
                  <p>Phone: {data.phone}</p>
                  <p>Website: {data.website}</p>
                  <h2>Address</h2>
                  <p>
                    {data.address.street}, {data.address.suite}
                  </p>
                  <p>
                    {data.address.city} {data.address.zipcode}
                  </p>
                  <h2>Posts</h2>
                  {data.posts.map((post) => (
                    <div key={post.id}>
                      <h3>{post.title}</h3>
                      <p>{post.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
