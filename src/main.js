// create the possible strings for the message in three parts

const firstStringArray = ["Don't count your chickens ", "It's not over ", "We'll cross that bridge ", "Tonight we're gonna party ", "As right ", "It's always darkest ", "Make hay ", 
  "You can lead a horse to water ", "You can't make an omelette ", "You can catch more flies with honey ", "Out of the frying pan ", "It's a poor workman ", "Shape up ", "Once bitten ",
  "Don't put all your eggs in one basket ", "Don't give up your day job ", "Do unto others ", "Look before you leap ", "Take a rain check ", "Take it with a grain of salt ",
  "The early bird gets the worm ", "There are other fish in the sea "
  
];

const secondStringArray = ["until ", "until ", "when ", "like ", "as ", "before ", "while ", "but ", "then ", "and ", "who ", "or ", "as "];

const thirdStringArray = ["they are hatched.", "the fat lady sings.", "we get to it.", "it's nineteen ninety nine.", "it's raining cats and dogs.", "it has it's dawn.", "the sun shines.", 
  "You can't make it drink from it.", "you can catch with vinegar.", "into the frying pan.", "blames his tools.", "that ship has sailed.", "ship out.", "we see eye to eye.", "twice shy.", "on cloud nine.",
  "no stone is unturned.", "you get a taste of your own medicine.", "you would have them do to you.", "it's a piece of cake.", "you go on a wild goose chase.", "you live and learn.",
  "the ball is in your court.", "you spill the beans.", "rain on someone's parade.", "you throw caution to the wind."
];


// create variables for the three sections

const firstString = document.getElementById('first-string');
const secondString = document.getElementById('second-string');
const thirdString = document.getElementById('third-string');

// make the section contain a random string from it's relative array

firstString.innerHTML = firstStringArray[Math.floor(Math.random() * firstStringArray.length)];
secondString.innerHTML = secondStringArray[Math.floor(Math.random() * secondStringArray.length)];
thirdString.innerHTML = thirdStringArray[Math.floor(Math.random() * thirdStringArray.length)];

console.log(firstString.innerHTML + secondString.innerHTML + thirdString.innerHTML);


// create a set of background colors to use in a color changing function

const colorArray = ['black', 'white', 'gray', 'green', 'yellow', 'blue', 'darkslategrey', 'darkgray', 'burlywood', 'darksalmon'];

const body = document.querySelector('body');
body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];

// create an array of border styles

const borderArray = ['solid', 'double', 'groove', 'ridge', 'inset', 'outset'];
const border = document.getElementById('border');
border.style.borderStyle = borderArray[Math.floor(Math.random() * borderArray.length)];



