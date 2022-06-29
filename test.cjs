const atcMiThermometerParser = require('./lib/cjs/index.js')

console.log('=== commonjs test ===')

const messageUnderTest = Buffer.from('a4c13821d47b91090f14c90c645b05', 'hex')

console.log(atcMiThermometerParser.parse(messageUnderTest))

/*
should output this:

{
  mac: <Buffer 7b d4 21 38 c1 a4>,
  temperature: 24.49,
  humidity: 51.35,
  batteryVoltage: 3273,
  batteryLevel: 100,
  counter: 91,
  flags: 5
}
*/
