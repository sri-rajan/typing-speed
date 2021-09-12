//words for the sentence
const random_words = ['hi', 'how', 'are', 'you', 'can', 'i', 'help', 'you', 'dog', 'plane', 'man', 'example', 'super', 'power', 'god', 'once', 'upon', 'a', 'time', 'there', 'are', 'many', 'people', 'through', 'question', 'python', 'snake', 'what', 'you', 'want', 'father', 'mother', 'sister', 'brother', 'cancer', 'living', 'by', 'his', 'video', 'games', 'past', 'to', 'die', 'but', 'ball', 'most', 'generous', 'soul', 'would', 'call', 'his', 'life', 'lucky', 'winning', 'dying', 'adulthood']

//names for document elements
const typingarea =document.getElementById("typespace");
const replaybutton = document.getElementById("replay");
const contentText = document.getElementById("contentText");
const timer = document.getElementById("timer");
const typing = document.getElementById("typespace");

//eventlistener for replay button
replaybutton.addEventListener("click",replays);


//changin sentence in content
function changeContent(){
    sentence();
}

//create a sentence of random words
function sentence(){
    for(let i=0;i<=20;i++){
        let spans = document.createElement('span');
        spans.id ="val"+i;
        contentText.appendChild(spans);
        let spanid = document.getElementById("val"+i);
        spanid.innerText =random_words[Math.floor(Math.random()*55)]+" ";
    }
}

//replay button function -reload and start the timer
function replays(){
    countdowns(3);    
    setTimeout(()=>{
        play()
        typing.focus();
        typing.select();
    },3000);
    setTimeout(() => {
        timer.innerText="play";
        countdowns(60);
    }, 3000);

}

//typing area - to get value and remove value
function spacecheck(){
    document.addEventListener('keyup',event =>{
        if (event.code=="Space"){
            alert(typingarea.value);
        }
    })

}

//for countdown
function countdowns(totaltime){
    let time = setInterval(function(){
        if(totaltime<=0 ) clearInterval(time);
        timer.innerText=totaltime;
        totaltime--;
    },1000);
}

//game function after start
function play(){
    changeContent();
    spacecheck();
}

//for checking the value of the word
function checkword(){
    
}




