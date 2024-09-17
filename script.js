// http://api.quotable.io/random-----> quote generator api

let Mycontainer=document.getElementById('container')
const loader=document.getElementsByClassName("loader")[0]
function first(){
    Mycontainer.hidden=true;
    loader.hidden=false;
}
function second(){
    Mycontainer.hidden=false;
    loader.hidden=true;
}


const generatorBtn=document.getElementsByClassName("generator-btn")[0]
const myQuote=document.getElementById('quote')
const myAuthor=document.getElementById('author')
// click functionalit to generate quote from api
second()
generatorBtn.addEventListener("click",async function(){
    first()
    const response=await fetch('http://api.quotable.io/random');
    let quotes=await response.json();
    myQuote.innerText=quotes.content;
    myAuthor.innerText=quotes.author;
    second()
})


const copyBtn=document.getElementsByClassName("copy-btn")[0];
// copy functionality
copyBtn.addEventListener("click",function(){
    navigator.clipboard.writeText(myQuote.innerText)
})

const audioBtn=document.getElementsByClassName("audio-btn")[0];
// audio functionality
audioBtn.addEventListener('click', function(){
    const speech=new SpeechSynthesisUtterance(myQuote.innerText);
    speechSynthesis.speak(speech)
})