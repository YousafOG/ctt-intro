



function reveal(){

  document.querySelector(".flexcenter").style.display = 'none'
  const audio = document.querySelector('audio')
  const wrapper = document.querySelector('.scene')
  const btnAudio = document.querySelector('#btn-audio')
  const btnRestart = document.querySelector('#btn-restart')

  audio.currentTime = 0;
  audio.play();

  const template = document.querySelector('template');

  const copy = template.content.cloneNode(true);

  document.body.append(copy)

  
}