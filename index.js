import { Parser } from 'binary-parser'

function divideByOneHundred (value) {
  return value / 100
}

const atcMiThermometerParser = new Parser()
  .endianess('little')
  .buffer('mac', { length: 6, formatter: macBuffer => macBuffer.reverse() })
  .int16('temperature', { formatter: divideByOneHundred })
  .int16('humidity', { formatter: divideByOneHundred })
  .uint16('batteryVoltage')
  .uint8('batteryLevel')
  .uint8('counter')
  .uint8('flags')

export default atcMiThermometerParser
