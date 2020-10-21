import React from 'react';
import logo from '../logo.svg';
import '../styles/styles.css'
import '../styles/styles.css'


function login(){
  return React.createElement('div', {className:'App'},
    React.createElement('div', {className:'App-space'},
      React.createElement('h1', null, 'OPLI'), 
      React.createElement('input',{className:'App-input', placeholder:'Email...', type:'email'}),
      React.createElement('input', {className:'App-input', placeholder:'Contraseña...', type:'password'}),
      React.createElement('button',{className:'App-buton', id:'singin'}, "Entrar"),
      React.createElement('a', {className:'App-link'}, 'o Registrate')
    )
  );
}


export default login;
