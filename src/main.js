// create the possible strings for the message in three parts

const firstStringArray = ["Don't count your chickens ", "It's not over ", "We'll cross that bridge ", "Tonight we're gonna party ", "As right ", "It's always darkest ", "Make hay ", 
  'You can lead a horse to water, ', "You can't make an omelette ", "You can catch more flies with honey ", "Out of the frying pan ", "It's a poor workman ", "Shape up ", "Once bitten ",

];

const secondStringArray = ["until ", "until ", "when ", "like ", "as ", "before ", "while ", "but ", "then ", "and ", "who ", "or "];

const thirdStringArray = ["they are hatched.", "the fat lady sings.", "we get to it.", "it's nineteen ninety nine.", "it's raining cats and dogs.", "it has it's dawn.", "the sun shines.", 
  "You can't make it drink from it", "you can catch with vinegar.", "into the frying pan.", "blames his tools.", "that ship has sailed.", "ship out.", "we see eye to eye.", "twice shy.", "on cloud nine.",
  "no stone is unturned"
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
