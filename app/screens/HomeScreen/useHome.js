import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

const callURL = async (symbol) => {
    // console.log(symbol);
    const options = {
        method: 'GET',
        url: 'https://twelve-data1.p.rapidapi.com/price',
        params: {symbol: symbol, format: 'json', outputsize: '30'},
        headers: {
          'X-RapidAPI-Key': 'cbf1619c9dmsh441aabcf084ab6cp1253c7jsnc7b61d3684a5',
          'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
    };
    
    const resp = await axios.request(options);

    // console.log(resp.data.price);
    return {
        symbol: symbol,
        price: resp.data.price
    };
}

const useHome = () => {
    const [data, setData] = useState([
        {symbol: 'JD', price: 123} 
    ]);
    const symbols = ["AACG", "AACI", "AACIU", "AACIW", "AADI", "AAL", "MSFT", "AMZN", "AAPL", "AAME", "AAOI", "AAON", "AATC", "AAWW", "ABCB", "ABCL", "ABCM", "ABEO", "EQ", "EQBK"];
    var n = symbols.length;
    var i = 0;

    useEffect(() => {
        callApi();
      }, [callApi]);

    const callApi = useCallback(async () => {
        try{
            console.log("Outside while loop", i);
            let promises = await [callURL(symbols[0]), callURL(symbols[1]), callURL(symbols[2]), callURL(symbols[3])]
            // console.log(promises);
            Promise.all(promises)
                .then((results) => {
                    // console.log(results);
                    for(let j=0;j<results.length;j++) {
                        const newValue = {symbol: results[j].symbol, price: results[j].price}
                        setData(prevValue => [...prevValue, newValue]);
                    }
                    // console.log(data);
                }) 
                .catch(err => console.log(err));
        } catch {err => console.log(err)}
        setInterval(async () => {
                try{
                    if(i < symbols.length) {
                        i += 4;
                        // console.log("Inside while loop", i);
                        let promises = await [callURL(symbols[i+0]), callURL(symbols[i+1]), callURL(symbols[i+2]), callURL(symbols[i+3])]
                        // console.log(promises);
                        Promise.all(promises)
                            .then((results) => {
                                // console.log("promise results ", results);
                                for(let j=0;j<results.length;j++) {
                                    const newValue = {symbol: results[j].symbol, price: results[j].price}
                                    setData(prevValue => [...prevValue, newValue]);
                                }
                                // console.log("\Inside try block Statement\n", data);
                            }) 
                            .catch(err => console.log(err));
                        }
                } catch {err => console.log(err)}
                
        }, 70000)
    })

    // console.log("\nNear Return Statement\n", data);

    return {
        data
    };
}

export default useHome;
