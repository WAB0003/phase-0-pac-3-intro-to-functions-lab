function shout (string) {
    return string.toUpperCase();
}

function whisper (string) {
    return string.toLowerCase()
}

function logShout (string){
    console.log (string.toUpperCase())
}

function logWhisper (string){
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string){
    let allUps, allLows, specPhrase, answer;

    allUps = string === string.toUpperCase()
    allLows = string === string.toLowerCase()
    specPhrase = string === "Let's have dinner together!"
    
    if (specPhrase){
      answer = "I would love to!";
    } else if (allUps){
      answer = "YES INDEED!"
    } else if (allLows){
      answer = "I can't hear you!"
    }
    else {
      answer = "does not fall in categories listed"
    }
     
    console.log(answer)
}