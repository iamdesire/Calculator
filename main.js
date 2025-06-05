const btn = document.querySelectorAll(".btn");

btn.forEach((element) => {
  element.addEventListener('click', ()=>{
    let content = element.textContent;
    printValue(content);

    let v = isNumber(content);
    let l = checkSymbol(content)
    console.log(l);
    })

});

// Affiche la veleur cliquée sur l'ecran
function printValue(value){
    const op = document.querySelector('.p-op');
    op.innerHTML += value;
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

function operate(value){
  let check = checkSymbol(value);
  let operations += value;
  if (check ==='equals'){
    return result;
  }
  

}
function save(value){
  //Une operation a une forme générale:
    // val1-op- val2 = result


}
