random_words = ['hi', 'how', 'are', 'you', 'can', 'i', 'help', 'you', 'dog', 'plane', 'man', 'example', 'super', 'power', 'god', 'once', 'upon', 'a', 'time', 'there', 'are', 'many', 'people', 'through', 'question', 'python', 'snake', 'what', 'you', 'want', 'father', 'mother', 'sister', 'brother', 'cancer', 'living', 'by', 'his', 'video', 'games', 'past', 'to', 'die', 'but', 'ball', 'most', 'generous', 'soul', 'would', 'call', 'his', 'life', 'lucky', 'winning', 'dying', 'adulthood']


words_place = document.getElementById("contentText");


function random_word(){
    content = random_words[Math.floor(Math.random()*55)];
    
    return random_words[Math.floor(Math.random()*55)]
}

console.log(random_word());

