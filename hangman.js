//this is the javascript file to hangman.html
//event listeners
var startButton = document.getElementById("start");
startButton.addEventListener("click", startGame);

var gameNotStart = true;

var guessesRemaining = document.getElementById("guessesRemaining");
var guessesRemainingNum = 0;

//all of the letters' event listeners
var a = document.getElementById("a");
a.addEventListener("click", guessLetter);

var b = document.getElementById("b");
b.addEventListener("click", guessLetter);

var c = document.getElementById("c");
c.addEventListener("click", guessLetter);

var d = document.getElementById("d");
d.addEventListener("click", guessLetter);

var e = document.getElementById("e");
e.addEventListener("click", guessLetter);

var f = document.getElementById("f");
f.addEventListener("click", guessLetter);

var g = document.getElementById("g");
g.addEventListener("click", guessLetter);

var h = document.getElementById("h");
h.addEventListener("click", guessLetter);

var i = document.getElementById("i");
i.addEventListener("click", guessLetter);

var j = document.getElementById("j");
j.addEventListener("click", guessLetter);

var k = document.getElementById("k");
k.addEventListener("click", guessLetter);

var l = document.getElementById("l");
l.addEventListener("click", guessLetter);

var m = document.getElementById("m");
m.addEventListener("click", guessLetter);

var n = document.getElementById("n");
n.addEventListener("click", guessLetter);

var o = document.getElementById("o");
o.addEventListener("click", guessLetter);

var p = document.getElementById("p");
p.addEventListener("click", guessLetter);

var q = document.getElementById("q");
q.addEventListener("click", guessLetter);

var r = document.getElementById("r");
r.addEventListener("click", guessLetter);

var s = document.getElementById("s");
s.addEventListener("click", guessLetter);

var t = document.getElementById("t");
t.addEventListener("click", guessLetter);

var u = document.getElementById("u");
u.addEventListener("click", guessLetter);

var v = document.getElementById("v");
v.addEventListener("click", guessLetter);

var w = document.getElementById("w");
w.addEventListener("click", guessLetter);

var x = document.getElementById("x");
x.addEventListener("click", guessLetter);

var y = document.getElementById("y");
y.addEventListener("click", guessLetter);

var z = document.getElementById("z");
z.addEventListener("click", guessLetter);
//list of words
var easyWords = ["acres","adult","advice","arrangement","brick","coach","cookies","damage","depth","doll","film"];
var mediumWords = ["junk", "scared", "treated", "simplest", "university", "vessels", "tune", "slope"];
var hardWords = ["jazz", "buzzer", "mugginess", "shabbiness", "beekeeping", "jives", "cozy", "quipping"];

var letters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];

var wordArray = [];
var word = "";

//functions

function startGame()
{
	//start game
	gameNotStart = false;

	//clear old guess word
	var guessWord = document.getElementById("wordToGuess");
	guessWord.innerHTML = "";

	//clear guesses remaining
	guessesRemaining.innerHTML = guessesRemaining.innerHTML.substring(0, 18);

	//make letters visible again
	for (var i = 0; i < letters.length; i++)
	{
		if (letters[i].style.visibility == "hidden")
		{
			letters[i].style.visibility = "initial";
		}
	}

	//get selected difficulty
	var difficultyNumber = document.getElementById("difficulty").selectedIndex;
	var difficulty = document.getElementById("difficulty").options[difficultyNumber].text;

	//randomly select word from chosen difficulty
	//alert(" difficulty: " + difficulty);

	var percent = Math.random();
	var wordIndex = 0;

	if (difficulty == "Easy")
	{
		wordIndex = Math.ceil(percent * easyWords.length) - 1;
		word = easyWords[wordIndex];
		guessesRemainingNum = 5;
	}

	if (difficulty == "Medium")
	{
		wordIndex = Math.ceil(percent * mediumWords.length) - 1;
		word = mediumWords[wordIndex];
		guessesRemainingNum = 4;
	}

	if (difficulty == "Hard")
	{
		wordIndex = Math.ceil(percent * hardWords.length) - 1;
		word = hardWords[wordIndex];
		guessesRemainingNum = 3;
	}

	guessesRemaining.innerHTML += " " + guessesRemainingNum;

	//alert("The word is: " + word + " and index is: " + wordIndex);

	//put up blanks for each letter of the word

	//alert("Word length: " + word.length);

	for (var i = 0; i < word.length; i++)
	{
		wordArray[i] = "__ ";
		guessWord.innerHTML += wordArray[i];
	}
}

function guessLetter()
{
	//if game hasn't started, don't guess
	if (gameNotStart)
	{
		return;
	}


	var letterGuess = this.innerHTML;

	//alert("The word is: " + word);
	var notFound = true;

	for (var i = 0; i < word.length; i++)
	{
		if(letterGuess == word.substring(i, i + 1).toUpperCase())
		{
			wordArray[i] = " " + letterGuess + " ";
			notFound = false;
		}
	}

	if(notFound)
	{
		guessesRemainingNum--;
		guessesRemaining.innerHTML = guessesRemaining.innerHTML.substring(0,18) + " " + guessesRemainingNum;
	}

	//clear guessWord's innerHTML
	var guessWord = document.getElementById("wordToGuess");
	guessWord.innerHTML = "";

	for (var i = 0; i < word.length; i++)
	{
		guessWord.innerHTML += wordArray[i];
	}

	this.style.visibility = "hidden";

	//when word is completely guessed
	var finalWord = guessWord.innerHTML.replace(/\s+/g, '');
	if (finalWord == word.toUpperCase())
	{
		gameNotStart = true;
		gameOver(true);
	}
	if (guessesRemainingNum == 0)
	{
		gameNotStart = true;
		gameOver(false);
	}
} 

function gameOver(success)
{
	if(success)
	{
		alert("you won!");
	}
	else
	{
		alert("you lost :(");
	}
}