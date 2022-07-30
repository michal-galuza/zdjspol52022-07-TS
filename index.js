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

const usersElements = element.querySelectorAll(".user__p");

usersElements.forEach(user => {
    if (user.textContent === "Jack") {
        user.replaceWith("Hello world");
    }
})


// getUsers().forEach(user => {
//     console.log(user);
// });


// const newTag = document.createElement("p"); // To tworzy nowy element który nie jest do niczego przypisany
// newTag.textContent = "HELLO"

// const newTagTwo = document.createElement("p");
// newTagTwo.textContent = "HELLO"

// element.appendChild(newTag); // To dodaje element do innego elementu
// element.appendChild(newTagTwo);