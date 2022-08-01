// * Główna tablica użytkowników.
const users = [
	{ name: "name5", email: "email@gmail.com" },
	{ name: "name6", email: "email1@gmail.com" },
	{ name: "name4", email: "email2@gmail.com" },
	{ name: "name3", email: "email3@gmail.com" },
	{ name: "name2", email: "email4@gmail.com" },
	{ name: "name1", email: "email5@gmail.com" },
];

users.find((user) => user.email.includes("@") || user.name.includes("@"));

users.some((user) => user.email.includes("@") || user.name.includes("@"));

users.every((user) => user.email.includes("@") || user.name.includes("@"));

users.findIndex((user) => user.email.includes("@") || user.name.includes("@"));

users.indexOf((user) => user.email.includes("@") || user.name.includes("@"));

users.lastIndexOf(
	(user) => user.email.includes("@") || user.name.includes("@"),
);

users.filter((user) => !user.email.includes("@") && !user.name.includes("@"));
