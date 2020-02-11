import React from "react";

const CurrencyRow = props => {
    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props;

    return (
        <div>
            <input
                type="number"
                className="input"
                value={amount}
                onChange={onChangeAmount}
            />
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map((option, index) => (
                    <option value={option} key={index}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencyRow;
