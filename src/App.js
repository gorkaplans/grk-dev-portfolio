import { ThemeProvider } from 'styled-components'; 
import Header from './components/header'; 
import Hero from './components/hero'
import Abstract from './components/abstract';
import Projects from './components/projects'
import Footer from './components/footer';
import { Body } from './components/Body';

import Themes from './components/theme/themes'
import { useState } from 'react';

export { default as Themes} from './components/theme/themes'


function App() {
 const [theme, setTheme] = useState("light")

  return (
    <>
    <ThemeProvider theme={Themes[theme]}>
      <Body>
    <div className="App">
      <div className="w-full px-10">
        <Header theme={theme} setTheme={setTheme}></Header>
        <Hero></Hero>
        <Abstract></Abstract>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    </div>
    </Body>
    </ThemeProvider>
    </>
  );
}

export default App;
