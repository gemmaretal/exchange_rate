import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CurrencyRate from './CurrencyRate';
export default function Exchange() {
  const [exchangeData, setExchangeData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios(
          'http://api.exchangeratesapi.io/v1/latest?access_key=65993b8e2b41270fa73c4f52fbabf1a0&symbols=USD,CAD,IDR,GBP,SGD,INR,MYR,JPY,KRW'
        );
        setExchangeData(result.data.rates);
        console.log(result.data.rates)
      } catch (error) {
        alert(`Error ${error}`);
      }
       
    };
    fetchData();
  }, []);


  if (exchangeData === undefined) {
    return <>Still loading...</>;
  }
  return (
    <div>
      <CurrencyRate exchangeData={exchangeData}/>
    </div>
  );
}
