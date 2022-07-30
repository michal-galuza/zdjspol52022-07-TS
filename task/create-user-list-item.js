export const createUserListItem = (user, isRed, isSecondUser) => {
	const userElement = document.createElement("div");
	if (isSecondUser) {
		userElement.style.width = "100px";
		userElement.style.height = "100px";
		userElement.style.background = "black";
		return userElement;
	}
	if (isRed) {
		userElement.style.color = "red";
	}

	const userNameElement = document.createElement("p");
	userNameElement.textContent = user.name;

	const userEmailElement = document.createElement("p");
	userEmailElement.textContent = user.email;

	userElement.append(userNameElement, userEmailElement);
	return userElement;
};
