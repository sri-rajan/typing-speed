//words for the sentence
const random_words = ['hi', 'how', 'are', 'you', 'can', 'i', 'help', 'you', 'dog', 'plane', 'man', 'example', 'super', 'power', 'god', 'once', 'upon', 'a', 'time', 'there', 'are', 'many', 'people', 'through', 'question', 'python', 'snake', 'what', 'you', 'want', 'father', 'mother', 'sister', 'brother', 'cancer', 'living', 'by', 'his', 'video', 'games', 'past', 'to', 'die', 'but', 'ball', 'most', 'generous', 'soul', 'would', 'call', 'his', 'life', 'lucky', 'winning', 'dying', 'adulthood']

//eventlistener for replay button
document.getElementById("replay").addEventListener("click",replays);


let words = sentence();
let words_place = document.getElementById("contentText");
words_place.innerText = words;

//create a sentence of random words
function sentence(){
    content = random_words[Math.floor(Math.random()*55)];
    for(let i=0;i<20;i++){
        content += " " + random_words[Math.floor(Math.random()*55)];
    }
    return content
}

//replay button function -reload and start the timer
function replays(){
    document.addEventListener('keyup',event =>{
        if (event.code=="Space"){
            alert(event.code);
            setTimeout(play,5000);
        }
    })
}

function play(){
    alert("start, playing")
}




