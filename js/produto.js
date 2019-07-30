(function(){
  'use strict'

  let inputTamanho = document.querySelector('[name=tamanho]')
  let outputTamanho = document.querySelector('[name=valortamanho]')

  function mostrarTamanho() {
    outputTamanho.value = inputTamanho.value
  }

  inputTamanho.oninput = mostrarTamanho

})()
