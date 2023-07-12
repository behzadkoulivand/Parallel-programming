const express = require('express');

const app = express();

// Synchronous
const task1 = () => {
    let i = 10000000000;
    let j = 0;
    while(j < i){
        j++;
    }

    console.log("task1 is running");
};

const task2 = () => {
    console.log("task2 is running");
};

task1();
task2();

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})