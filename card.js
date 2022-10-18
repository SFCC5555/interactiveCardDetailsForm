let cardHolderName=document.getElementById("cardHolderName");
let cardHolderNameValue=document.getElementById("cardHolderNameValue");
let cardHolderNameError=document.getElementById("cardHolderNameError");

let cardNumber=document.getElementById("cardNumber");
let cardNumberValue=document.getElementById("cardNumberValue");

charList=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","Á","É","Í","Ó","Ú"," ","Backspace","Enter"];

let renderStatus="on"

cardHolderName.addEventListener("click",render);
cardHolderName.addEventListener("keydown",render);
cardHolderName.addEventListener("keydown",test);




function render(evento) {

    if (renderStatus=="on") {
        console.log(evento)
        
        if (evento.type=="focus") {
            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},1)
        }
        else if (evento.type=="click") {
            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},1)
            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            document.addEventListener("click",render);
            cardNumber.addEventListener("focus",render);
        }

        else if (evento.key=="Backspace") {
            console.log(evento)
            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
        }

        else {
            letter= evento.key.toUpperCase();
            for (char of charList) {
    
                if (letter==char) {
                    cardHolderNameValue.innerText=cardHolderName.value.toUpperCase()+letter;
                    setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},150) 
                }
            }
        }

    }
    else {
        cardHolderNameError.classList.add("error");
        cardHolderName.classList.add("errorInput");
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
