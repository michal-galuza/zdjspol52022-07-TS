const set = new Set(); // Wszystkie wartości w set muszą być unikalne

// * Dodawanie wartości;
set.add(1);

// * Sprawdzanie czy posiada wartość
set.has(1); // * Zwróci true

// * Usuwanie wartości
set.delete(1);

// * Rozmiar
set.size;

// * Usuwanie wszystkiego
set.clear();

// * Inicjalizacja z wartościami
new Set(["val", 1, 19]);

// * Iteracja po set
set.forEach((item) => {});

// * Porównanie Set z tablicą
const arr = [1, 2, 3];

// * Sprawdzanie czy istnieje dana wartość
arr.find((item) => item === 1);
arr.findIndex((item) => item === 1);
arr.indexOf(1);
arr.some((item) => item === 1);

// * Usuwanie elementu z tablicy.
const index = arr.indexOf(5);
if (index > -1) {
	// only splice array when item is found
	array.splice(index, 1); // 2nd parameter means remove one item only
}

// * Odczytywanie rozmiaru tablic
arr.length;

// * Czyszczenie tablicy
arr.splice(0, arr.length);
