
let numeroMaximoPosible = 100
let numeroSecreto = Math.floor (Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabraVeces = "vez";
let maximosIntentos = 6;

    while (numeroUsuario !== numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 Y ${numeroMaximoPosible} por favor`));

    console.log(typeof (numeroUsuario));

    /*ESTE CODIGO REALIZA LA COMPRACION*/
    if (numeroUsuario == numeroSecreto) {
        /*acertamos, fue verdadera la condicion*/
        alert (`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1? "vez": "veces"}`);
    }else {
        //La condicion no se cumplio*/
        if (numeroUsuario > numeroSecreto) {
        alert ("El número secreto es menor");
        } else {
            alert ("El número secreto es mayor");
        }
        //incrementamos el contador cuando no acierta
        // intentos = intentos + 1;
        // intentos +=1;
        intentos++;
        palabraVeces = "veces";
        if (intentos > maximosIntentos) {
            alert (`llegaste al número maximo de ${maximosIntentos} intento`);
            break; 
        }
        }
        
    }
    
   
//alert ("Lo siento, no acertaste el número");


