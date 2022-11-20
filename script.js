let text = "SVRLAB"

let i = 0;

let posicion = document.getElementById("SVRLAB")

function writeText() {
    posicion.innerText = text.slice(0,i);
    i++;
    if(i>text.length){
        i=6;
    }
    
}

setInterval(writeText, 600)