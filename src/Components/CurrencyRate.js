import React, { useState } from 'react';
import Select from 'react-select';

export default function CurrencyRate(props) {
  const [currencylist, setCurrecylist] = useState(['IDR']);
  const [inputValue, setInputValue] = useState(1);
  const [currencyValue, setCurrencyValue] = useState();
  const currency = [
    { label: 'CAD', value: 'CAD' },
    { label: 'IDR', value: 'IDR' },
    { label: 'GBD', value: 'GBP' },
    { label: 'SGD', value: 'SGD' },
    { label: 'INR', value: 'INR' },
    { label: 'MYR', value: 'MYR' },
    { label: 'JPY', value: 'JPY' },
    { label: 'KRW', value: 'KRW' },
  ];
  const addCurrency = () => {
    if (currencyValue !== undefined) {
      setCurrecylist([...currencylist, currencyValue]);
    } else {
      alert('No Currency Selected!');
    }
  };
  const currencyHandler = event => {
    setCurrencyValue(event.value);
  };

  const inputHandler = event => {
    setInputValue(event.target.value);
  };

  let arr = [1,2,3,4,5,6,7,8,9,0]
  const delet = arIndex => {
    console.log(arIndex);
    setCurrecylist(currencylist.filter(index => index !== arIndex));
    console.log(arr.filter(index => index !== arIndex)) 
    
  };



  return (
    <div>
      USD - United State Dollars
      <br />
      <input
        className="InputRate"
        type="number"
        value={inputValue}
        onChange={inputHandler}
      />
      <br />
      <div>
        {currencylist.map((cList, index) => (
          <div key={index} className="ExchangeBox">
            {/* cList is currency list that got from Array and that added from API to Array */}
            <div className="CurrencyType">{cList}</div>
            <div className="Value">
              {(props.exchangeData[cList] * 0.82 * inputValue)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <br />
            <div className="CurrencyRate">
              1 USD = {cList}{' '}
              {(props.exchangeData[cList] * 0.82)
                .toFixed(2)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </div>
            <br />
            <div className="CurrencyName">
              {cList} -{' '}
              {
                (cList = 'IDR'
                  ? 'Indonesian Rupiah'
                  : (cList = 'SGD'
                      ? 'Singapore Dollar'
                      : (cList = 'CAD'
                          ? 'Canadian Dollar'
                          : (cList = 'GBP'
                              ? 'Pound Sterling'
                              : (cList = 'INR'
                                  ? 'Indian Ruppee'
                                  : (cList = 'MYR'
                                      ? 'Malaysian Ringgit'
                                      : (cList = 'JYP'
                                          ? 'Japan Yen'
                                          : (cList = 'KRW'
                                              ? 'Korean Won'
                                              : 'Error'))))))))
              }
            </div>
            <button className="DeleteList" onClick={() => delet(index)}>
              ( - )
            </button>
          </div>
        ))}
      </div>
      <Select options={currency} onChange={currencyHandler} />
      <button className="ButtonSubmit" onClick={addCurrency}>
        Submit
      </button>
    </div>
  );
}
