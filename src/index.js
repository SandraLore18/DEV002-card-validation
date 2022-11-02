

//import validator from './validator.js';

//console.log(validator);



    let formulario = document.querySelector("#formularioDos");
    let numeroDeTarjeta = document.querySelector(".tarjetaValidacion #numeroDeTarjeta");

    formulario.claveTarjeta.addEventListener("keyup", (e)=>{              //elemento, metodo, evento
            let contenido = e.target.value;
            formulario.claveTarjeta.value = contenido
            //expresiones regulares con ciertas funciones
            .replace(/\s/g, '')
            .replace(/\D/g, '')
            .replace(/([0-9]{4})/g, '$1 ')
            .trim();

            numeroDeTarjeta.textContent = contenido;
                if(contenido === ""){
                    numeroDeTarjeta.textContent = "#### #### #### ####";
                }
    })       


function comenzar (){
let valorInput = document.querySelector("#registro").value;
localStorage.setItem("Gauss",valorInput);

    if(valorInput === ""){
        return
    }
}
localStorage.clear();