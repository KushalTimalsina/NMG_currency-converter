const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');
const errorDiv = document.getElementById('error');

const API_KEY = '502eecd8442d7b20cfa9b1be';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

// Fetch currency codes on load
window.addEventListener('load', () => {
    fetch(API_URL + 'USD')
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.conversion_rates);
        populateDropdown(fromCurrency, currencies);
        populateDropdown(toCurrency, currencies);

        // Set default currencies
        fromCurrency.value = 'USD';
        toCurrency.value = 'NPR'; // NRS is 'NPR' in ExchangeRate API
    })
    .catch(err => {
        errorDiv.textContent = "Failed to load currency list. Check your network.";
    });
});

function populateDropdown(dropdown, currencies) {
    currencies.forEach(currency => {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        dropdown.appendChild(option);
    });
}

convertBtn.addEventListener('click', () => {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    errorDiv.textContent = '';
    resultDiv.textContent = '';

    if (isNaN(amount) || amount <= 0) {
        errorDiv.textContent = 'Enter a valid amount';
        return;
    }

    if (!from || !to) {
        errorDiv.textContent = 'Select both currencies';
        return;
    }

    fetch(`${API_URL}${from}`)
    .then(response => response.json())
    .then(data => {
        if (!data.conversion_rates[to]) {
            errorDiv.textContent = 'Conversion not available';
            return;
        }
        const rate = data.conversion_rates[to];
        const convertedAmount = (amount * rate).toFixed(2);
        resultDiv.textContent = `${amount} ${from} = ${convertedAmount} ${to}`;
    })
    .catch(err => {
        errorDiv.textContent = 'Error fetching conversion rate. Check your network.';
    });
});
