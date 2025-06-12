//principal code
const btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener('click', ()=>{
    let content = element.textContent;
    printValue(content);
    //getOp(content)
    
    clean(content);
    //let f = operate(content);
    //console.log(f);

    })

});

// Affiche la veleur cliquée sur l'ecran
function printValue(value){
    const op = document.querySelector('.p-op');
    let testValue = isNumber(value);
    let tab = ''
    var a = 0;
    var b = 0;
    var sy = '';

    var listeif = [];
    var listeelse = [];
    var listeend = []

    //Nous testons si la valeur entrée n'est pas un nombre
    if (testValue === false){


        
        //
        //console.log(sy)
        //console.log(i, nv, typeof(nv));

        //Dans le cas ou la valeur entrée vaut =
        if (value != '='){
          let text = document.querySelector('.p-op').innerText;
          a = parseFloat(text);
          sy = value;
          listeif.push(a,sy);
           listeend.push(listeif);
          //console.log('a', a, sy)
 
          let opp = document.querySelector('.p-op');
          opp.innerHTML = ''
          //return text
        } 
        else{
          let text = document.querySelector('.p-op').innerText;
          b = parseFloat(text);
          listeelse.push(b);
           listeend.push(listeelse);
          //console.log('b', b, value);
          let opp = document.querySelector('.p-op');
          opp.innerHTML = ''
        } 
    }
    else{
        op.innerHTML += value;
        tab += value;
        
      }



      //console.log('voici la liste', listeif);
      //console.log('voici la liste', listeelse);
      listeend.push(listeif, listeelse);
      console.log('liste finale', listeend);
    }

    


//Fonction qui supprime les valeurs quand nous clickon sur 'AC'
function clean(value){
  if(value === 'AC' || value === 'CA'){
    const op = document.querySelector('.p-op');
    op.innerHTML = '';
  }
}




// verifie si la valeur du bouton cliqué est un nombre
function isNumber(value){
   
  if(isNaN(parseInt(value))){
    return false
  }
  else{
    return value
  }
}

// identifie les differents symboles
function checkSymbol(value){
  let v = isNumber(value);
  if (v === false){
    if (value === '+') 
      return 'plus';

    else if(value === '-')
      return 'moins';

    else if (value ==='÷')
      return 'division';

    else if (value ==='AC')
      return 'clean';

    else if (value ==='%')
      return 'mod';

    else if (value ==='+/-')
      return 'plus or moins';

    else if (value ==='*')
      return 'multiplication';

    else if (value ==='=')
      return 'equals';

  }
}

// la fonction pour enregistrer les operations
function operations(){
  

}
//Functions for addition, subtraction, division, multiplication
function addition(x, y){
  let result = x + y;
  return result;
}

function subtraction(x, y){
  let result = x - y;
  return result;
}

function division(x, y){
  let result = x / y;
  return result;
}

function multiplication(x, y){
  let result = x * y;
  return result;
}

function modulo(x,y){
  result = x % y;
  return result;
}

// functions for error of maths

function divisionByZero(x, y){
  if (y === 0){
    return 'Impossible';
  }
}

function zeroDivisionBynumber(x, y){
  if (x === 0){
    return 0;
  }
}

function noComplete(x,y){
  let symbol = [ '+', '-', '*','÷', '%'];

  symbol.forEach((element) => {
    if (y === element){
      return 'calcul no valid';
    }
    })

}

function operate(value){
  
}





