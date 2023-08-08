var height = 6;
var width = 5;

var row = 0;    //current guess
var column = 0; //current letter

var gameOver = false;

var wordlist = ["about", "alert", "argue", "beach", "above", "alike", "arise", "began", "abuse", "alive", "array", "begin", "actor", "allow", "aside", "begun", "acute", "alone", "asset", "being", "admit", "along", "audio", "below", "adopt", "alter", "audit", "bench", "adult", "among", "avoid", "billy", "after", "anger", "award", "birth", "again", "angle", "aware", "black", "agent", "angry", "badly", "blame", "agree", "apart", "baker", "blind", "ahead", "apple", "bases", "block", "alarm", "apply", "basic", "blood", "album", "arena", "basis", "board", "boost", "buyer", "china", "cover", "booth", "cable", "chose", "craft", "bound", "calif", "civil", "crash", "brain", "carry", "claim", "cream", "brand", "catch", "class", "crime", "bread", "cause", "clean", "cross", "break", "chain", "clear", "crowd", "breed", "chair", "click", "crown", "brief", "chart", "clock", "curve", "bring", "chase", "close", "cycle", "broad", "cheap", "coach", "daily", "broke", "check", "coast", "dance", "brown", "chest", "could", "dated", "build", "chief", "count", "dealt", "built", "child", "court", "death", "debut", "entry", "forth", "group", "delay", "equal", "forty", "grown", "depth", "error", "forum", "guard", "doing", "event", "found", "guess", "doubt", "every", "frame", "guest", "dozen", "exact", "frank", "guide", "draft", "exist", "fraud", "happy", "drama", "extra", "fresh", "harry", "drawn", "faith", "front", "heart", "dream", "false", "fruit", "heavy", "dress", "fault", "fully", "hence", "drill", "fibre", "funny", "night", "drink", "field", "giant", "horse", "drive", "fifth", "given", "hotel", "drove", "fifty", "glass", "house", "dying", "fight", "globe", "human", "eager", "final", "going", "ideal", "early", "first", "grace", "image", "earth", "fixed", "grade", "index", "eight", "flash", "grand", "inner", "elite", "fleet", "grant", "input", "empty", "floor", "grass", "issue", "enemy", "fluid", "great", "irony", "enjoy", "focus", "green", "juice", "enter", "force", "gross", "joint", "judge", "metal", "media", "newly", "known", "local", "might", "noise", "label", "logic", "minor", "north", "large", "loose", "minus", "noted", "laser", "lower", "mixed", "novel", "later", "lucky", "model", "nurse", "laugh", "lunch", "money", "occur", "layer", "lying", "month", "ocean", "learn", "magic", "moral", "offer", "lease", "major", "motor", "often", "least", "maker", "mount", "order", "leave", "march", "mouse", "other", "legal", "music", "mouth", "ought", "level", "match", "movie", "paint", "light", "mayor", "needs", "paper", "limit", "meant", "never", "party", "peace", "power", "radio", "round", "panel", "press", "raise", "route", "phase", "price", "range", "royal", "phone", "pride", "rapid", "rural", "photo", "prime", "ratio", "scale", "piece", "print", "reach", "scene", "pilot", "prior", "ready", "scope", "pitch", "prize", "refer", "score", "place", "proof", "right", "sense", "plain", "proud", "rival", "serve", "plane", "prove", "river", "seven", "plant", "queen", "quick", "shall", "plate", "sixth", "stand", "shape", "point", "quiet", "roman", "share", "pound", "quite", "rough", "sharp", "sheet", "spare", "style", "times", "shelf", "speak", "sugar", "tired", "shell", "speed", "suite", "title", "shift", "spend", "super", "today", "shirt", "spent", "sweet", "topic", "shock", "split", "table", "total", "shoot", "spoke", "taken", "touch", "short", "sport", "taste", "tough", "shown", "staff", "taxes", "tower", "sight", "stage", "teach", "track", "since", "stake", "teeth", "trade", "sixty", "start", "texas", "treat", "sized", "state", "thank", "trend", "skill", "steam", "theft", "trial", "sleep", "steel", "their", "tried", "slide", "stick", "theme", "tries", "small", "still", "there", "truck", "smart", "stock", "these", "truly", "smile", "stone", "thick", "trust", "smith", "stood", "thing", "truth", "smoke", "store", "think", "twice", "solid", "storm", "third", "under", "solve", "story", "those", "undue", "sorry", "strip", "three", "union", "sound", "stuck", "threw", "unity", "south", "study", "throw", "until", "space", "stuff", "tight", "upper", "upset", "whole", "waste", "wound", "urban", "whose", "watch", "write", "usage", "woman", "water", "wrong", "usual", "train", "wheel", "wrote", "valid", "world", "where", "yield", "value", "worry", "which", "young", "video", "worse", "while", "youth", "virus", "worst", "white", "worth", "visit", "would", "vital", "voice"];
var guessList = ["about", "alert", "argue", "beach","adapt", "above", "alike", "arise", "began", "abuse", "alive", "array", "begin", "actor", "allow", "aside", "begun", "acute", "alone", "asset", "being", "admit", "along", "audio", "below", "adopt", "alter", "audit", "bench", "adult", "among", "avoid", "billy", "after", "anger", "award", "birth", "again", "angle", "aware", "black", "agent", "angry", "badly", "blame", "agree", "apart", "baker", "blind", "ahead", "apple", "bases", "block", "alarm", "apply", "basic", "blood", "album", "arena", "basis", "board", "boost", "buyer", "china", "cover", "booth", "cable", "chose", "craft", "bound", "calif", "civil", "crash", "brain", "carry", "claim", "cream", "brand", "catch", "class", "crime", "bread", "cause", "clean", "cross", "break", "chain", "clear", "crowd", "breed", "chair", "click", "crown", "brief", "chart", "clock", "curve", "bring", "chase", "close", "cycle", "riden","broad", "cheap", "coach", "daily", "broke", "check", "coast", "dance", "brown", "chest", "could", "dated", "build", "chief", "count", "dealt", "built", "child", "court", "death", "debut", "entry", "forth", "group", "delay", "equal", "forty", "grown", "depth", "error", "forum", "guard", "doing", "event", "found", "guess", "doubt", "every", "frame", "guest", "dozen", "exact", "frank", "guide", "draft", "exist", "fraud", "happy", "drama", "extra", "fresh", "harry", "drawn", "faith", "front", "heart", "dream", "false", "fruit", "heavy", "dress", "fault", "fully", "hence", "drill", "fibre", "funny", "night", "drink", "field", "giant", "horse", "drive", "fifth", "given", "hotel", "drove", "fifty", "glass", "house", "dying", "fight", "globe", "human", "eager", "final", "going", "ideal", "early", "first", "grace", "image", "earth", "fixed", "grade", "index", "eight", "flash", "grand", "inner", "elite", "fleet", "grant", "input", "empty", "floor", "grass", "issue", "enemy", "fluid", "great", "irony", "enjoy", "focus", "green", "juice", "enter", "force", "gross", "joint", "judge", "metal", "media", "newly", "known", "local", "might", "noise", "label", "logic", "minor", "north", "large", "loose", "minus", "noted", "laser", "lower", "mixed", "novel", "later", "lucky", "model", "nurse", "laugh", "lunch", "money", "occur", "layer", "lying", "month", "ocean", "learn", "magic", "moral", "offer", "lease", "major", "motor", "often", "least", "maker", "mount", "order", "leave", "march", "mouse", "other", "legal", "music", "mouth", "ought", "level", "match", "movie", "paint", "light", "mayor", "needs", "paper", "limit", "meant", "never", "party", "peace", "power", "radio", "round", "panel", "press", "raise", "route", "phase", "price", "range", "royal", "phone", "pride", "rapid", "rural", "photo", "prime", "ratio", "scale", "piece", "print", "reach", "scene", "pilot", "prior", "ready", "scope", "pitch", "prize", "refer", "score", "place", "proof", "right", "sense", "plain", "proud", "rival", "serve", "plane", "prove", "river", "seven", "plant", "queen", "quick", "shall", "plate", "sixth", "stand", "shape", "point", "quiet", "roman", "share", "pound", "quite", "rough", "sharp", "sheet", "spare", "style", "times", "shelf", "speak", "sugar", "tired", "shell", "speed", "suite", "title", "shift", "spend", "super", "today", "shirt", "spent", "sweet", "topic", "shock", "split", "table", "total", "shoot", "spoke", "taken", "touch", "short", "sport", "taste", "tough", "shown", "staff", "taxes", "tower", "sight", "stage", "teach", "track", "since", "stake", "teeth", "trade", "sixty", "start", "texas", "treat", "sized", "state", "thank", "trend", "skill", "steam", "theft", "trial", "sleep", "steel", "their", "tried", "slide", "stick", "theme", "tries", "small", "still", "there", "truck", "smart", "stock", "these", "truly", "smile", "stone", "thick", "trust", "smith", "stood", "thing", "truth", "smoke", "store", "think", "twice", "solid", "storm", "third", "under", "solve", "story", "those", "undue", "sorry", "strip", "three", "union", "sound", "stuck", "threw", "unity", "south", "study", "throw", "until", "space", "stuff", "tight", "upper", "upset", "whole", "waste", "wound", "urban", "whose", "watch", "write", "usage", "woman", "water", "wrong", "usual", "train", "wheel", "wrote", "valid", "world", "where", "yield", "value", "worry", "which", "young", "video", "worse", "while", "youth", "virus", "worst", "white", "worth", "visit", "would", "vital", "voice"];

