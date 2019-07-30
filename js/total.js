(function(){
  'use strict'

  let $input_quantidade = document.querySelector('#qtd')
  let $ouput_total = document.querySelector('#total')

  $input_quantidade.oninput = function() {
    let preco = document.querySelector('#preco').textContent
    preco = preco.replace('R$', '')
    preco = preco.replace(',', '.')
    preco = parseFloat(preco)

    let quantidade = $input_quantidade.value
    let total = quantidade * preco
    total = 'R$ ' + total.toFixed(2)
    total = total.replace('.', ',')

    $ouput_total.value = total;
  }


})()
