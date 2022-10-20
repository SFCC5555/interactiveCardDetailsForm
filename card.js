let cardHolderName=document.getElementById("cardHolderName");
let cardHolderNameValue=document.getElementById("cardHolderNameValue");
let cardHolderNameError=document.getElementById("cardHolderNameError");

let cardNumber=document.getElementById("cardNumber");
let cardNumberValue=document.getElementById("cardNumberValue");
let cardNumberError=document.getElementById("cardNumberError");

let dateMM=document.getElementById("dateMM");
let dateMMValue=document.getElementById("dateMMValue");
let dateMMError=document.getElementById("dateMMError");

let dateYY=document.getElementById("dateYY");
let dateYYValue=document.getElementById("dateYYValue");
let dateYYError=document.getElementById("dateYYError");

let cardCode=document.getElementById("cardCode");
let cardCodeValue=document.getElementById("cardCodeValue");
let cardCodeError=document.getElementById("cardCodeError");

let confirmButton=document.getElementById("confirmButton");

let sectionForm=document.querySelector(".form");

cardHolderName.addEventListener("click",render);
cardHolderName.addEventListener("focus",render);
cardHolderName.addEventListener("keydown",test);
cardHolderName.addEventListener("keydown",render);

cardNumber.addEventListener("click",renderNumber);
cardNumber.addEventListener("focus",renderNumber);
cardNumber.addEventListener("keydown",testNumber);
cardNumber.addEventListener("keydown",renderNumber);

dateMM.addEventListener("click",renderDateMM);
dateMM.addEventListener("focus",renderDateMM);
dateMM.addEventListener("keydown",testDateMM);
dateMM.addEventListener("keydown",renderDateMM);

dateYY.addEventListener("click",renderDateYY);
dateYY.addEventListener("focus",renderDateYY);
dateYY.addEventListener("keydown",testDateYY);
dateYY.addEventListener("keydown",renderDateYY);

cardCode.addEventListener("click",renderCode);
cardCode.addEventListener("focus",renderCode);
cardCode.addEventListener("keydown",testCode);
cardCode.addEventListener("keydown",renderCode);

confirmButton.addEventListener("click",confirm);

/*Cardholder Name*/

charList=["Q","W","E","R","T","Y","U","I","O","P","A","S","D","F","G","H","J","K","L","Ñ","Z","X","C","V","B","N","M","Á","É","Í","Ó","Ú"," "];

let renderStatus="on"

