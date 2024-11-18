"use strict";
console.clear();

/* 

Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*Bonus*
- Abbellire con CSS o Bootstrap
- Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
*/

/***********************************************************/

document.addEventListener("DOMContentLoaded", () => {
    // Il DOM è ora completamente caricato

    const list = document.getElementById("list");
    console.log(list);

    callMailApi();

    console.log('altre cose. ...')

    async function callMailApi(quantity = 10) {
        const arrayMail = [];

        for (let i = 0; i < quantity; i++) {
            await axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail").then((mail) => {
                    console.log(mail.data.response);
                    arrayMail.push(mail.data.response);
                });
        }

        console.log(arrayMail.length);
        console.log(arrayMail);

        for (let i = 0; i < arrayMail.length; i++) {
            /* const newListItem = document.createElement("li");
            newListItem.textContent = arrayMail[i];
            list.appendChild(newListItem); */
            list.innerHTML += `<li>${arrayMail[i]}</li>`;
        };
    }
});

