import { createUserListItem } from "./create-user-list-item.js";
import { users } from "./users.js";

const usersListElement = document.querySelector(".users-list");
const buttonForRemoveTwoLastUsersElement = document.querySelector(
	".button-for-remove-two-last-users",
);
const buttonSortUserByName = document.querySelector(".button-sort-by-name");
const buttonSortUserByEmail = document.querySelector(".button-sort-by-email");

const createUserListElements = (users) =>
	users.map((user, index) =>
		createUserListItem(user, index % 2 === 0, index === 1),
	);

const renderUserList = (users) => {
	usersListElement.replaceChildren(...createUserListElements(users));
};

buttonForRemoveTwoLastUsersElement.addEventListener("click", () => {
	renderUserList(users.slice(0, -2));
});

buttonSortUserByName.addEventListener("click", () => {
	renderUserList(
		[...users].sort((userA, userB) => userA.email.localeCompare(userB.email)),
	);
});

buttonSortUserByEmail.addEventListener("click", () => {
	renderUserList(
		[...users].sort((userA, userB) => userA.name.localeCompare(userB.name)),
	);
});

renderUserList(users);
