
const btn = document.querySelectorAll(".btn");

const val1 = document.querySelector('.val1');
const val2 = document.querySelector('.val2');
const ops = document.querySelector('.ops');
const results = document.querySelector('.result');

//principal code
//Tout se declenche lorsque on clique sur n'importe quel bouton
btn.forEach((element) => {
  element.addEventListener('click', ()=>{
        let content = element.textContent;
        printValue(content);
        
        clean(content);

        const op = document.querySelector('.p-op');
        let testValue = isNumber(content);
        if(val1.textContent === ''){
            
            getValue(val1, content, testValue);   
        }

        else if (val2.textContent === ''){
            
            getValue(val2, content, testValue);
            
        }

        else if (content==='='){
            let x = parseFloat(val1.textContent);
            let y = parseFloat(val2.textContent);
            let r = operate(x,y, ops.textContent);
            results.innerHTML = r;
            console.log(r)
        }
        //Pour effectuer des calculs continus
        else if((results.textContent != '') && (testValue === false) && (testValue != '=')){
            const op = document.querySelector('.p-op');
            op.innerHTML =''
            val1.innerHTML = results.textContent;
            ops.innerHTML = content
            
            getValue(val2, content, testValue);
        }
   

    })

});


//PARTIE OU TOUTES LES FONCTIONS SONT DECLAREES

// Affiche la veleur cliquée sur l'ecran
function printValue(val){
    const op = document.querySelector('.p-op');
    op.innerHTML +=val
}
// Récupère la valeur de la zone pour l'afficher dans le selecteur indiqué
function getValue(selector, content, test){
    //verifie si la valeur entréee n'est pas un nombre ou egal au point
    if (test !== false || content ==='.'){
        let text = document.querySelector('.p-op').innerText;
        
    }
    else{
        let  g = document.querySelector('.p-op');
        let v = g.textContent;

        let vv = v.substring(0, v.length-1)
        let value = vv
        
        if(ops.textContent ===''){
            let sign = v.charAt(v.length-1);
            ops.innerHTML = sign;
        }

        selector.innerHTML = value;
        g.innerHTML = ''  
                
    }

}

//Fonction qui supprime les valeurs quand nous clickon sur 'AC'
function clean(value){
    const op = document.querySelector('.p-op');
  if(value === 'AC' || value === 'CA'){
    
    val1.innerHTML = '';
    val2.innerHTML = '';
    ops.innerHTML = '';
    op.innerHTML = '';
    results.innerHTML = '';
  }
  else if(value ==='DEL'){
    op.innerHTML = '';
    results.innerHTML = '';

  }
}

// verifie si la valeur du bouton cliqué est un nombre
function isNumber(val){
   
  if(isNaN(parseInt(val))){
    return false
  }
  else{
    return val
  }
}

//Effectue les differents calculs en fonction de l'operateur
function operate(x,y, op){
    if(op ==='+'){
        return (x)+(y);
    }
    else if(op ==='-'){
        return x-y;
    }

    else if(op ==='/'){
        return x/y;
    }
    else if(op ==='*'){
        return x*y;
    }
    else if(op ==='%'){
        return x%y;;
    }
    else{
        return 'Impossible';
    }
}



