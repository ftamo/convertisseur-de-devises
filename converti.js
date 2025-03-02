// Tableau contenant les taux de change entre différentes devises
const exchangeRates = {
    USD: { EUR: 0.85, XOF: 600, CNY: 6.45 }, // Taux de change pour le Dollar
    EUR: { USD: 1.18, XOF: 655, CNY: 7.55 }, // Taux de change pour l'Euro
    XOF: { USD: 0.0017, EUR: 0.0015, CNY: 0.011 }, // Taux de change pour le Franc CFA
    CNY: { USD: 0.16, EUR: 0.13, XOF: 90 } // Taux de change pour le Yuan Chinois
};

// Fonction de conversion de devise
function convertCurrency() {
    // Récupération du montant à convertir
    const amount = document.getElementById("amount").value;
    
    // Récupération des devises de départ et d'arrivée depuis les menus déroulants
    const from = document.getElementById("fromCurrency").value;
    const to = document.getElementById("toCurrency").value;

    // Vérification si un taux de change existe pour les devises sélectionnées
    if (!exchangeRates[from] || !exchangeRates[from][to]) {
        // Affichage d'un message d'erreur si la conversion est impossible
        document.getElementById("result").textContent = "Conversion impossible";
        return; // Arrêt de la fonction en cas d'erreur
    }

    // Récupération du taux de change pour les devises sélectionnées
    const rate = exchangeRates[from][to];
    
    // Calcul du montant converti et arrondi à deux décimales
    const convertedAmount = (amount * rate).toFixed(2);

    // Affichage du résultat sous la forme "montant converti devise"
    document.getElementById("result").textContent = `${convertedAmount} ${to}`;
}
