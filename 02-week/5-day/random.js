const fs = require('fs');

const stoods = fs
    .readFileSync("people.txt", "utf-8")
    .split("\n")
    .filter((el) => el !== "");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

function getStood(list){
    let idx = getRandomInt(0, list.length);
    return list[idx];
};


console.log(getStood(stoods));