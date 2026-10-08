let nombreSecret = Math.floor(Math.random() * 100) + 1;
let compteurEssais = 0;

while (true) {
    let nombreJoueur = prompt("Entrez un nombre entre 1 et 100 :");

    compteurEssais++;

    if (isNaN(nombreJoueur)) {
        alert("Ce n'est pas valide");
        continue;
    }

    nombreJoueur = Number(nombreJoueur);

    if (nombreJoueur < nombreSecret) {
        alert("C'est PLUS grand !");
    } 
    else if (nombreJoueur > nombreSecret) {
        alert("C'est PLUS petit !");
    } 
    else {
        alert("Bravo ! Vous avez trouvé le nombre secret !");
        alert("Nombre d'essais : " + compteurEssais);
        break;
    }
}