(function(){
  'use strict'

  let banners = ['img/destaque-home.png', 'img/destaque-home-2.png']
  let bannerAtual = 0

  function bannerRotativo() {
    bannerAtual = (bannerAtual + 1) % 2
    document.querySelector('.banner-destaque img').src = banners[bannerAtual]
  }

  let run = setInterval(bannerRotativo, 4000)

  let pauseButton = document.querySelector('.button-pause')
  pauseButton.addEventListener('click', function(){
    clearInterval(run)
  })

  let playButton = document.querySelector('.button-play')
  playButton.addEventListener('click', function() {
    setInterval(bannerRotativo, 4000)
  });

})()
