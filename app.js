//1 (3 BODA)
//Napisi funkciju koja ispisuje parne brojeve od 0 do 100 (ukljucujuci 100)

const jeLiParni = () => {

    for (let i = 0; i <= 100 ; i++) {

        if(i % 2 === 0 && i !== 0) {
            console.log(i);

        }

    }

}

// jeLiParni();

//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u dan u tjednu. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Ponedjeljak";
//INPUT: 5; OUTPUT: "Petak"; 

const kojiJeDan = (redniBrojDana) => {

    switch (redniBrojDana) {
        case 1:
            console.log("Ponedjeljak");
            break;

        case 2:
            console.log("Utorak");
            break;

        case 3:
            console.log("Srijeda");
            break;

        case 4:
            console.log("Četvrtak");
            break;

        case 5:
            console.log("Petak");
            break;

        case 6:
            console.log("Subota");
            break;

        case 7:
            console.log("Nedjelja");
            break;
        
        default:
            console.log("Invalid number!");
            break;
    }

}

const redniBrojDana = 2;
// kojiJeDan(redniBrojDana);

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere ne uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao";
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 35)

const preokrenutiString = (ulaznaRecenica) => {

    let revUlaznaRecenica = '';
    let brojac = 0;

    for (let i = ulaznaRecenica.length - 1; i >= 0; i--) {

        revUlaznaRecenica = revUlaznaRecenica.concat(ulaznaRecenica[i]);

        if(ulaznaRecenica[i] !== ' ') {
            brojac++;
        }
    }

    console.log(revUlaznaRecenica, ", ", brojac);
}

const ulaznaRecenica = "Pisanje zadataka nije jednostavan posao";
// preokrenutiString(ulaznaRecenica);

//4 (4 BODA)
//Napisi funkciju koja vraca najkraci kljuc u danom objektu
const somePeople = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}

const najkraciKljuc = (somePeople) => {

    let duzinaKljuca = 100;
    let najduziKljuc = '';

    for (const key in somePeople) {

        if(key.length < duzinaKljuca) {

            najduziKljuc = somePeople[key];

        }

    }

    console.log(najduziKljuc);
}

// najkraciKljuc(somePeople);
// neznam accessati ime kljuca

//INPUT: somePeople
//OUTPUT: "Ada"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca proste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [3, 5, 11]

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja kvadrira i vraca dane inpute
//INPUT: [2, 4, 6, 0, 1]
//OUTPUT: [4, 16, 36, 0, 1]

const kvadrirajUlaz = (ulazniArray) => {

    let pomocniArray = [];

    for (const i of ulazniArray) {
        
        pomocniArray.push(i*i);

    }

    return pomocniArray;
}

const ulazniArray = [2, 4, 6, 0, 1];
// console.log(kvadrirajUlaz(ulazniArray));


//6 (4 BODA)
//Napisi funkciju koja vraca sve dogadaje koji su se dogodili prije od vrijednosti iz ulaznog parametra
const someEvents = [
    {
        eventName: "Izasla je Java",
        eventYear: 1995,
    },
    {
        eventName: "Izasao je C#",
        eventYear: 2000,
    },
    {
        eventName: "Izasao je Python",
        eventYear: 1991,
    },
    {
        eventName: "Izasao je C++",
        eventYear: 1985,
    },
    {
        eventName: "Izasao je JavaScript",
        eventYear: 1995,
    },
];

const eventoviPoslije = (someEvents, trazenaGodina) => {

    let noviArray =[];

    for (let i of someEvents) {

        if (i.eventYear < trazenaGodina) {
            
            noviArray.push(i);

        }

    }

    return noviArray;
}

const trazenaGodina = 1992;
// console.log(eventoviPoslije(someEvents, trazenaGodina));

//INPUT: (someEvents, 1992)
//OUTPUT: [{eventName: "Izasao je Python", eventYear: 1991}, {eventName: "Izasao je C++", eventYear: 1985}]