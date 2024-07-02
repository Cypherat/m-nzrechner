const coinImages = {
    200: '2-euro.png',
    100: '1-euro.png',
    50: '50-cent.png',
    20: '20-cent.png',
    10: '10-cent.png',
    5: '5-cent.png',
    2: '2-cent.png',
    1: '1-cent.png'
};

const coins = [200, 100, 50, 20, 10, 5, 2, 1];

function getMinimumCoins(amount) {
    const result = {};
    for (const coin of coins) {
        if (amount >= coin) {
            result[coin] = Math.floor(amount / coin);
            amount %= coin;
        }
    }
    return result;
}

function calculateChange() {
    const amountInput = document.getElementById('amount').value;
    if (amountInput === '' || isNaN(amountInput) || amountInput <= 0) {
        alert('Bitte geben Sie einen gültigen Betrag ein.');
        return;
    }
    const amountInCents = Math.round(parseFloat(amountInput) * 100);
    const result = getMinimumCoins(amountInCents);
    displayResult(result);
}

function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<h2>MINIMALE Anzahl an benötigten Münzen:</h2>';
    for (const coin in result) {
        if (result[coin] > 0) {
            resultDiv.innerHTML += `
                <div class="coin">
                    <img src="images/${coinImages[coin]}" alt="${coin / 100}€ Münze">
                    <p>${coin / 100}€: ${result[coin]} Stück</p>
                </div>
            `;
        }
    }
}
