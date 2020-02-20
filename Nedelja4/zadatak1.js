let pokemon1 = {
    ime: 'pikacu',
    vrsta: 'elektricni',
    sposobnosti:['staticki elektricitet'],
    karakteristike: {
        napad: 55,
        odbrana: 30,
        brzina: 90,
    }
};

let pokemon2 = {
    ime: 'vaniliti',
    vrsta: 'led',
    sposobnosti: ['ledeno telo'],
    karakteristike: {
        napad: 30,
        odbrana: 20,
        brzina: 30,
    }
};

let pokemon3 = {
    ime: 'petilil',
    vrsta: 'trava',
    sposobnosti: ['povecava brzinu na suncu', 'sprecava zabunu'],
    karakteristike: {
        napad: 20,
        odbrana: 20,
        brzina: 20,
    }
};

let pokemon4 = {
    ime: 'doublade',
    vrsta: 'celicni',
    sposobnosti: ['osigurava pokemone od napada'],
    karakteristike: {
        napad: 60,
        odbrana: 60,
        brzina: 25,
    }
};

let pokemoni = [pokemon1, pokemon2, pokemon3, pokemon4];
console.log(pokemoni);
