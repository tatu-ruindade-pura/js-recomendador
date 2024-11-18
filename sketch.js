// Idades: 18 anos, 14 anos, livre
// Gênero: Terror, Ação, Ficcção e Romance.

// Idade 18 anos
// Terror - O Farol
// Ação - La casa de papel
// Ficção - Centopéia Humana
// Romance - 50 tons de cinza

// Idade 14 anos
// Terror - Invocação do mal
// Ação -  Velozes e Furiosos 10
// Ficção - Moonfall - Ameaça lunar
// Romance - Fabricante de Lágrimas

// Idade livre
// Terror - A casa Monstro
// Ação - Hot Wheels
// Ficção - Megamente
// Romance - A Bela e a Fera

let campoIdade; 
let campoTerror;
let campoAcao;
let campoFiccao;
let campoRomance;

function setup() {
  createCanvas(600, 400);
  createElement('h1', 'Recomendador de Filmes e Séries');
  createSpan('idade: ')
  campoIdade = createInput();
  campoTerror = createCheckbox('Terror')
  campoAcao = createCheckbox('Ação')
  campoFiccao = createCheckbox('Ficção')
  campoRomance = createCheckbox('Romance')
}

function draw() {
  background('darkblue');
  textAlign(CENTER, CENTER)
  textSize(40);
  fill('white')
  
  let idade = campoIdade.value();
  let Terror = campoTerror.checked();
  let Acao = campoAcao.checked();
  let Ficcao = campoFiccao.checked();
  let Romance = campoRomance.checked();
  
  let filme = geraRecomendacao(idade, Terror, Acao, Ficcao, Romance);
  
  text(filme, width/2, height/2);
  
}

function geraRecomendacao(idade, Terror, Acao, Ficcao, Romance){
  if(idade >= 18){
    if(Terror){
      return 'O Farol'
    }else if(Acao){
      return 'La Casa de Papel'
    }else if(Ficcao){
      return 'Centopéia Humana'
    }else if(Romance){
      return '50 Tons de Cinza'
    }else{
      return 'La Casa de Papel'
    }
  }else if(idade>= 14){
      if(Terror){
      return 'Invocação do Mal'
    }else if(Acao){
      return 'Velozes e Furiosos X'
    }else if(Ficcao){
      return 'Moonfal - Ameaça Lunar'
    }else if(Romance){
      return 'O Fabricante de Lágrimas'
    }else{
      return 'Velozes e Furiosos X'
    }
  }else{
     if(Terror){
      return 'A Casa Monstro'
    }else if(Acao){
      return 'Hot Whells'
    }else if(Ficcao){
      return 'Megamente'
    }else if(Romance){
      return 'A Bela e a Fera'
  }else{
    return 'Hot Whells'
  }
}
}
