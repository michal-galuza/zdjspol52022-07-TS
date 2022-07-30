const myFunc = (id) => `user${id}`;

const myFuncOne = (id) => {
    console.log(this) // Wyświetli window albo global.
    return `user${id}`;
}

function myFunction(id) {
    console.log(this) // Wyświetli tą funkcję.
    return `user${id}`;
}

// * Zwrócą to samo 
myFunc("X");
myFuncOne("X");
myFunction("X"); 