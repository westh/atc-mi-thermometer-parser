# @westh/atc-mi-thermometer-parser

Parse messages from Xiaomi's Mi Thermometers, specifically LYWSD03MMC, who's been flashed with the ATC firmware.
## Installation

```
npm install @westh/atc-mi-thermometer-parser
```

## Usage

```javascript
const atcMiThermometerParser = require('@westh/umxxc-parser')

const messageToBeParsed = Buffer.from('...') // ...data you've gotten via BLE from the ATC flashed Mi Thermometer
const parsedMessage = atcMiThermometerParser.parse(messageToBeParsed)
```

The `parsedMessage` will contain something that looks like the following:

```javascript
{
  mac: <Buffer 7b d4 21 38 c1 a4>,
  temperature: 24.49,
  humidity: 51.35,
  batteryVoltage: 3273,
  batteryLevel: 100,
  counter: 91,
  flags: 5
}
```

## Testing

Running `yarn test` will first run `yarn build` and then test both the CommonJS and ESM version.

## License

MIT