function render(evento) {

    if (renderStatus=="on") {
        cardHolderNameError.classList.remove("error");
        cardHolderName.classList.remove("errorInput");

        console.log(evento)
        
        if (evento.type=="click") {

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
        
        else if (evento.type=="focus") {
            if (evento.target!=cardHolderName) {
                if (cardHolderName.value=="") {
                    cardHolderNameError.classList.add("error");
                    cardHolderName.classList.add("errorInput");
                    cardHolderNameError.innerText="Can't be blank"
                }
            }
            setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},1)
            document.addEventListener("click",render);
            cardNumber.addEventListener("focus",render);
        }


        else {
            letter= evento.key.toUpperCase();

            if (letter=="BACKSPACE") {
                setTimeout(function(){cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();},1)
            }
    
            else {
                for (char of charList) {
        
                    if (letter==char) {

                        if (cardHolderName.value.length==25) {

                            cardHolderNameValue.innerText=cardHolderName.value.toUpperCase();
                            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},150)
                        }
                        
                        else {
                            cardHolderNameValue.innerText=cardHolderName.value.toUpperCase()+letter;
                            setTimeout(function(){cardHolderName.value=cardHolderName.value.toUpperCase();},150) 
                        }

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
        y=cardHolderName.value.toUpperCase()+letter2;
    }

    if (cardHolderName.value.length==25) {
        y=cardHolderName.value.toUpperCase();
    }

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

/*Card Number*/

charNumberList=["1","2","3","4","5","6","7","8","9","0"," "];

let renderNumberStatus="on"

function renderNumber(eventoNumber) {


    if (renderNumberStatus=="on") {
        cardNumberError.classList.remove("error");
        cardNumber.classList.remove("errorInput");
        
        if (eventoNumber.type=="click") {

            if (eventoNumber.target!=cardNumber) {
                if (cardNumber.value=="") {
                    cardNumberError.classList.add("error");
                    cardNumber.classList.add("errorInput");
                    cardNumberError.innerText="Can't be blank";
                }

                else if (cardNumber.value.length<19) {
                    cardNumberError.classList.add("error");
                    cardNumber.classList.add("errorInput");
                    cardNumberError.innerText="Incomplete data";
                }
            }
            setTimeout(function(){cardNumberValue.innerText=cardNumber.value;},1)
            document.addEventListener("click",renderNumber);
            cardHolderName.addEventListener("focus",renderNumber);
            dateMM.addEventListener("focus",renderNumber);
        }
        
        else if (eventoNumber.type=="focus") {
            if (eventoNumber.target!=cardNumber) {
                if (cardNumber.value=="") {
                    cardNumberError.classList.add("error");
                    cardNumber.classList.add("errorInput");
                    cardNumberError.innerText="Can't be blank";
                    
                }

                else if (cardNumber.value.length<19) {
                    cardNumberError.classList.add("error");
                    cardNumber.classList.add("errorInput");
                    cardNumberError.innerText="Incomplete data";
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
                        
                        if (cardNumber.value.length==19) {
                            cardNumberValue.innerText=cardNumber.value;
                        }

                        else if (cardNumber.value.length==3 || cardNumber.value.length==8 || cardNumber.value.length==13) {
                            setTimeout(function(){cardNumber.value=cardNumber.value+" ";},1)
                            cardNumberValue.innerText=cardNumber.value+number;
                        }
                        
                        else {
                            cardNumberValue.innerText=cardNumber.value+number;
                        }

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

    if (cardNumber.value.length==19) {
        yNumber=cardNumber.value
    }

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

/*Card Date MM*/

charDateMMList=["1","2","3","4","5","6","7","8","9","0"];

let renderDateMMStatus="on"

function renderDateMM(eventoDateMM) {


    if (renderDateMMStatus=="on") {
        dateMMError.classList.remove("error");
        dateMM.classList.remove("errorInput");
        
        if (eventoDateMM.type=="click") {

            if (eventoDateMM.target!=dateMM) {
                if (dateMM.value=="") {
                
                    dateMM.classList.add("errorInput");
                
                    if (dateYYError.classList=="inactive") {
                        dateMMError.classList.add("error");
                        dateMMError.innerText="Can't be blank";
                    }  
                }

                else if (dateMM.value.length==1) {
                    dateMM.value="0"+dateMM.value
                    dateMMValue.innerText=dateMM.value
                }

                if (dateMM.value>12 || dateMM.value=="00") {
                    
                    dateMM.classList.add("errorInput");
                    dateMMError.classList.add("error");
                    dateMMError.innerText="Invalid date";
    
                }
            }
            setTimeout(function(){dateMMValue.innerText=dateMM.value;},1)
            document.addEventListener("click",renderDateMM);
            cardNumber.addEventListener("focus",renderDateMM);
            dateYY.addEventListener("focus",renderDateMM);
        }
        
        
        else if (eventoDateMM.type=="focus") {

            if (eventoDateMM.target!=dateMM) {
                if (dateMM.value=="") {
                    
                    dateMM.classList.add("errorInput");
                    
                    if (dateYYError.classList=="inactive") {
                        dateMMError.classList.add("error");
                        dateMMError.innerText="Can't be blank";
                    }  
                }
                else if (dateMM.value.length==1) {
                    dateMM.value="0"+dateMM.value
                    dateMMValue.innerText=dateMM.value
                }

                if (dateMM.value>12 || dateMM.value=="00") {
                        
                    dateMM.classList.add("errorInput");
                    dateMMError.classList.add("error");
                    dateMMError.innerText="Invalid date";

                }
            }    
            setTimeout(function(){dateMMValue.innerText=dateMM.value;},1)
            document.addEventListener("click",renderDateMM);
            cardNumber.addEventListener("focus",renderDateMM);
            dateYY.addEventListener("focus",renderDateMM);
        }


        else {
            dateM = eventoDateMM.key;

            if (dateM=="Backspace") {
                setTimeout(function(){dateMMValue.innerText=dateMM.value;},1)
            }
    
            else {
                for (charDateMM of charDateMMList) {
                
                    if (dateM==charDateMM) {
                        
                        if (dateMM.value.length==2) {
                            dateMMValue.innerText=dateMM.value;
                        }
                        
                        else {
                            dateMMValue.innerText=dateMM.value+dateM;
                        }

                    }
                }
            }
        }        

    }
    else {
        
        dateMM.classList.add("errorInput");
        
        if (dateYYError.classList=="inactive") {
        
            dateMMError.classList.add("error");
            dateMMError.innerText="Wrong format, numbers only";
        }

    }
}

function testDateMM(eventoDateMM2) {
    zDateMM=[];
    dateM2= eventoDateMM2.key;
    
    if (dateM2=="Backspace") {
        yDateMM=dateMM.value.substr(0,dateMM.value.length-1)

        if (yDateMM=="") {
            renderDateMMStatus="on";
        }
    }
    
    else if (dateM2=="Tab") {
        yDateMM=dateMM.value.substr(0,dateMM.value.length-3)
    }
    else {
        yDateMM=dateMM.value+dateM2;
    }

    if (dateMM.value.length==2) {
        yDateMM=dateMM.value
    }

    for (iDateMM of yDateMM) {
        xDateMM=charDateMMList.indexOf(iDateMM)
        zDateMM.push(xDateMM)
        
        if (zDateMM.indexOf(-1)==-1) {
            renderDateMMStatus="on";
        }
        else {
            renderDateMMStatus="of";
        }
    
    }
}

/*Card Date YY*/

charDateYYList=["1","2","3","4","5","6","7","8","9","0"];

let renderDateYYStatus="on"

function renderDateYY(eventoDateYY) {


    if (renderDateYYStatus=="on") {
        dateYYError.classList.remove("error");
        dateYY.classList.remove("errorInput");
        
        if (eventoDateYY.type=="click") {

            if (eventoDateYY.target!=dateYY) {
                if (dateYY.value=="") {
                    
                    dateYY.classList.add("errorInput");
                
                    if (dateMMError.classList=="inactive") {
                        
                        dateYYError.classList.add("error");
                        dateYYError.innerText="Can't be blank";
                    }
                }

                else if (dateYY.value.length==1) {
                    dateYY.value="0"+dateYY.value
                    dateYYValue.innerText=dateYY.value
                }

            }
            setTimeout(function(){dateYYValue.innerText=dateYY.value;},1)
            document.addEventListener("click",renderDateYY);
            dateYY.addEventListener("focus",renderDateYY);
            cardCode.addEventListener("focus",renderDateYY);
        }
        
        
        else if (eventoDateYY.type=="focus") {
            if (eventoDateYY.target!=dateYY) {
                if (dateYY.value=="") {
                    
                    dateYY.classList.add("errorInput");
                    
                    if (dateMMError.classList=="inactive") {
                        
                        dateYYError.classList.add("error");
                        dateYYError.innerText="Can't be blank";
                    }

                    
                }
                else if (dateYY.value.length==1) {
                    dateYY.value="0"+dateYY.value
                    dateYYValue.innerText=dateYY.value
                }
            }
            setTimeout(function(){dateYYValue.innerText=dateYY.value;},1)
            document.addEventListener("click",renderDateYY);
            dateYY.addEventListener("focus",renderDateYY);
            cardCode.addEventListener("focus",renderDateYY);
        }


        else {
            dateY = eventoDateYY.key;

            if (dateY=="Backspace") {
                setTimeout(function(){dateYYValue.innerText=dateYY.value;},1)
            }
    
            else {
                for (charDateYY of charDateYYList) {
                
                    if (dateY==charDateYY) {
                        
                        if (dateYY.value.length==2) {
                            dateYYValue.innerText=dateYY.value;
                        }
                        
                        else {
                            dateYYValue.innerText=dateYY.value+dateY;
                        }

                    }
                }
            }
        }        

    }
    else {
        
        dateYY.classList.add("errorInput");

        if (dateMMError.classList=="inactive") {
            dateYYError.classList.add("error");
            dateYYError.innerText="Wrong format, numbers only";
        }
    }
}

function testDateYY(eventoDateYY2) {
    zDateYY=[];
    dateY2= eventoDateYY2.key;
    
    if (dateY2=="Backspace") {
        yDateYY=dateYY.value.substr(0,dateYY.value.length-1)

        if (yDateYY=="") {
            renderDateYYStatus="on";
        }
    }
    
    else if (dateY2=="Tab") {
        yDateYY=dateYY.value.substr(0,dateYY.value.length-3)
    }
    else {
        yDateYY=dateYY.value+dateY2;
    }

    if (dateYY.value.length==2) {
        yDateYY=dateYY.value
    }

    for (iDateYY of yDateYY) {
        xDateYY=charDateYYList.indexOf(iDateYY)
        zDateYY.push(xDateYY)
        
        if (zDateYY.indexOf(-1)==-1) {
            renderDateYYStatus="on";
        }
        else {
            renderDateYYStatus="of";
        }
    
    }
}

/*Card Code*/

charCodeList=["1","2","3","4","5","6","7","8","9","0"];

let renderCodeStatus="on"

function renderCode(eventoCode) {


    if (renderCodeStatus=="on") {
        cardCodeError.classList.remove("error");
        cardCode.classList.remove("errorInput");
        
        if (eventoCode.type=="click") {

            if (eventoCode.target!=cardCode) {
                if (cardCode.value=="") {
                    cardCodeError.classList.add("error");
                    cardCode.classList.add("errorInput");
                    cardCodeError.innerText="Can't be blank";
                }

                else if (cardCode.value.length<3) {
                    cardCodeError.classList.add("error");
                    cardCode.classList.add("errorInput");
                    cardCodeError.innerText="Incomplete data";
                }
            }
            setTimeout(function(){cardCodeValue.innerText=cardCode.value;},1)
            document.addEventListener("click",renderCode);
            confirmButton.addEventListener("focus",renderCode);
            dateYY.addEventListener("focus",renderCode);
        }
        
        else if (eventoCode.type=="focus") {
            if (eventoCode.target!=cardCode) {
                if (cardCode.value=="") {
                    cardCodeError.classList.add("error");
                    cardCode.classList.add("errorInput");
                    cardCodeError.innerText="Can't be blank";
                    
                }

                else if (cardCode.value.length<3) {
                    cardCodeError.classList.add("error");
                    cardCode.classList.add("errorInput");
                    cardCodeError.innerText="Incomplete data";
                }
            }
            setTimeout(function(){cardCodeValue.innerText=cardCode.value;},1)
            document.addEventListener("click",renderCode);
            confirmButton.addEventListener("focus",renderCode);
            dateYY.addEventListener("focus",renderCode);
        }


        else {
            code= eventoCode.key;

            if (code=="Backspace") {
                setTimeout(function(){cardCodeValue.innerText=cardCode.value;},1)
            }
    
            else {
                for (charCode of charCodeList) {
                
                    if (code==charCode) {
                        
                        if (cardCode.value.length==3) {
                            cardCodeValue.innerText=cardCode.value;
                        }
                        
                        else {
                            cardCodeValue.innerText=cardCode.value+code;
                        }

                    }
                }
            }
        }        

    }
    else {
        cardCodeError.classList.add("error");
        cardCode.classList.add("errorInput");
        cardCodeError.innerText="Wrong format, numbers only";
    }
}

function testCode(eventoCode2) {
    zCode=[];
    code2= eventoCode2.key;
    
    if (code2=="Backspace") {
        yCode=cardCode.value.substr(0,cardCode.value.length-1)

        if (yCode=="") {
            renderCodeStatus="on";
        }
    }
    
    else if (code2=="Tab") {
        yCode=cardCode.value.substr(0,cardCode.value.length-3)
    }
    else {
        yCode=cardCode.value+code2;
    }

    if (cardCode.value.length==3) {
        yCode=cardCode.value
    }

    for (iCode of yCode) {
        xCode=charCodeList.indexOf(iCode)
        zCode.push(xCode)
        
        if (zCode.indexOf(-1)==-1) {
            renderCodeStatus="on";
        }
        else {
            renderCodeStatus="of";
        }
    
    }
}

/*Confirm*/

function confirm() {
   
    if (cardHolderNameError.classList=="inactive" && cardNumberError.classList=="inactive" && dateMMError.classList=="inactive" && dateYYError.classList=="inactive" && cardCodeError.classList=="inactive" && cardHolderName.value!="" && cardNumber.value!="" && dateMM.value!="" && dateYY.value!="" && cardCode.value!="") {
        
        sectionForm.innerText="";
        sectionForm.classList.remove("form");
        sectionForm.classList.add("formComplete");

       
        checkLogo=document.createElement("img");
        checkLogo.setAttribute("src","./images/icon-complete.svg");
        checkLogo.setAttribute("alt","check");
        checkLogo.setAttribute("class","checkLogo")
        sectionForm.appendChild(checkLogo);

        title=document.createElement("h1");
        title.innerText="THANK YOU!"
        sectionForm.appendChild(title);

        text=document.createElement("p");
        text.innerText="We've added your card details";
        sectionForm.appendChild(text)

        continueButton=document.createElement("input");
        continueButton.setAttribute("type","submit");
        continueButton.setAttribute("class","button");
        continueButton.setAttribute("value","Continue");
        sectionForm.appendChild(continueButton);


    }

    else {
        if (cardHolderName.value=="") {
            cardHolderNameError.classList.add("error");
            cardHolderName.classList.add("errorInput");
            cardHolderNameError.innerText="Can't be blank";
        }

        if (cardNumber.value=="") {
            cardNumberError.classList.add("error");
            cardNumber.classList.add("errorInput");
            cardNumberError.innerText="Can't be blank";
        }

        if (dateMM.value=="") {
            dateMMError.classList.add("error");
            dateMM.classList.add("errorInput");
            dateMMError.innerText="Can't be blank";
        }

        if (dateYY.value=="") {
            dateMMError.classList.add("error");
            dateYY.classList.add("errorInput");
            dateMMError.innerText="Can't be blank";
        }

        if (cardCode.value=="") {
            cardCodeError.classList.add("error");
            cardCode.classList.add("errorInput");
            cardCodeError.innerText="Can't be blank";
        }
    }

}