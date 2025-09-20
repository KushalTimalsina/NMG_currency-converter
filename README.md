---
# NMG Currency Converter

A simple, responsive, and fully functional currency converter built using **HTML**, **CSS**, and **vanilla JavaScript**. The app fetches **real-time currency exchange rates** from the **ExchangeRate API** and allows users to convert amounts between multiple currencies.
---

## Features

- Responsive, clean, and easy-to-use interface
- Enter an amount to convert
- Select **source currency** and **target currency** from dropdowns
- Default conversion: **USD → NPR**
- Real-time exchange rates fetched from ExchangeRate API
- Display converted amount clearly after conversion
- Handle invalid inputs and network errors gracefully
- Users can change currencies freely

---

## Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Edge, Safari)
- Internet connection (to fetch exchange rates)
- ExchangeRate API key ([Get it here](https://www.exchangerate-api.com/))

---

### Installation

1. Clone the repository

```bash
git clone https://github.com/KushalTimalsina/NMG_currency-converter.git
```

2. Navigate to the project folder

```bash
cd NMG_currency-converter
```

3. Open `index.html` in your browser

---

### File Structure

```
NMG_currency-converter/
│
├── index.html        # HTML structure
├── style.css         # Styling and responsive design
├── script.js         # JavaScript logic for fetching and converting currencies
└── README.md         # Project documentation
```

---

## How to Use

1. Enter the amount you want to convert
2. By default, the conversion is **USD → NPR**
3. Optionally, select a different **From** and **To** currency
4. Click the **Convert** button
5. The converted amount will appear below the button
6. Errors such as invalid input or network issues will be displayed in red

---

## JavaScript Overview

- Fetches currency rates from the ExchangeRate API using your API key
- Populates dropdown menus with available currencies
- Calculates conversion:

```javascript
convertedAmount = amount * rate;
```

- Updates the DOM with the converted amount
- Handles errors gracefully

---

### Example

If you enter:

- Amount: `100`
- From: `USD`
- To: `NPR`

Result:

```
100 USD = 14,000 NPR
```

_(Rate will vary depending on the real-time API response)_

---

## Customization

- Change the default currencies:

```javascript
fromCurrency.value = "USD";
toCurrency.value = "NPR";
```

- Change styling in `style.css`

---

## Dependencies

- HTML, CSS, JavaScript (vanilla)
- ExchangeRate API ([https://www.exchangerate-api.com/](https://www.exchangerate-api.com/))

---

## License

This project is free to use and modify.
