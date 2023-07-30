import { useState } from "react";

const ConvertCurrency = () => {
    const [amount, setAmount] = useState(0);
    const usdRate = 0.018;

    const handleChange = (event) => {
        setAmount(event.target.value);
    };

    const resetCounter = () => {
        setAmount(0);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const convertedAmount = amount * usdRate;
        alert("Amount in USD: " + convertedAmount.toFixed(2));
    };

    return (
        <div className="currency_converter h-full  gap-5 shadow p-4 bg-white rounded">
            <div className="converter">
                Amount:
                <input
                    type="number"
                    className="amount border border-gray-300 rounded px-2 py-1 ml-2"
                    value={amount}
                    onChange={handleChange}
                />
                Currency:{" "}
                <textarea
                    value="PHP to USD"
                    readOnly
                    className="currency border border-gray-300 rounded px-2 py-1 ml-2"
                />
            </div>
            <div className="flex mt-4">
                <button className="btn btn-light m-1 rounded border border-dark-subtle shadow-md px-4 py-2" onClick={resetCounter}>
                    Reset
                </button>
                <button className="btn btn-dark m-1 rounded border border-dark-subtle shadow-md px-4 py-2" onClick={handleSubmit}>
                    Convert
                </button>
            </div>
        </div>
    );
};

export default ConvertCurrency;
