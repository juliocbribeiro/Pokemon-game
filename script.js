function result() {
  let resul = window.document.getElementById('inptxt')
  let res = window.document.getElementById('res')
  var image = document.getElementById('pic')

  if (resul.value == 'goldeen' ||resul.value == 'Goldeen' ){
    image.setAttribute('src', 'https://i.ibb.co/kVnnF2F/pokemon-color.png')
    resul.focus()
    
    
}

  else if (!/^[a-zA-Z]*$/g.test(resul.value)) {
    window.alert("Por favor, inserir somente letras!");
    resul.value = ''
    resul.focus() 
    image.setAttribute('src', 'https://i.ibb.co/YdgsvVs/pokemon-black.png')

}


  else{
    window.alert(`Que pena, você errou. Tente novamente!`)
    resul.value = ''
    resul.focus() 
    image.setAttribute('src', 'https://i.ibb.co/YdgsvVs/pokemon-black.png')

   }


}

function dica(){
  var image = document.getElementById('pic')
  let resul = window.document.getElementById('inptxt')

  resul.value = `Goldeen`
  image.setAttribute('src', 'https://i.ibb.co/kVnnF2F/pokemon-color.png')

}

