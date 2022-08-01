import {
	createUserEl,
	createUserListElements,
} from "./create-user-list-item.js";
import { users } from "./users.js";

const buttonForRemoveTwoLastUsersElement = document.querySelector(
	".button-for-remove-two-last-users",
);
const buttonSortUserByName = document.querySelector(".button-sort-by-name");
const buttonSortUserByEmail = document.querySelector(".button-sort-by-email");

const renderUserList = (users) => {
	// * Funkcja która renderuje listę użytkowników na podstawie przekazanej tablicy
	const usersListElement = document.querySelector(".users-list");
	
	while (usersListElement.firstChild) {
		usersListElement.removeChild(usersListElement.lastChild);
	}

	usersListElement.replaceChildren(...createUserListElements(users));
};

buttonForRemoveTwoLastUsersElement.addEventListener("click", () => {
	renderUserList(users.slice(0, -2));
});

buttonSortUserByName.addEventListener("click", () => {
	renderUserList(
		[...users].sort((userA, userB) => userA.email.localeCompare(userB.email)), // * Locale compare służy do porówywania stringów zwraca -1 0 1 które oznaczają że string jest mnieszy równy lub większy
	);
});

buttonSortUserByEmail.addEventListener("click", () => {
	renderUserList(
		[...users].sort((userA, userB) => userA.name.localeCompare(userB.name)),
	);
});

renderUserList(users);
