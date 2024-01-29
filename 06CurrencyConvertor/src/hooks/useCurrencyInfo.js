import { useEffect, useState } from "react"

// custom hooks can use built in hooks like useState, useEffect
function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response) => response.json()) //convert string response into json
        .then((res) => setData(res[currency]))
        console.log(data);
    }, [])
}