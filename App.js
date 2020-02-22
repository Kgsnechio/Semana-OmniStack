import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>

          <div Class="input-block">
            <label htmlFor="github_username">Github Username</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div Class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div Class="input-group">

            <div Class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div Class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>

      </main>
    </div>
  );
}

export default App;
