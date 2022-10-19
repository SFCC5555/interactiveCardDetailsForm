let cardHolderName=document.getElementById("cardHolderName");
let cardHolderNameValue=document.getElementById("cardHolderNameValue");
let cardHolderNameError=document.getElementById("cardHolderNameError");

let cardNumber=document.getElementById("cardNumber");
let cardNumberValue=document.getElementById("cardNumberValue");

charList=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","Á","É","Í","Ó","Ú"," "];

let renderStatus="on"

cardHolderName.addEventListener("click",render);
cardHolderName.addEventListener("keydown",test);
cardHolderName.addEventListener("keydown",render);



function render(evento) {

    if (renderStatus=="on") {
        cardHolderNameError.classList.remove("error");
        cardHolderName.classList.remove("errorInput");
        cardHolderNameError.innerText="Wrong format, letters only"
        
        if (evento.type=="focus") {
            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},1)
            if (cardHolderName.value=="") {
                cardHolderNameError.classList.add("error");
                cardHolderName.classList.add("errorInput");
                cardHolderNameError.innerText="Can't be blank"
            }
        }
        else if (evento.type=="click") {

            if (evento.target!=cardHolderName) {
                if (cardHolderName.value=="") {
                    cardHolderNameError.classList.add("error");
                    cardHolderName.classList.add("errorInput");
                    cardHolderNameError.innerText="Can't be blank"
                }
            }
            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},1)
            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            document.addEventListener("click",render);
            cardNumber.addEventListener("focus",render);
        }

        else {
            letter= evento.key.toUpperCase();

            if (letter=="BACKSPACE") {
                console.log(evento)
                setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            }
    
            else {
                for (char of charList) {
        
                    if (letter==char) {
                        cardHolderNameValue.innerText=cardHolderName.value.toUpperCase()+letter;
                        setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},150) 
                    }
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
    letter2= evento2.key.toUpperCase();
    
    if (letter2=="BACKSPACE") {
        y=cardHolderName.value.substr(0,cardHolderName.value.length-1)
    }
    else {
        y=cardHolderName.value.toUpperCase()+evento2.key.toUpperCase();
    }

    console.log(y)
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
