//words for the sentence
const random_words = ['hi', 'how', 'are', 'you', 'can', 'i', 'help', 'you', 'dog', 'plane', 'man', 'example', 'super', 'power', 'god', 'once', 'upon', 'a', 'time', 'there', 'are', 'many', 'people', 'through', 'question', 'python', 'snake', 'what', 'you', 'want', 'father', 'mother', 'sister', 'brother', 'cancer', 'living', 'by', 'his', 'video', 'games', 'past', 'to', 'die', 'but', 'ball', 'most', 'generous', 'soul', 'would', 'call', 'his', 'life', 'lucky', 'winning', 'dying', 'adulthood']

//names for document elements
const typingarea =document.getElementById("typespace");
const replaybutton = document.getElementById("replay");
const contentText = document.getElementById("contentText");
const timer = document.getElementById("timer");
const typing = document.getElementById("typespace");
const speed = document.getElementById("speed");
const no_of_words = document.getElementById("nowords");
const correct_words = document.getElementById("crtwords");
const wrong_words = document.getElementById("wrwords");
const noletters = document.getElementById("letters");

// score value
let score = 0;
let wrong = 0;
let total =0;
let totalletter =0;

//condition checker
let replaycheck = 1;


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
    document.getElementById('val0').classList.add("shows");
}

//replay button function -reload and start the timer
function replays(){
    if(replaycheck==1 ){
        replaycheck =2;
        countdowns(3);    
        setTimeout(()=>{
            play()
            typingarea.textContent="";
            typing.focus();
            typing.select();
        },3000);
        setTimeout(() => {
            timer.innerText="play";
            countdowns(60);
            setTimeout(final,60000);
        }, 3000);
        document.getElementById("content").style.backgroundColor = "darkgrey";
    }else if (replaycheck==3){
        replaycheck =2;
        countdowns(3);    
        setTimeout(()=>{
            changeContent();
            typingarea.textContent="";
            typing.focus();
            typing.select();
        },3000);
        setTimeout(() => {
            timer.innerText="play";
            countdowns(60);
            setTimeout(final,60000);
        }, 3000);
        document.getElementById("content").style.backgroundColor = "darkgrey";
    }else{
        alert("can't replay try refresh");
    }
}

//typing area - to get value and remove value
let place = 0;
let classplace = 1;
function spacecheck(){
    document.addEventListener('keyup',event =>{
        let spanvalue = document.getElementById('val'+place).textContent;
        if (event.code=="Space"){ 
            //to get total letters
            totalletter = totalletter+(spanvalue.length)-1;
            let spanids = document.getElementById('val'+classplace);
            spanids.classList.add("shows");
            place++;
            if(classplace<20){
            classplace++;
            }
            if (place>0){
                let removeplace = place-1;
                let spanidremove = document.getElementById("val"+removeplace);
                spanidremove.classList.remove("shows");
            }
            if (typingarea.value == spanvalue ){
                score++;
                total++;
            }else{
                wrong++;
                total++;
            }
            typingarea.value='';
            if (place>20){
                console.log("finish");
                changeContent();
                place=0;
                classplace=1;
            }
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

// to remove all values for replay
function deleteall(){
    score = 0;
    wrong = 0;
    total = 0;
    totalletter =0;
    place = 0;
    classplace = 1;

}

//last function for showing score 
function final(){
    speed.innerText = totalletter/5;
    noletters.innerText = totalletter;
    no_of_words.innerText = total;
    correct_words.innerHTML = score;
    wrong_words.innerHTML = wrong;
    deleteall();
    replaycheck =3;
    timer.innerText="stop";
    document.getElementById("content").style.backgroundColor = "red";
}






