const element = document.createElement("div");
element.append("1", "2", "3");

const elements = element.querySelectorAll("*");

console.log("FOR EACH");
elements.forEach((el) => {
	console.log(el.textContent);
});

try {
	console.log("filter");
	[...elements].filter((el) => {
		console.log(el.textContent);
	});
} catch {}

try {
	[...elements].map((el) => {
		console.log(el.textContent);
	});
} catch {}

console.log("for");
for (let i = 0; i < elements.length; i++) {
	console.log(elements[i].textContent);
}

console.log("for in");
for (const el in elements) {
	console.log(el.textContent);
}

// * Referencje typów prostych oraz złożonych.
let a = "b";
let x = a;
x += "c";

console.log(a, x);

let b = { c: "x" };
console.log("Przed zmianą", b);
let c = { ...b };

c.c = "a";
console.log("Po zmianie", b);
