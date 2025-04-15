import './App.css';
import Header from './Header.js';
import React, { useState } from 'react';


function App() {

  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [count, setCount] = useState(0);
  const[nome, setNome] = useState("Gabriel");
  const[numeros, setarNumeros] = useState([1,2,3,4,5,6,7,8,9,10]);
  const [obj,setObj] = useState({nome:'Gabriel', idade:'18'});
  return (
    <div>
      <h2>Nome: {obj.nome}</h2>
      <h3>Idade: {obj.idade}</h3>
{
      numeros.map(function(val){
        return(
        <p> {val} </p>
      )
      })
}
      <button onClick={() => setarNumeros}>
        Click me
      </button>
    </div>
  );
}



//function App(props) {
//  return (
//    <div className="App">
//      {/*<h2>{props.texto.chamada}</h2>
//      <p>{props.texto.chamada2}</p>  React Sempre reconhece como filho*/}
//    </div>
//  );
//}

//<App texto = "Olá Gabriel Ferezim"/>
// <App texto ={{chamada: "Dankicode", chamada2: "Alura"}}/>

export default  App; {/* Export Default pode ser usado direo no elemento ex: export default function App(props) {*/}
