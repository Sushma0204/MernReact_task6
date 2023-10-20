
import './App.css';
import React from 'react';
import developerImage from './developer.png';

function App() {

  return (
    <>

      {/* REACT TASK-6 */}
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Portfolio <span className="sr-only">(current)</span>
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto mx-5">
                <li className="nav-item">
                  <a className="nav-link" href="#About">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Projects">
                    Projecs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <header className="App-header">
          <section className="firstSection">
            <div className="leftSection">
              Hi there, My name is Sushma
              <div className="leftSectiondiv" >I am a passionate web developer</div>
            </div>
            <div className="rightSection">
              <img src={developerImage} alt="Developer" />
            </div>
          </section>
        </header>
        <div class="card-group">
          <div class="card">

            <div class="card-body" id="About">
              <h5 class="card-title ">About ME</h5>
              <p class="card-text">I am a passionate full-stack developer with a strong focus on creating clean, elegant, and efficient solutions. With a background in computer science and a keen eye for design, I enjoy turning complex problems into simple, beautiful, and intuitive designs.</p>

            </div>
          </div>
          <div class="card">

            <div class="card-body" id="Projects">
              <h5 class="card-title">Projects</h5>
              <p class="card-text"> I have a strong background in frontend development, having completed several projects in this domain. Some notable ones include developing finance applications and creating a clone of the SparkLoop website.</p>

            </div>
          </div>
          <div class="card">

            <div class="card-body" id="Contact">
              <h5 class="card-title">Contact</h5>
              <p class="card-text">You can contact me on various platfforms <br />
                Email: sushma@gmail.com <br />
                Phone: 9445638943 <br />
                Github: https://github.com/Sushma0204 <br />
              </p>

            </div>
          </div>
        </div>
        <footer>
          <p>© 2023 Sushma Uddanti</p>
        </footer>
      </div>
    </>

  );
}

export default App;
