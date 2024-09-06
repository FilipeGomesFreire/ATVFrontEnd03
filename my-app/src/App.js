import React, { useState } from 'react';

function App() {

// Função para tocar o áudio
const playAudio = () => {
  const audioElement = document.getElementById('audio-player');
  audioElement.play();
};

// Função para pausar o áudio
const pauseAudio = () => {
  const audioElement = document.getElementById('audio-player');
  audioElement.pause();
};

//teste


  
  // Variáveis para armazenar as URLs das imagens e o valor da div
  const [image1, setImage1] = useState('https://i.imgur.com/2YCahWW.gif');
  const [image2, setImage2] = useState('https://i.imgur.com/2YCahWW.gif');
  const [number1, setNumber1] = useState(0); // Número inicial
  const [number2, setNumber2] = useState(0); // Número inicial

  // Função chamada ao clicar no botão
  function handleChange() {

    pauseAudio();
    
    setImage1('https://i.imgur.com/2YCahWW.gif');
    setImage2('https://i.imgur.com/2YCahWW.gif');

    setTimeout(function() {
      const newNumber1 = Math.floor(Math.random() * 6) + 1;
    setNumber1(newNumber1);

    const newNumber2 = Math.floor(Math.random() * 6) + 1;
    setNumber2(newNumber2);

      alterarimagens(newNumber1, newNumber2)
      verificar(newNumber1,newNumber2);
    }, 800)

 
    
  }

  function alterarimagens(newNumber1, newNumber2){
    if(newNumber1 === 1){
      setImage1('https://i.imgur.com/KHcK0tk.png');
    }
    if(newNumber1 === 2){
      setImage1('https://i.imgur.com/4IcBBwe.png');
    }
    if(newNumber1 === 3){
      setImage1('https://i.imgur.com/fRDXMlA.png');
    }
    if(newNumber1 === 4){
      setImage1('https://i.imgur.com/8NMEW0Q.png');
    }
    if(newNumber1 === 5){
      setImage1('https://i.imgur.com/PRSwwmG.png');
    }
    if(newNumber1 === 6){
      setImage1('https://i.imgur.com/3X2Jmi6.png');
    }
//-------------------------------------------------------------
    if(newNumber2 === 1){
      setImage2('https://i.imgur.com/KHcK0tk.png');
    }
    if(newNumber2 === 2){
      setImage2('https://i.imgur.com/4IcBBwe.png');
    }
    if(newNumber2 === 3){
      setImage2('https://i.imgur.com/fRDXMlA.png');
    }
    if(newNumber2 === 4){
      setImage2('https://i.imgur.com/8NMEW0Q.png');
    }
    if(newNumber2 === 5){
      setImage2('https://i.imgur.com/PRSwwmG.png');
    }
    if(newNumber2 === 6){
      setImage2('https://i.imgur.com/3X2Jmi6.png');
    }
  }

  function verificar(num1, num2){
    if(num1 + num2 === 11 || num1 + num2 === 7 ){
      playAudio();
      //alert("GANHOU!");
     }
  }

  


  return (
    <div>
      <h1>Minha Página</h1>

      {/* Duas imagens com links */}
      <img src={image1} alt="Imagem 1" width="200" />
      <img src={image2} alt="Imagem 2" width="200" />

      {/* Botão que chama a função handleChange */}
      <button onClick={handleChange}>Alterar Imagens e Número</button>

      {/* Div com um número dentro */}
      <div style={{ marginTop: '20px', fontSize: '24px' }}>
        dado 1: {number1}
        dado 2: {number2}
      </div>
      
      <audio id="audio-player" src="https://www.myinstants.com/media/sounds/bara-bara-bere-bere.mp3"></audio>

      
    </div>
  );
}

export default App;

