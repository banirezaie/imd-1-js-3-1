// const api = '{"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}'

// const toJson = JSON.parse(api)

// console.log(toJson)

// const findPrice = toJson.ticker.price;
// console.log(findPrice)

// it doesn't work, because it is not json format
// console.log(api)
// const apiPrice = api.ticker.price;
// console.log(apiPrice)


//this is the way we must change the data to send it to server
// const api = {"ticker":{"base":"BTC","target":"USD","price":"38280.58063610","volume":"97811.05442583","change":"-202.19261818"},"timestamp":1621704005,"success":true,"error":""}

// const toApiFormat = JSON.stringify(api)
// console.log(toApiFormat)