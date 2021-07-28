// Code your solutions in this file

function writeCards(names, event) {
    const messages = [];
    let tempMessage;
    for (let i = 0; i < names.length; i++) {
        tempMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(tempMessage);
    }
    return messages;
}

// console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday")); 

function countDown(n) {
    if (n > 0) {
        for (let i = n; i >= 0; i--) {
            console.log(i);
        }
    }
}

// countDown(15);

/*
PRACTICE

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    // debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        // debugger;
    }
    return gifts;
}

wrapGifts(gifts);

*/