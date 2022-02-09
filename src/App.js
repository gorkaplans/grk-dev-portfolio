import Header from "./components/header";
import Hero from "./components/hero";
import Abstract from "./components/abstract";
import Projects from "./components/projects";
import Footer from "./components/footer";

import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    let matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (matched) return setTheme("dark");
  }, []);

  return (
    <>
      <div className="App" data-theme={theme}>
        <div className="w-full px-10">
          <Header theme={theme} setTheme={setTheme}></Header>
          <Hero></Hero>
          <Abstract></Abstract>
          <Projects></Projects>
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}
  
export default App;
