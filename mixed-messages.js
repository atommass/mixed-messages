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

// 
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
for (let i = 0; i < 15; i++) {
    console.log(generateRandomThing(randomNoNamer()));
}