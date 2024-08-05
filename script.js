function copyEmail() {
    // Seleziona l'input nascosto che contiene l'indirizzo email
    var emailInput = document.getElementById("email");
    
    // Seleziona il testo nell'input
    emailInput.select();
    emailInput.setSelectionRange(0, 99999); // Per dispositivi mobili

    // Copia il testo negli appunti
    document.execCommand("copy");

    // Mostra un messaggio di conferma (opzionale)
    alert("Email copiata: " + emailInput.value);
}
