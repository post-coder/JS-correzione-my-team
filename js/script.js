/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/


const membri = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO	",
    foto: "wayne-barnett-founder-ceo.jpg"
  },

  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
  },

  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
  },

  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
  },

  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
  },

];


const listElement = document.getElementById("list");

// stampiamo in console la lista dei membri con tutte le loro proprietà


// Stampare le stesse informazioni su DOM sottoforma di stringhe

// ____________________________________________
// MILESTONE 2:
// for(let i = 0; i < membri.length; i++) {
//   // ad ogni iterazione ho un nuovo OGGETTO dell'array

//   // creo un elemento <li> e lo appendo alla lista 
//   let newElement = document.createElement("li");
//   listElement.append(newElement);

//   // mi salvo il membro corrente a cui siamo arrivati nell'array
//   let membroCorrente = membri[i];




//   // ciclare tutte le proprietà di un oggetto
//   for(let chiaveDelMembroCorrente in membroCorrente) {

//     // inserisco il testo dentro l'elemento lista, ricordiamoci dell'operatore += se non vogliamo sovrascrivere ogni volta il testo, cancellandone il contenuto precedentemente inserito
//     newElement.innerHTML += `${chiaveDelMembroCorrente}: ${membroCorrente[chiaveDelMembroCorrente]}<br>`;

//   }

// }
// ____________________________________________



// BONUS 1 e 2

const cardsContainerElement = document.getElementById("cards-container");

for(let i = 0; i < membri.length; i++) {
  // ad ogni iterazione ho un nuovo OGGETTO dell'array

  // creo un elemento <li> e lo appendo alla lista 
  let newCardElement = document.createElement("div");
  newCardElement.classList.add("card");
  cardsContainerElement.append(newCardElement);

  // mi salvo il membro corrente a cui siamo arrivati nell'array
  let membroCorrente = membri[i];


  // creo l'elemento del nome
  let titleElement = document.createElement("div");
  titleElement.classList.add("title");
  titleElement.innerText = membroCorrente.nome;
  
  // creo l'elemento del ruolo
  let roleElement = document.createElement("div");
  roleElement.classList.add("role");
  roleElement.innerText = membroCorrente.ruolo;

  // creo l'elemento dell'immagine
  let imageElement = document.createElement("img");
  imageElement.classList.add("image");
  imageElement.src = "img/" + membroCorrente.foto;


  
  // appendo tutti gli elementi
  newCardElement.append(imageElement);
  newCardElement.append(titleElement);
  newCardElement.append(roleElement);

}