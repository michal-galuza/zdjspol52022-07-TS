const element = document.querySelector(".my_div");

const getUsers = () => ["Jack", "Jhon", "Adam"];
const getObj = () => ({ b: 'b' });


// * iteracja tablicy
// * utworznie elementu 
// * dodaj kontent do elementu
// * zapisz element w divie

const users = getUsers().map(user => {
    const userElement = document.createElement("p");
    userElement.classList.add("user__p");
    userElement.textContent = user;
    userElement.style.color = "red";
    return userElement
})

element.append(...users, "Hello");


usersElements.forEach(user => {
    if (user.textContent === "Jack") {
        user.replaceWith("Hello world");
    }
})


"dasdas".replace((?: [a - z0 - 9!#$ %& '*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]) , "myWord")










// getUsers().forEach(user => {
//     console.log(user);
// });


// const newTag = document.createElement("p"); // To tworzy nowy element który nie jest do niczego przypisany
// newTag.textContent = "HELLO"

// const newTagTwo = document.createElement("p");
// newTagTwo.textContent = "HELLO"

// element.appendChild(newTag); // To dodaje element do innego elementu
// element.appendChild(newTagTwo);