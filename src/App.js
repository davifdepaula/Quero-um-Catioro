import axios from 'axios';
import loading from "./assets/carregando.gif"
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [image, setImage] = useState(null)
  function buildImage() {
    // TODO
    // carregar a imagem de um catioro da API https://dog.ceo/api/breeds/image/random
    const url = "https://dog.ceo/api/breeds/image/random"
    // mostrar a imagem quando for trazida da API
    axios.get(url)
      .then((response) => {
        const imgPath = response.data.message
        setImage(imgPath)
      })
      .catch((error) => console.log(error))
    // enquanto a API não responde, mostrar uma mensagem "Carregando imagem..."
  }

  useEffect(() => {
    buildImage();
  }, [])

  if (image === null) {
    return (
      <div className="view">
        <div className="image">
        <img src={loading} alt = "carregando" />
        </div>
      </div>
    ) 
  }
  
  return (
    <div className="view">
      <div className="image">
        <img src={image} alt = "cachorrinho" />
      </div>
    </div>
  );
}

export default App;
