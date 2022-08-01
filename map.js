const usersMap = new Map(); // * Wszystkie klucze w Map muszą być unikalne

// * Dodawanie elementu do mapy
usersMap.set("user", { name: "Ja" });

// * Odczytywanie wartości z mapy
usersMap.get("key"); // * Zwróci  {name:"Ja"}

// * Usuwanie elementu z mapki
usersMap.delete("key"); // * Usunie daną wartość

// * Usuwa wszystko z mapy
usersMap.clear();

// * Odczytywanie długości Map
usersMap.size;

// * Iteracja po Map
usersMap.forEach(item=>{});

// * Inicjalizacja map z domyśnymi wartościami
const initMap = new Map([
	["key", "values"], // * Każda taka tablica to oddzielny klucz i wartość
	["key1", "values"],
	["key2", "values"],
]);

//* Porównanie Map z obiektem

const obj = {
	user: { name: "Ja" },
};

// * Odyczytwanie wartości
obj.user;

// * Usuwanie
const { user, ...rest } = obj;
const newObj = { ...rest };

// * Czyszczenie obiektu
const newObj2 = {};
