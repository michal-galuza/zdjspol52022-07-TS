for (let i = 0; i < 3; i++) {
	console.log(i);
}

let it = 0;

while (it < 3) { // * Do póki zostanie spełniony warunek w nawiasach będzie się wykonywać it++ oraz console.log
	it++;
	console.log(it);
}

const usersListEl = document.querySelector(".users_list"); //* Wyciąganie elementu listy

while (usersListEl.firstChild) {
	// * Do póki w elemencie jest pierwsze dziecko, usuwaj ostanie dziecko.
	usersListEl.removeChild(usersListEl.lastChild);
}


// * Ta pętla robi to samo co while powyżej 
for (let i = 0; i < usersListEl.childNodes.length; i++) {
	usersListEl.removeChild(usersListEl.firstChild);
}
