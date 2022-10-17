let cardHolderName=document.getElementById("cardHolderName");
let cardHolderNameValue=document.getElementById("cardHolderNameValue");

charList=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","Á","É","Í","Ó","Ú"," ","Backspace","Enter"];

let renderStatus="on"


cardHolderName.addEventListener("keydown",render);
cardHolderName.addEventListener("keydown",test);



function render(evento) {
    letter= evento.key.toUpperCase();
    console.log(evento)
    if (renderStatus=="on") {

        if (evento.key=="Backspace") {

            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
        }

        else if (evento.key=="Enter") {
            cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();
            console.log(evento)
        }

        else {

            for (char of charList) {
    
                if (letter==char) {
                    cardHolderNameValue.innerText=cardHolderName.value.toUpperCase()+letter;
                    setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},100) 
                }
            }
        }

    }

}

function test(evento2) {
    z=[];
    y=cardHolderName.value.toUpperCase()+evento2.key.toUpperCase();
    for (i of y) {
        x=charList.indexOf(i)
        z.push(x)
        if (z.indexOf(-1)==-1) {
            renderStatus="on";
        }
        else {
            renderStatus="of";
        }
    
    }
}
