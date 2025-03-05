import { useState, useEffect } from "react";
import { getExchangeRate } from "../api";

const CurrencyConverter = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    // Inicializa a lista de moedas disponíveis
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setCurrencies(Object.keys(data.rates)));
  }, []);

  const handleConvert = async () => {
    if (amount <= 0) {
      alert("Insira um valor válido.");
      return;
    }
    const rate = await getExchangeRate(fromCurrency, toCurrency);
    setConvertedAmount(amount * rate);
  };

  return (
    <div className="converter">
      <h2>Conversor de Moedas</h2>
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <div className="input-group">
        <span></span>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>{currency}</option>
          ))}
        </select>
      </div>

      <button onClick={handleConvert}>Converter</button>

      {convertedAmount !== null && (
        <h3>
          {amount} {fromCurrency} = {convertedAmount.toFixed(2)} {toCurrency}
        </h3>
      )}
    </div>
  );
};

export default CurrencyConverter;