guessList=guessList.concat(wordlist);
var word = wordlist[Math.floor(Math.random() * wordlist.length)].toUpperCase();
// The Math.random() function generates a random floating-point number between 0 (inclusive) and 1 (exclusive).

console.log(word);

window.onload = function () {  // when the web page is fully loaded, the initialize() function will be called, and any code inside that function will be executed. The purpose of this setup could be to perform some setup tasks, initialize variables, bind event listeners, or start some processes after the page has loaded and is ready to interact with JavaScript
    initialize();
}

function initialize() {
    // board row
    for (let r = 0; r < height; r++) {
        // column  
        for (let c = 0; c < width; c++) {
            let tile = document.createElement("span"); //html element creation //<span> It's often used to wrap a small piece of text or other inline elements. // One of the main purposes of <span> is to apply CSS styles to specific portions of text or inline content. By adding a class or inline styles to a <span> element, you can target and style that specific part of the content.
            tile.id = r.toString() + "-" + c.toString();   //Each created span element is assigned an id attribute based on its row and column indices. 
            tile.classList.add("tile");  //The classList.add("tile") method is used to add the CSS class "tile" to the span element. This is likely done to apply styling or positioning to the tile element using CSS.
            tile.innerText = " ";
            document.getElementById("board").appendChild(tile);
        }
    }

    // Keyboard
    let keyboard = [["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", ""],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "⌫"]];

    for (let i = 0; i < keyboard.length; i++) {
        let currentRow = keyboard[i];
        let keyBoardRow = document.createElement("div");
        keyBoardRow.classList.add("keyboard-row");

        for (let j = 0; j < currentRow.length; j++) {
            let keyTile = document.createElement("div");
            
            let key = currentRow[j];
            keyTile.innerText = key;
            if (key == "Enter") {
                keyTile.id = "Enter";

            }
            else if (key == "⌫") {
                keyTile.id = "Backspace";
            }
            else if ("A" <= key && key <= "Z") {
                keyTile.id = "key" + key;
            }
            keyTile.addEventListener("click", processKey);

            if (key == "Enter") {
                keyTile.classList.add("enter-key-tile");
            }
            else {
                keyTile.classList.add("key-tile");
            }
            keyBoardRow.appendChild(keyTile);
        }
        document.body.appendChild(keyBoardRow);
    }
    document.addEventListener("keyup", (e) => {          //"keyup" events (key releases).
        processInput(e);
    })
}
//the this keyword refers to the element that triggered the event, in this case, the key tile that was clicked. The id property of the clicked element (key tile) is assigned as the value of the "code" property in the event object.
function processKey() {
    e = {
        "code": this.id
    };
    processInput(e);
}

