import { useEffect, useState } from "react";
// import "./index.css";
import { ThemeProvider } from "./Contexts/Theme";
import ThemeBtn from "./Components/Card";
import Card from "./Components/ThemeBtn";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <h1 className="bg-slate-200 text-center text-3xl font-extrabold text-black shadow-md shadow-slate-400 m-2  p-6 w-1/2 ml-72">
        Theme Switcher
      </h1>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
