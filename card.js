let cardHolderName=document.getElementById("cardHolderName");
let cardHolderNameValue=document.getElementById("cardHolderNameValue");


cardHolderName.addEventListener("keydown",render)

function render() {
    console.log(cardHolderName.value);
    console.log(cardHolderNameValue.textContent);
    cardHolderNameValue.innerText=cardHolderName.value;
}