function merci() {
    let sujet = (document.getElementById("sujet").value);
    let resultat = "";

    if (sujet) {
        resultat = "Merci! " + sujet + " sera pris en considération";


    }
    document.getElementById("resultat").textContent = resultat;
}