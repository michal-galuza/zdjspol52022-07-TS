const element = document.querySelector(".klasa_elementu");

const newChild = document.createElement("p"); // Tworzy element
newChild.textContent = "My Text" // Dodaje text do elementu

element.appendChild(newChild); // Dodaje dziecko do elementu

const newChild = document.createElement("p"); // Tworzy element
const newChildTwo = document.createElement("p"); // Tworzy element
const newChildThree = document.createElement("p"); // Tworzy element

element.append(newChild, newChildTwo, newChildThree) // Przypisuje wiele dzieci naraz do elementu