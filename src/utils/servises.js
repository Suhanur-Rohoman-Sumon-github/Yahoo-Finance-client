export const getstockdata =async (symbol)=>{
const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=9CZTQLSDT8556OQA`)
const data = await response.json()
return data
}