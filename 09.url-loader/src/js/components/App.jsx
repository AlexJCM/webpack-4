import React, { useState } from "react";
import data from "./data.json";
import Loader from "./Loader";
import logo from "../../images/platzi.png";
import video from "../../video/que-es-core.mp4";

console.log(data);
function App() {
  const [loaderList, setLoaderList] = useState([]);

  //los loaders se mostraran solo si he presionado el boton que llama a este evento
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <video src={video} width={360} controls poster={logo}></video>
      <img src={logo} alt="logo" width={40} />
      <ul>
        {loaderList.map(item => (
          //<Loader key={item.id} data={item} />
          //En vez de enviarle data le envio destructurado directamente
          <Loader key={item.id} {...item} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostar lo aprendido hasta el momento
      </button>
    </div>
  );
}

export default App;