function processInput(e) {
    if (gameOver) return;
    if ("keyA" <= e.code && e.code <= "keyZ") {
        if (column < width) {
            let currentTile = document.getElementById(row.toString() + "-" + column.toString());
            if (currentTile.innerText == "") {
                currentTile.innerText = e.code[3];
                column += 1;
            }
        }
    }
    else if (e.code == "Backspace") {
        if (0 < column && column <= width) {
            column -= 1;
        }
        let currentTile = document.getElementById(row.toString() + "-" + column.toString());
        currentTile.innerText = "";
    }
    else if (e.code == "Enter") {
        update();
    }

    if (!gameOver && row == height) {
        gameOver = true;
        document.getElementById("ans").innerText = word;
    }

}

function update() {
    let guess = "";
    document.getElementById("ans").innerText = "";

    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currentTile.innerText;
        guess += letter;
    }
    guess = guess.toLowerCase();
    console.log(guess);

    if (!guessList.includes(guess)) {
        document.getElementById("ans").innerText = "Not in word list";
        return;
    }
    let correct = 0;
    let lettercount = {};
    /* if (lettercount[letter]) { ... } else { ... }: This conditional statement checks if the current letter exists as a property in the lettercount object. If it does, it means the letter has been encountered before in the loop.
If the letter already exists in the lettercount object:

lettercount[letter] += 1;: This increments the value of the letter's property in the lettercount object by 1. This effectively counts the occurrence of the letter.
If the letter does not exist in the lettercount object:

lettercount[letter] = 1;: This sets the value of the letter's property in the lettercount object to 1, indicating the first occurrence of the letter. */
    for (let i = 0; i < word.length; i++) {
        let letter = word[i];
        if (lettercount[letter]) {
            lettercount[letter] += 1;
        }
        else {
            lettercount[letter] = 1;
        }
    }
    console.log(lettercount);
    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString() + "-" + c.toString());
        let letter = currentTile.innerText;

        if (word[c] == letter) {
            currentTile.classList.add("correct");

            let keyTile = document.getElementById("key" + letter);
            keyTile.classList.remove("present");
            keyTile.classList.add("correct");
            
            correct += 1;
            lettercount[letter] -= 1;
        }
        if (correct == width) {
            gameOver = true;
        }
    }
    console.log(lettercount);

    for (let c = 0; c < width; c++) {
        let currentTile = document.getElementById(row.toString()+ "-" + c.toString());
        let letter = currentTile.innerText;

        if (!currentTile.classList.contains("correct")) {
            if (word.includes(letter) && lettercount[letter] > 0) {
                currentTile.classList.add("present");

                let keyTile = document.getElementById("key" + letter);
                if (!keyTile.classList.contains("correct")) {
                    keyTile.classList.add("present");
                }
                lettercount[letter] -= 1;
            }
            else {
                currentTile.classList.add("absent");
                let keyTile = document.getElementById("key" + letter);
                keyTile.classList.add("absent");
            }
        }
    }
    row += 1;
    column = 0;
}