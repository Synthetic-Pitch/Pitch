const pianoIcon = document.querySelector('#piano-icon');
const audioContainer = document.querySelector('.audio-container')
const audioGuitar =document.querySelector('.audio-container-guitar')
const tulip = document.querySelector('.tulip')
let changer = true
pianoIcon.addEventListener('click',()=>{
 
  changer = !changer
  if(!changer){
    audioContainer.style.display = 'none'
    audioGuitar.style.display = 'block'
    tulip.className='tulip-change'
  }else{
    audioContainer.style.display = 'block'
    audioGuitar.style.display = 'none'
    tulip.className='tulip'
  }
})