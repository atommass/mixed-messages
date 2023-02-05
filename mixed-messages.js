console.log("Here's your most unfunny joke of the day!");

// FIRST JOKE OPTION!
// 1st random number generator
const randomNumToFive = () => {
    const randToFive = Math.floor((Math.random() * 5) + 1);
    return randToFive;
}

// returns the name of random number
const randomNoNamer = () => {
    randomThingNo = randomNumToFive();
    switch (randomThingNo) {
        case 1: 
            return 'One';
        case 2: 
            return 'Two';
        case 3: 
            return 'Three';
        case 4: 
            return 'Four';
        case 5: 
            return 'Five';
    }
}

console.log(randomNoNamer());