export const createUserEl = (user, isRed) => {
	const userEl = document.createElement("div"); // * Tworzy element użytkownika do którego będziemy przyspiać paragrafy

	if (isRed) {
		userEl.style.color = "red";
	}

	const userEmailEl = document.createElement("p"); // * Tworzy paragraf jeden
	const userNameEl = document.createElement("p"); // * Tworzy paragraf 2

	userNameEl.textContent = user.name; // * Dodaje text to paragrafu
	userEmailEl.textContent = user.email; // * Dodaje text to paragrafu

	userEl.append(userNameEl, userEmailEl); // * Dodaje paragrafy do elementu

	return userEl;
};

export const createUserListElements = (
	users, // * Funkcja która na podstawie tablicy tworzy tablice childrens
) =>
	users.map((user, index) => createUserEl(user, index % 2 === 0, index === 1));
