import {HashRouter} from "react-router-dom";

import {About, Contact, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from "./components";


const App = () => {

  return (
    <HashRouter>
      <div className="relatve z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </HashRouter>
  )
}

export default App
