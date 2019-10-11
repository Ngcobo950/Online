import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Musa from './Musa.jpg';
import Work from './component/Work.js';
import Skills from './component/Skills.js';
import Education from './component/Education.js';
import About from './component/About.js';
import Reference from './component/Reference.js';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './App.css';

const App = props => {
  return (
    <div class="grid-container">
      <div class="grid-item">
        <div className="profileImg" id="center">
          <img alt="Musa" src={Musa} width="200" id="musa"/>
          <div>
            <h1 className="text-center">Musa Ngcobo</h1>
            <h5 className="text-center">Junior Front-End Developer</h5>
            <ul className="list-unstyled">
              <li className="fa fa-lg fa-envelope "> ngcobomusa950@gmail.com</li><br/>
              <li className="fa fa-lg fa-phone "> 0685375246</li><br/>
              <li className="fa fa-lg fa-phone "> 0748131795</li>
            </ul>
          </div>  
        </div>
      </div>

      <div class="grid-item">
        <div id="right">
          <About/>
          <Work/>
          <Education/>
          <Skills/>
          <Reference/>
        </div>
      </div> 
    </div>
  );
};

export default App;