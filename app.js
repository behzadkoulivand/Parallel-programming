const express = require('express');

const app = express();

// Synchronous
// const task1 = () => {
//     let i = 10000000000;
//     let j = 0;
//     while(j < i){
//         j++;
//     }

//     console.log("task1 is running");
// };

// const task2 = () => {
//     console.log("task2 is running");
// };

// task1();
// task2();

// Asynchronous
const task1 = () => {
    return new Promise((resolve, reject) => {
        let i = 1000000000;
        let j = 0;
        while (j < i) {
            j++;
        }
        resolve("task1 is running");
    });
};

const task2 = () => {
    return new Promise((resolve, reject) => {
        resolve("task2 is running");
    })
    
};

const tasks = [task1(), task2()];
Promise.all(tasks)
.then((res) =>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})