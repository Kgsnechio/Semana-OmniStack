import React, { useEffect } from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(   
      (position) => {
        console.log(position)
      },
      (err) => {
        console.log(err)
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  return (
    <div id="App">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div className ="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div className ="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className ="input-group">

            <div className ="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div className ="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className ="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/60004575?s=460&v=4" alt="André Nechio"/>
              <div className ="user-info">
                <strong>André Nechio</strong>
                <span>Node.js, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>
              Acabei de ingressar em um curso superior de ADS :) estou aprendendo JavaScript, Node.js e React
            </p>
            <a href="https://github.com/Kgsnechio">Acessar perfil no Github</a>
          </li>

          <li className ="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/60004575?s=460&v=4" alt="André Nechio"/>
              <div className ="user-info">
                <strong>André Nechio</strong>
                <span>Node.js, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>
              Acabei de ingressar em um curso superior de ADS :) estou aprendendo JavaScript, Node.js e React
            </p>
            <a href="https://github.com/Kgsnechio">Acessar perfil no Github</a>
          </li>

          <li className ="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/60004575?s=460&v=4" alt="André Nechio"/>
              <div className ="user-info">
                <strong>André Nechio</strong>
                <span>Node.js, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>
              Acabei de ingressar em um curso superior de ADS :) estou aprendendo JavaScript, Node.js e React
            </p>
            <a href="https://github.com/Kgsnechio">Acessar perfil no Github</a>
          </li>

          <li className ="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/60004575?s=460&v=4" alt="André Nechio"/>
              <div className ="user-info">
                <strong>André Nechio</strong>
                <span>Node.js, ReactJS, ReactNative</span>
              </div>
            </header>
            <p>
              Acabei de ingressar em um curso superior de ADS :) estou aprendendo JavaScript, Node.js e React
            </p>
            <a href="https://github.com/Kgsnechio">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
