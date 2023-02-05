console.log("Here's your most unfunny joke of the day!");

// FIRST JOKE OPTION!
// 1st random number generator
const randomNumToFive = () => {
    const randToFive = Math.floor((Math.random() * 5) + 1);
    return randToFive;
}

// returns the name of random number
const randomNoNamer = () => {
    randomNo = randomNumToFive();
    switch (randomNo) {
        case 1: return 'One';
        case 2: return 'Two';
        case 3: return 'Three';
        case 4: return 'Four';
        case 5: return 'Five';
    }
}

let randomThingNo;
const generateRandomThing = randNoName => {
    randomThingNo = randomNumToFive();
    switch (randomThingNo) {
        case 1:
            if (randNoName === 'One') {
                return `${randNoName} Vampire`;
            } else {
                return `${randNoName} Vampires`;
            }
        case 2:
            if (randNoName === 'One') {
                return `${randNoName} Jew`;
            } else {
                return `${randNoName} Jews`;
            }
        case 3:
            if (randNoName === 'One') {
                return `${randNoName} Bartender`;
            } else {
                return `${randNoName} Bartenders`;
            }
        case 4: 
            if (randNoName === 'One') {
                return `${randNoName} Horse`;
            } else {
                return `${randNoName} Horses`;
            }
        case 5:
            if (randNoName === 'One') {
                return `${randNoName} Programmer`;
            } else {
                return `${randNoName} Programmers`;
            }
    }
    
} 

const firstLine = `${generateRandomThing(randomNoNamer())} walk into a bar,`;

var thingCount;
if (firstLine.includes('One')) {
    thingCount = 1;
} else if (firstLine.includes('Two')) {
    thingCount = 2;
} else if (firstLine.includes('Three')) {
    thingCount = 3;
} else if (firstLine.includes('Four')) {
    thingCount = 4;
} else if (firstLine.includes('Five')) {
    thingCount = 5;
} else {
    thingCount = 0;
}

const responses = [
    "It's hot in here.",
    "Shut your mouth!",
    "Bartender, how much do I owe you?",
    "We'd like a couple of beers, please.",
    "Is the bar tender here?",
    "You read my mind, buddy.",
    "I'm all ears!",
    "Want to hear a joke?",
    "Do you have any helicopter flavored potato chips?",
    "Boy, I wish I could do that."
];

const sequenceNumber = ['first', 'second', 'third', 'fourth', 'fifth'];

const whatBartenderSays = [
    "Sorry, we don't cater for functions.",
    "Hey. This is a singles bar.",
    "We don't serve time travelers in here.",
    "Okay, but don't start anything.",
    "We don't serve your type in here.",
    "Why the short face?",
    "Have you been served?",
    "How it's going?"
];

console.log(firstLine);
console.log();
for (let i = 0; i < thingCount; i++) {
    if (thingCount > 1) {
        console.log(`The ${sequenceNumber[i]} says: "${responses[Math.floor(Math.random() * responses.length)]}"`);
    } else {
        console.log(`And says: "${responses[Math.floor(Math.random() * responses.length)]}"`);
    }
}
console.log();
console.log(`The bartender says: "${whatBartenderSays[Math.floor(Math.random() * whatBartenderSays.length)]}"`);
// console.log(thingCount);
