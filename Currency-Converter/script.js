// Get elements
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("result");

// Store rates
let rates = {};

// List of currencies
const currencyList = ["USD","EUR","INR","GBP","JPY","AUD","CAD","CHF","CNY","SGD"];

// Fallback rates if API fails
const fallbackRates = {
  USD:1, EUR:0.92, INR:83.5, GBP:0.81, JPY:144, AUD:1.45, CAD:1.33, CHF:0.91, CNY:6.92, SGD:1.35
};

// Populate dropdowns
function populateDropdowns() {
  currencyList.forEach(curr => {
    let option1 = document.createElement("option");
    option1.value = curr;
    option1.textContent = curr;
    fromCurrency.appendChild(option1);

    let option2 = document.createElement("option");
    option2.value = curr;
    option2.textContent = curr;
    toCurrency.appendChild(option2);
  });

  fromCurrency.value = "USD";
  toCurrency.value = "INR";
}

// Fetch rates from API
function fetchRates() {
  resultDiv.textContent = "Loading rates...";
  fetch("https://api.exchangerate.host/latest?base=USD")
    .then(res => res.json())
    .then(data => {
      if (data && data.rates) {
        rates = data.rates;
        resultDiv.textContent = "";
      } else {
        throw new Error("Invalid API data");
      }
    })
    .catch(err => {
      console.log("API error:", err);
      rates = fallbackRates; // use fallback
      resultDiv.textContent = "Using fallback rates";
    });
}

// Convert function
function convertCurrency() {
  const amount = parseFloat(amountInput.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (isNaN(amount) || amount <= 0) {
    alert("Enter a valid amount");
    return;
  }

  if (!rates[from] || !rates[to]) {
    alert("Rates not available");
    return;
  }

  // Convert amount to USD first, then to target
  let amountInUSD = amount / rates[from];
  let converted = amountInUSD * rates[to];

  resultDiv.textContent = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}

// Initialize
populateDropdowns();
fetchRates();
convertBtn.addEventListener("click", convertCurrency);
