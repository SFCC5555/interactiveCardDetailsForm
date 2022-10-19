let cardHolderName=document.getElementById("cardHolderName");
let cardHolderNameValue=document.getElementById("cardHolderNameValue");
let cardHolderNameError=document.getElementById("cardHolderNameError");

let cardNumber=document.getElementById("cardNumber");
let cardNumberValue=document.getElementById("cardNumberValue");
let cardNumberError=document.getElementById("cardNumberError");

let dateMM=document.getElementById("dateMM");


cardHolderName.addEventListener("click",render);
cardHolderName.addEventListener("keydown",test);
cardHolderName.addEventListener("keydown",render);

cardNumber.addEventListener("click",renderNumber);
cardNumber.addEventListener("keydown",testNumber);
cardNumber.addEventListener("keydown",renderNumber);


/*Cardholder Name*/

charList=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","Á","É","Í","Ó","Ú"," "];

let renderStatus="on"

function render(evento) {
    console.log(renderStatus)

    if (renderStatus=="on") {
        cardHolderNameError.classList.remove("error");
        cardHolderName.classList.remove("errorInput");


        
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
        cardHolderNameError.innerText="Wrong format, letters only"
    }
}

function test(evento2) {
    z=[];
    letter2= evento2.key.toUpperCase();
    
    if (letter2=="BACKSPACE") {
        y=cardHolderName.value.substr(0,cardHolderName.value.length-1)

        if (y=="") {
            renderStatus="on";
        }
    }
    else {
        y=cardHolderName.value.toUpperCase()+evento2.key.toUpperCase();
    }

    console.log(y)
    for (i of y) {
        x=charList.indexOf(i)
        z.push(x)
        console.log(x)
        console.log(z)
        
        if (z.indexOf(-1)==-1) {
            renderStatus="on";
        }
        else {
            renderStatus="of";
        }
        console.log(renderStatus)
    }
}

/*Card Number*/

charNumberList=[1,2,3,4,5,6,7,8,9,0,"1","2","3","4","5","6","7","8","9","0"," "];

let renderNumberStatus="on"

function renderNumber(eventoNumber) {

    console.log(eventoNumber)
    console.log(renderNumberStatus)

    if (renderNumberStatus=="on") {
        cardNumberError.classList.remove("error");
        cardNumber.classList.remove("errorInput");
        
        if (eventoNumber.type=="focus") {
            setTimeout(function(){cardNumberValue.innerText=cardNumber.value;},1)
            if (cardNumber.value=="") {
                cardNumberError.classList.add("error");
                cardNumber.classList.add("errorInput");
                cardNumberError.innerText="Can't be blank";
                
            }
        }
        else if (eventoNumber.type=="click") {

            if (eventoNumber.target!=cardNumber) {
                if (cardNumber.value=="") {
                    cardNumberError.classList.add("error");
                    cardNumber.classList.add("errorInput");
                    cardNumberError.innerText="Can't be blank";
                }
            }
            setTimeout(function(){cardNumberValue.innerText=cardNumber.value;},1)
            document.addEventListener("click",renderNumber);
            cardHolderName.addEventListener("focus",renderNumber);
            dateMM.addEventListener("focus",renderNumber);
        }

        else {
            number= eventoNumber.key;

            if (number=="Backspace") {
                setTimeout(function(){cardNumberValue.innerText=cardNumber.value;},1)
            }
    
            else {
                for (charNumber of charNumberList) {
        
                    if (number==charNumber) {
                        cardNumberValue.innerText=cardNumber.value+number;
                    }
                }
            }
        }        

    }
    else {
        cardNumberError.classList.add("error");
        cardNumber.classList.add("errorInput");
        cardNumberError.innerText="Wrong format, numbers only";
    }
}

function testNumber(eventoNumber2) {
    zNumber=[];
    number2= eventoNumber2.key;
    console.log(number2)
    
    if (number2=="Backspace") {
        yNumber=cardNumber.value.substr(0,cardNumber.value.length-1)

        if (yNumber=="") {
            renderNumberStatus="on";
        }
    }
    
    else if (number2=="Tab") {
        yNumber=cardNumber.value.substr(0,cardNumber.value.length-3)
    }
    else {
        yNumber=cardNumber.value+number2;
    }

    console.log(yNumber)
    for (iNumber of yNumber) {
        xNumber=charNumberList.indexOf(iNumber)
        zNumber.push(xNumber)
        
        if (zNumber.indexOf(-1)==-1) {
            renderNumberStatus="on";
        }
        else {
            renderNumberStatus="of";
        }
    
    }
}