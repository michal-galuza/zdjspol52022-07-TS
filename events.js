const button = document.querySelector("my_button");

const handleOnClick = (e) => {
	console.log(e);
};

const handleOnSubmit = (e) => {};

button.addEventListener("fullscreenchange", handleOnClick);// * Deklaracja eventu

const form = document.createElement("form");

form.addEventListener("submit", (e) => { // * Deklaracja eventu
	e.preventDefault();
});

form.addEventListener("change", (e) => {
	e.target[0].value;
});

form.removeEventListener("change", () => {});


button.onclick = (e)=>{console.log(e)}; // * Deklaracja eventu
button.onclick = null;
