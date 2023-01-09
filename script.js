const url = "https://blockchain.info/ticker";


async function recupererPrix() {
    const requete = await fetch(url, {
        method: "GET"
    });
    // console.log(requete);

    if (!requete.ok) {
        console.log("Un probleme est survenu ! ");

    } else {
        let donnees = await requete.json();
        // console.log(donnees);
        document.getElementById("price_label").textContent = donnees.EUR.last;

    }


}

setInterval(recupererPrix, 1000);
