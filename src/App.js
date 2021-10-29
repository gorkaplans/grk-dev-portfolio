import Header from './components/header'; 
import Hero from './components/hero'
import Abstract from './components/abstract';
import Projects from './components/projects'
import JobsProjects from './components/jobsProjects';


function App() {
  return (
    <div className="App">
      <div className="w-full px-10">
        <Header></Header>
        <Hero></Hero>
        <Abstract></Abstract>
        <Projects></Projects>
        <JobsProjects></JobsProjects>
      </div>
    </div>
  );
}

export default App;
