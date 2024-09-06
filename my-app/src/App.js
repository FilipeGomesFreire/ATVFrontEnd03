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

//teste 321


  
  // Variáveis para armazenar as URLs das imagens e o valor da div
  const [image1, setImage1] = useState('https://i.imgur.com/2YCahWW.gif');
  const [image2, setImage2] = useState('https://i.imgur.com/2YCahWW.gif');
  const [incrivel, setIncrivel] = useState('https://i.pinimg.com/236x/ae/2f/2d/ae2f2d3be50269e19ebb2d53c1c4b3f9.jpg');
  //setIncrivel('https://i.imgur.com/KHcK0tk.png');


  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const [contadorVitorias, setContadorVitorias] = useState(0);
  const [contadorDerrotas, setcontadorDerrotas] = useState(0);


 
  function handleChange() {

    document.body.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/2/4/9/1/1661942_cbf06.gif')";

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
  
      // const newcontadorVitorias = contadorVitorias+1; //assim ta q nem o exemplo em sala, só aparece depois q atualiza 
      // setContadorVitorias(newcontadorVitorias);
      // console.log("contadorVitorias"+contadorVitorias);

      setContadorVitorias((prevContadorVitorias) => {
        const newcontadorVitorias = prevContadorVitorias + 1;
        console.log("contadorVitorias", newcontadorVitorias); 
        return newcontadorVitorias;
      });

      playAudio();
      document.body.style.backgroundImage = "url('https://i.makeagif.com/media/3-10-2022/qyryXg.gif')";
      
      //alert("GANHOU!");
     }
     else{
      setcontadorDerrotas((prevContadorDerrotas) => {
        const newcontadorDerrotas = prevContadorDerrotas + 1;
        console.log("contadorDerrotas", newcontadorDerrotas); 
        return newcontadorDerrotas;
      });
     }
  }

  function calcularPorcentagem() {
    const totalJogadas = contadorVitorias + contadorDerrotas;
  
    if (totalJogadas === 0) {
      return "Nenhuma jogada realizada";
    }

    // if (contadorDerrotas < 2) {
    //   setIncrivel('https://i.imgur.com/KHcK0tk.png');
    // } else if (contadorDerrotas >= 2 && contadorDerrotas < 5) {
    //   setIncrivel('https://i.pinimg.com/236x/81/9d/3d/819d3dce0441f53fa7232dcbc0c40fdf.jpg');
    // } else if (contadorDerrotas >= 5 && contadorDerrotas < 7) {
    //   setIncrivel('https://i.pinimg.com/236x/fb/29/56/fb2956e925ef817e82203897a69e699a.jpg');
    // }
  
    const porcentagemVitorias = (contadorVitorias / totalJogadas) * 100;
    
    return `Score ${contadorVitorias}/${totalJogadas} = ${porcentagemVitorias.toFixed(2)}%`;
  }
  


  return (
    <div>
      
      <img id='imgIncrivel' src={incrivel} width="200" />
      <br/>
      <div id='dados'>
      <h1>JOGO DO TIGRINHO!!!!!</h1>
      
      <img src={image1} alt="Imagem 1" width="200" />
      <img src={image2} alt="Imagem 2" width="200" />
      <br/>
      <button onClick={handleChange} style={{marginLeft: '35%', height: '100px', width: '120px' }}>JOGAR</button>
      <br/>
      <p>{calcularPorcentagem()}</p>
      </div>
     
      
      
      
      

      
      <div style={{visibility: 'visible', marginTop: '20px', fontSize: '24px' }}>
        dado 1: {number1}
        dado 2: {number2}
        vitorias: {contadorVitorias}
        derrotas: {contadorDerrotas}
       

      </div>
      
      <audio id="audio-player" src="https://www.myinstants.com/media/sounds/bara-bara-bere-bere.mp3"></audio>

      
    </div>
  );
}

export default App;

