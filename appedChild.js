const element = document.querySelector(".klasa_elementu");

const newChild = document.createElement("p"); // Tworzy element

newChild.textContent = "My Text"; // Dodaje text do elementu

element.append(document.createTextNode("M")); // Dodaje text jako nowy node

element.appendChild(newChild); // Dodaje dziecko do elementu

// Tworzenie wielu elementów
const newChild = document.createElement("p"); // Tworzy element
const newChildTwo = document.createElement("p"); // Tworzy element
const newChildThree = document.createElement("p"); // Tworzy element

element.append(newChild, newChildTwo, newChildThree, ""); // Przypisuje wiele dzieci naraz do elementu
