const quotes = [
    "Seja a mudança que você quer no mundo. - Gandhi",
    "Para ter sucesso, suas atitudes devem ser maiores que suas desculpas. - Jeffrey Gitomer",
    "Acredite em si mesmo e tudo será possivel. - Anônimo",
    "A melhor maneira de prever o futuro é criá-lo. - Peter Drucker",
];

function generateQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.style.opacity = 0;
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteElement.innerText = quotes[randomIndex];
        quoteElement.style.opacity = 1;
    }, 300);
}

function addCustomQuote() {
    const newQuoteInput = document.getElementById("new-quote");
    const newQuote = newQuoteInput.value.trim();
    
    if (newQuote) {
        quotes.push(newQuote);
        newQuoteInput.value = '';
        alert("Nova frase adicionada com sucesso!");
    } else {
        alert("Por favor, digite uma frase válida.");
    }
}

function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    navigator.clipboard.writeText(quoteText).then(() => {
        const message = document.getElementById("copy-message");
        message.style.display = "block";
        setTimeout(() => {
            message.style.display = "none";
        }, 2000);
    });
}



function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

}