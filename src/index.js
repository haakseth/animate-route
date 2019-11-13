import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Map from './Map/Map';

function App() {
  return (
    <div className="App">
      <Map />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

/*
https://docs.mapbox.com/mapbox-gl-js/example/animate-a-line/
*/
